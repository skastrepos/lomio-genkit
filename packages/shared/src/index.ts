export type MaybePromise<T> = T | Promise<T>;

export type Result<TValue, TError = Error> =
  | { ok: true; value: TValue }
  | { ok: false; error: TError };

export function invariant(
  condition: unknown,
  message = "Invariant failed"
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
