import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { CHATBOT_SYSTEM_PROMPT } from "@/lib/chatbot-context";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    system: CHATBOT_SYSTEM_PROMPT,
    messages,
    maxOutputTokens: 500,
  });

  return result.toUIMessageStreamResponse();
}
