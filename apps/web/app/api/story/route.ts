import { DemoAIProvider } from "@lomio/ai";

const provider = new DemoAIProvider();

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";

  if (!prompt) {
    return Response.json(
      { error: "Please enter a story seed before generating." },
      { status: 400 }
    );
  }

  const result = await provider.generateText({
    prompt,
    purpose: "story"
  });

  return Response.json({
    story: result.text,
    provider: result.provider,
    model: result.model,
    usage: result.usage,
    createdAt: result.createdAt
  });
}
