import { nanoid } from 'nanoid'
import { UID } from '@uids/uid'

/**
 * Implements the UID interface.
 * @class UIDNano
 */
export class UIDNano implements UID {
  private readonly _uuid!: string

  constructor() {
    this._uuid = nanoid()
  }

  equals(uid: UID): boolean {
    return uid instanceof UIDNano && this._uuid === uid._uuid
  }
}
