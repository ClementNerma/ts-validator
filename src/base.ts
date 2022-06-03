export type Validator<T> = (input: unknown) => ValidationResult<T>

export type ValidationResult<T> = { ok: true; data: T } | { ok: false; error: ValidationError }

export class ValidationError extends Error {}

export const ok = <T>(data: T): ValidationResult<T> => ({ ok: true, data })
export const err = <T>(msg: string): ValidationResult<T> => ({ ok: false, error: new ValidationError(msg) })

export function json<T>(input: string, validator: Validator<T>): ValidationResult<T> {
  let parsed: unknown

  try {
    parsed = JSON.parse(input)
  } catch (e: unknown) {
    return err(e instanceof Error ? e.message : '<unknown error>')
  }

  return validator(parsed)
}
