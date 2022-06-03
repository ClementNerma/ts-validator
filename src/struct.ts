import { err, ok, Validator } from './base'

/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A }, A>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B }, A, B>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C }, A, B, C>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D }, A, B, C, D>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E }, A, B, C, D, E>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F }, A, B, C, D, E, F>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G }, A, B, C, D, E, F, G>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H }, A, B, C, D, E, F, G, H>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I }, A, B, C, D, E, F, G, H, I>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J }, A, B, C, D, E, F, G, H, I, J>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K }, A, B, C, D, E, F, G, H, I, J, K>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L }, A, B, C, D, E, F, G, H, I, J, K, L>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M }, A, B, C, D, E, F, G, H, I, J, K, L, M>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N }, A, B, C, D, E, F, G, H, I, J, K, L, M, N>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
/* prettier-ignore */ export function struct<_K extends string, _O extends { [key in _K]: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z }, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(schema: { [key in keyof _O]: Validator<_O[key]> }): Validator<_O>;
export function struct(schema: Record<string, Validator<unknown>>): Validator<Record<string, unknown>> {
  return (data) => {
    if (typeof data !== 'object' || data === null) {
      return err('not a struct (non-null object)')
    }

    for (const [prop, validator] of Object.entries(schema)) {
      if (!Object.prototype.hasOwnProperty.call(data, prop)) {
        return err(`missing property "${prop}"`)
      }

      // @ts-ignore
      const propValue: unknown = data[prop]
      const result = validator(propValue)

      if (!result.ok) {
        return err(`in property "${prop}": ${result.error.message}`)
      }
    }

    return ok(data as any)
  }
}
