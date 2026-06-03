export type GenerateTextPurpose = "story" | "chat" | "summary" | string;

export type GenerateTextInput = {
  prompt: string;
  purpose?: GenerateTextPurpose;
  temperature?: number;
};

export type GenerateTextUsage = {
  inputTokens: number;
  outputTokens: number;
};

export type GenerateTextOutput = {
  text: string;
  provider: string;
  model: string;
  finishReason: "stop";
  usage: GenerateTextUsage;
  createdAt: string;
};

export interface AIProvider {
  readonly id: string;
  generateText(input: GenerateTextInput): Promise<GenerateTextOutput>;
}

export class DemoAIProvider implements AIProvider {
  readonly id = "demo";
  readonly model = "demo-story-v0";

  async generateText(input: GenerateTextInput): Promise<GenerateTextOutput> {
    const prompt = normalizePrompt(input.prompt);
    const text = createDemoStory(prompt);

    return {
      text,
      provider: this.id,
      model: this.model,
      finishReason: "stop",
      usage: estimateUsage(prompt, text),
      createdAt: new Date().toISOString()
    };
  }
}

export function createDemoAIProvider() {
  return new DemoAIProvider();
}

function normalizePrompt(prompt: string) {
  const normalized = prompt.replace(/\s+/g, " ").trim();
  return normalized.length > 0 ? normalized : "a small idea looking for a story";
}

function createDemoStory(seed: string) {
  return [
    `The first spark was simple: ${seed}`,
    "By morning, the idea had gathered a name, a problem worth solving, and one brave user willing to try it.",
    "The team shipped the smallest useful version, watched the result arrive on screen, and knew they had something real enough to improve."
  ].join("\n\n");
}

function estimateUsage(prompt: string, text: string): GenerateTextUsage {
  return {
    inputTokens: estimateTokens(prompt),
    outputTokens: estimateTokens(text)
  };
}

function estimateTokens(value: string) {
  return Math.max(1, Math.ceil(value.length / 4));
}
