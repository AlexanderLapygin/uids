import { v4 } from 'uuid'
import { UID } from '@uids/uid'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

/**
 * Implements the UID.
 * @class Unique id
 */
export class UUID implements UID {
  private readonly _uuid!: string

  constructor() {
    this._uuid = v4()
  }

  equals(uid: UID): boolean {
    return uid instanceof UUID && this._uuid === uid._uuid
  }
}
