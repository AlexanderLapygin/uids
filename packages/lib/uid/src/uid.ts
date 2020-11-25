/**
 * Required interface for UID
 */
export interface UID {
  /**
   * Check equality to the given UID
   * @param uid
   */
  equals(uid: UID): boolean
}
