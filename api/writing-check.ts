import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text } = req.body;
    const LANGUAGETOOL_API = 'https://api.languagetoolplus.com/v2/check';

    const params = new URLSearchParams({
      text,
      language: 'en-US',
    });

    const response = await fetch(LANGUAGETOOL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await response.json();

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

    return res.json({
      matches: data.matches || [],
      corrected,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.json({ error: 'Writing check service error' });
  }
}
