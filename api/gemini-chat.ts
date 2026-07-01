import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, imageData } = req.body;
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

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
      return res.json({ response: data.candidates[0].content.parts[0].text });
    } else {
      return res.json({ error: 'Failed to get response from Gemini' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.json({ error: 'Server error' });
  }
}
