import { ok, Validator } from './base'

export function map<T, U>(validator: Validator<T>, mapper: (value: T) => U): Validator<U> {
  return (data) => {
    const validated = validator(data)
    return validated.ok ? ok(mapper(validated.data)) : validated
  }
}
