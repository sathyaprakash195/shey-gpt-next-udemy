import { type CoreMessage, streamText } from "ai";
import { google } from "@ai-sdk/google";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: google('models/gemini-1.5-flash-latest'),
    system: "You are a helpful assistant.",
    messages,
  });

  return result.toAIStreamResponse();
}
