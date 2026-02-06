
import { GoogleGenAI, Type } from "@google/genai";

export const generateMarketingStrategy = async (businessName: string, businessType: string, goals: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  const prompt = `
    Act as Huzaifa, a Digital Marketing Expert. 
    The user is asking for a marketing strategy for their business.
    Business Name: ${businessName}
    Business Type: ${businessType}
    Main Goals: ${goals}

    Create a punchy, actionable 3-step growth strategy using the "Huzaifa" persona (friendly, no jargon, conversion-focused).
    Keep it under 300 words. Format the response nicely.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
    }
  });

  return response.text;
};
