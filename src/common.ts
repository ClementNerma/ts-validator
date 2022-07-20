import { err, ok, Validator } from './base'

export const nullValue: Validator<null> = (data) => (data === null ? ok(data) : err('not null'))
export const unknown: Validator<unknown> = (data) => ok(data)

export const boolean: Validator<boolean> = (data) => (typeof data === 'boolean' ? ok(data) : err('not a boolean'))
export const number: Validator<number> = (data) => (typeof data === 'number' ? ok(data) : err('not a number'))
export const string: Validator<string> = (data) => (typeof data === 'string' ? ok(data) : err('not a string'))
export const bigint: Validator<bigint> = (data) => (typeof data === 'bigint' ? ok(data) : err('not a bigint'))
export const symbol: Validator<symbol> = (data) => (typeof data === 'symbol' ? ok(data) : err('not a symbol'))

export function optional<T>(validator: Validator<Exclude<T, null | undefined>>): Validator<T | null | undefined> {
  return (data) => (data === null || data === undefined ? ok(data) : validator(data))
}

export function optionalAsNull<T>(validator: Validator<Exclude<T, null | undefined>>): Validator<T | null> {
  return (data) => (data === null ? ok(null) : validator(data))
}

export function nullable<T>(validator: Validator<Exclude<T, null>>): Validator<T | null> {
  return (data) => (data === null ? ok(null) : validator(data))
}

export function undefinable<T>(validator: Validator<Exclude<T, undefined>>): Validator<T | undefined> {
  return (data) => (data === undefined ? ok(undefined) : validator(data))
}

export function arrayOf<T>(validator: Validator<T>): Validator<T[]> {
  return (data) => {
    if (!Array.isArray(data)) {
      return err('not an array')
    }

    for (let i = 0; i < data.length; i++) {
      const result = validator(data[i])

      if (!result.ok) {
        return err(`in array at item n°${i}: ${result.error.message}`)
      }
    }

    return ok(data)
  }
}

export function recordOf<T>(validator: Validator<T>): Validator<Record<string, T>> {
  return (data) => {
    if (!Array.isArray(data)) {
      return err('not a record (key-value object)')
    }

    for (const [name, value] of Object.entries(data)) {
      const result = validator(value)

      if (!result.ok) {
        return err(`in record property "${name}": ${result.error.message}`)
      }
    }

    return ok(data as any)
  }
}
