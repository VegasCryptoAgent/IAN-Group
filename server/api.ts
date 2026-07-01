import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config({ path: '.env.local' });

const app = express();
app.use(express.json({ limit: '50mb' }));

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const LIBRETRANSLATE_API = process.env.LIBRETRANSLATE_API || 'https://libretranslate.de/translate';
const LANGUAGETOOL_API = 'https://api.languagetoolplus.com/v2/check';

// Groq Chat
app.post('/api/groq-chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!GROQ_API_KEY) {
      return res.json({ error: 'GROQ_API_KEY not configured' });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [{ role: 'user', content: message }],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.choices?.[0]?.message?.content) {
      res.json({ response: data.choices[0].message.content });
    } else {
      res.json({ error: 'Failed to get response from Groq' });
    }
  } catch (error) {
    res.json({ error: 'Server error' });
  }
});

// Gemini Chat
app.post('/api/gemini-chat', async (req, res) => {
  try {
    const { message, imageData } = req.body;

    if (!GEMINI_API_KEY) {
      return res.json({ error: 'GEMINI_API_KEY not configured' });
    }

    const payload: any = {
      contents: [
        {
          parts: [
            { text: message },
          ],
        },
      ],
    };

    // Add image if provided
    if (imageData) {
      const base64Data = imageData.split(',')[1];
      payload.contents[0].parts.unshift({
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Data,
        },
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      res.json({ response: data.candidates[0].content.parts[0].text });
    } else {
      res.json({ error: 'Failed to get response from Gemini' });
    }
  } catch (error) {
    res.json({ error: 'Server error' });
  }
});

// Translation
app.post('/api/translate', async (req, res) => {
  try {
    const { text, sourceLang, targetLang } = req.body;

    const response = await fetch(LIBRETRANSLATE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: sourceLang === 'auto' ? 'auto' : sourceLang,
        target: targetLang,
      }),
    });

    const data = await response.json();

    if (data.translatedText) {
      res.json({ translation: data.translatedText });
    } else {
      res.json({ error: 'Translation failed' });
    }
  } catch (error) {
    res.json({ error: 'Translation service error' });
  }
});

// Writing Check
app.post('/api/writing-check', async (req, res) => {
  try {
    const { text } = req.body;

    const response = await fetch(LANGUAGETOOL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        text,
        language: 'en-US',
      }).toString(),
    });

    const data = await response.json();

    // Transform matches and build corrected text
    let corrected = text;
    const sortedMatches = (data.matches || []).sort((a, b) => b.offset - a.offset);

    for (const match of sortedMatches) {
      if (match.replacements?.length > 0) {
        const replacement = match.replacements[0].value;
        corrected =
          corrected.substring(0, match.offset) +
          replacement +
          corrected.substring(match.offset + match.length);
      }
    }

    res.json({
      matches: data.matches || [],
      corrected,
    });
  } catch (error) {
    res.json({ error: 'Writing check service error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
