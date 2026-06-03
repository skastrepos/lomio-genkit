# Lomio GenKit

From `lomio create` to your first AI result in under 5 minutes.

从 `lomio create` 到第一个 AI 结果，目标控制在 5 分钟以内。

## What It Is / 项目定位

Lomio GenKit is an open-source development framework for AI SaaS builders. It focuses on the boring-but-critical path: create an app, run it locally, call an AI provider, and show a result.

Lomio GenKit 是一个面向 AI SaaS 的开源开发框架，帮助开发者快速完成从创建项目、本地运行、调用 AI Provider 到展示结果的最短闭环。

## V0.1 Scope / V0.1 范围

- pnpm workspace monorepo.
- Next.js App Router web app with TypeScript and Tailwind CSS.
- Workspace packages for `cli`, `core`, `ai`, `db`, `config`, and `shared`.
- Reserved `lomio create` CLI command shape.
- Demo AI Provider that works without an API key.
- AI Story Generator example page.

- pnpm workspace monorepo。
- 使用 TypeScript 和 Tailwind CSS 的 Next.js App Router Web 应用。
- 包含 `cli`、`core`、`ai`、`db`、`config`、`shared` 工作区包。
- 预留 `lomio create` CLI 命令结构。
- 无需 API Key 即可工作的 Demo AI Provider。
- AI Story Generator 示例页。

## Quick Start / 快速开始

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`, enter one sentence, and click `Generate`.

打开 `http://localhost:3000`，输入一句话，然后点击 `Generate`。

## CLI Preview / CLI 预览

```bash
pnpm cli -- create my-ai-app
```

The command is intentionally reserved in V0.1. Real project scaffolding will arrive in a later V0.x release.

该命令在 V0.1 中只预留结构。真正的项目脚手架会在后续 V0.x 版本中加入。

## Packages / 包结构

- `apps/web`: Next.js demo application.
- `packages/cli`: CLI entry point and future scaffolding surface.
- `packages/core`: App composition helpers.
- `packages/ai`: AI provider contracts and Demo Provider.
- `packages/db`: Postgres and Redis boundary placeholders.
- `packages/config`: Configuration helpers.
- `packages/shared`: Shared types and small utilities.

- `apps/web`：Next.js 示例应用。
- `packages/cli`：CLI 入口和未来脚手架扩展面。
- `packages/core`：应用组合辅助能力。
- `packages/ai`：AI Provider 契约和 Demo Provider。
- `packages/db`：Postgres 与 Redis 边界预留。
- `packages/config`：配置辅助能力。
- `packages/shared`：共享类型和小工具。

## Not In V0.1 / V0.1 不包含

Payments, Workflow, Agent, and Marketplace are intentionally not implemented in V0.1. They are tracked in `ROADMAP.md`.

支付、Workflow、Agent、Marketplace 不在 V0.1 实现范围内，仅写入 `ROADMAP.md`。
