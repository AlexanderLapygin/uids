# UID that is implemented as UUID.

This library is based on [uuid](https://github.com/uuidjs/uuid) implementation to support global
uniqueness.

## Usage

```ts
import { UUID } from '@uids/uid-uuid'

const uuid1 = new UUID()
const uuid2 = new UUID()

console.log(uuid1.equals(uuid2)) // produces 'false'
```
