import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text, sourceLang, targetLang } = req.body;
    const LIBRETRANSLATE_API = 'https://libretranslate.de/translate';

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
      return res.json({ translation: data.translatedText });
    } else {
      return res.json({ error: 'Translation failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.json({ error: 'Translation service error' });
  }
}
