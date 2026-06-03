import { DemoAIProvider, type AIProvider } from "@lomio/ai";

export type LomioAppOptions = {
  name?: string;
  aiProvider?: AIProvider;
};

export type LomioApp = {
  name: string;
  ai: AIProvider;
};

export function createLomioApp(options: LomioAppOptions = {}): LomioApp {
  return {
    name: options.name ?? "Lomio App",
    ai: options.aiProvider ?? new DemoAIProvider()
  };
}
