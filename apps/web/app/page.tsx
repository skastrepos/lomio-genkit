import { StoryGenerator } from "@/components/story-generator";

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-6 text-ink sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col justify-between gap-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-lg font-semibold text-white">
              L
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">
                Lomio GenKit
              </p>
            </div>
          </div>
          <a
            className="rounded-lg border border-ink/15 bg-white/65 px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:border-leaf/45 hover:text-leaf"
            href="https://github.com/"
          >
            GitHub
          </a>
        </header>

        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-w-xl">
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl">
              AI Story Generator
            </h1>
          </div>
          <StoryGenerator />
        </div>
      </section>
    </main>
  );
}
