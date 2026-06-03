"use client";

import { FormEvent, useMemo, useState } from "react";

type StoryResponse = {
  story?: string;
  provider?: string;
  model?: string;
  error?: string;
};

const exampleSeed = "A tiny bakery discovers a compass that points toward unfinished dreams.";

export function StoryGenerator() {
  const [prompt, setPrompt] = useState(exampleSeed);
  const [story, setStory] = useState("");
  const [model, setModel] = useState("demo-story-v0");
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const canGenerate = useMemo(
    () => prompt.trim().length > 0 && !isGenerating,
    [isGenerating, prompt]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canGenerate) {
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      const response = await fetch("/api/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = (await response.json()) as StoryResponse;

      if (!response.ok) {
        throw new Error(data.error ?? "Story generation failed.");
      }

      setStory(data.story ?? "");
      setModel(data.model ?? "demo-story-v0");
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Story generation failed."
      );
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="grid gap-4 rounded-[0.65rem] border border-ink/10 bg-white/78 p-4 shadow-soft backdrop-blur sm:p-5">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2" htmlFor="story-seed">
          <span className="text-sm font-semibold text-ink/70">Story seed</span>
          <textarea
            className="min-h-32 resize-none rounded-lg border border-ink/15 bg-white px-4 py-3 text-base leading-7 text-ink shadow-sm transition placeholder:text-ink/35 hover:border-ink/25"
            id="story-seed"
            maxLength={240}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="Write one sentence."
            value={prompt}
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-ink/50">{model}</p>
          <button
            className="rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-leaf disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:bg-ink"
            disabled={!canGenerate}
            type="submit"
          >
            {isGenerating ? "Generating..." : "Generate"}
          </button>
        </div>
      </form>

      <article
        aria-live="polite"
        className="min-h-48 rounded-lg border border-ink/10 bg-mist/85 p-4"
      >
        {error ? (
          <p className="text-sm font-semibold text-ember">{error}</p>
        ) : story ? (
          <p className="whitespace-pre-wrap text-base leading-8 text-ink">
            {story}
          </p>
        ) : (
          <p className="text-base leading-8 text-ink/45">
            Generated story will appear here.
          </p>
        )}
      </article>
    </div>
  );
}
