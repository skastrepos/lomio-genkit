export type LomioConfig = {
  appName?: string;
  aiProvider?: "demo" | string;
  databaseUrl?: string;
  redisUrl?: string;
};

export function defineConfig<TConfig extends LomioConfig>(config: TConfig) {
  return config;
}

export function readLomioEnv(env: Record<string, string | undefined>) {
  return defineConfig({
    appName: env.LOMIO_APP_NAME ?? "Lomio App",
    aiProvider: env.LOMIO_AI_PROVIDER ?? "demo",
    databaseUrl: env.DATABASE_URL,
    redisUrl: env.REDIS_URL
  });
}
