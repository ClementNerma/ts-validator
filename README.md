# `ts-validator`

Usage example:

```typescript
import { arrayOf, json, number, string, struct } from 'ts-validator'

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
```
