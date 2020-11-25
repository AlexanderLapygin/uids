# nanoid-based UID implementation

This library is based on [nanoid](https://www.npmjs.com/package/nanoid) implementation to support
efficient global uniqueness.

## Usage

```ts
import { UIDNano } from '@uids/nano'

const uid1 = new UIDNano()
const uid2 = new UIDNano()

console.log(uid1.equals(uid2)) // produces 'false'
```
