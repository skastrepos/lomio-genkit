export type DatabaseConfig = {
  databaseUrl?: string;
  redisUrl?: string;
};

export type DatabaseStatus = {
  postgres: "reserved";
  redis: "reserved";
};

export function createDatabaseBoundary(config: DatabaseConfig = {}) {
  return {
    config,
    status: {
      postgres: "reserved",
      redis: "reserved"
    } satisfies DatabaseStatus
  };
}
