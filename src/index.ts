import { json } from './base'
import { arrayOf, number, string } from './common'
import { struct } from './struct'

export * from './base'
export * from './common'
export * from './struct'
export * from './transform'
export * from './collidables'

const schema = struct({
  username: string,
  password: string,
  age: number,
  tastes: arrayOf(string),
})

const value = json('{ "a": 2 }', schema)

if (value.ok) {
  value.data // Typed as: { username: string, password: string, age: number, tastes: string[] }
} else {
  value.error.message // string
}
