import { ok, Validator } from './base'

export function collidableOptional<T>(validator: Validator<T>): Validator<T | null | undefined> {
  return (data) => (data === null || data === undefined ? ok(data) : validator(data))
}

export function collidableOptionalAsNull<T>(validator: Validator<T>): Validator<T | null> {
  return (data) => (data === null ? ok(null) : validator(data))
}

export function collidableNullable<T>(validator: Validator<T>): Validator<T | null> {
  return (data) => (data === null ? ok(null) : validator(data))
}

export function collidableUndefinable<T>(validator: Validator<T>): Validator<T | undefined> {
  return (data) => (data === undefined ? ok(undefined) : validator(data))
}
