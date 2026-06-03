export type CreateCommandOptions = {
  name: string;
  template?: "web" | "fullstack";
};

export function createProjectCommand(options: CreateCommandOptions) {
  return {
    command: "create",
    name: options.name,
    template: options.template ?? "web",
    status: "reserved"
  } as const;
}
