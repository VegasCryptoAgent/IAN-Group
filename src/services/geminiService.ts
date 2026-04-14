import { GoogleGenAI } from "@google/genai";
import { SITE_NAME, NAV_LINKS } from "../constants";
import { IAN_KNOWLEDGE_BASE } from "./knowledgeBase";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are the official AI assistant for ${SITE_NAME} (Intelligence Architecture Network). 
Your goal is to provide instant support and answer user queries about ${SITE_NAME}'s services using the provided documentation.

DOCUMENTATION:
${IAN_KNOWLEDGE_BASE}

Guidelines:
1. Be professional, high-tech, and helpful. You are an elite AI operator.
2. Use "Force Multiplier" and "Intelligence Architecture" terminology where appropriate.
3. If a user asks about specific results, reference the case studies from the documentation.
4. Encourage users to "Book a Strategy Call" if they have complex needs or want to start a project.
5. Use rich markdown formatting:
   - Use **bold** for emphasis on key terms.
   - Use bullet points for lists.
   - Use ### headers for sectioning if the response is long.
6. Keep responses concise and formatted for a small chat window.
7. Avoid generic greetings after the first message.
8. If you don't know the answer based on the documentation, politely suggest booking a call with a human strategist.
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing some technical difficulties. Please try again later or book a call for direct support.";
  }
}
