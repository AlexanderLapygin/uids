import { UIDNano } from '../uid-nano'

describe('UIDNano', () => {
  describe('constructor', () => {
    it('Should create UID successfully', () => {
      expect(() => new UIDNano()).not.toThrow()
    })
    it('Should create different UIDs', () => {
      expect(new UIDNano()).not.toEqual(new UIDNano())
    })
  })
  describe('equals', () => {
    it('Should return false on different UIDs', () => {
      expect(new UIDNano().equals(new UIDNano())).toBe(false)
    })

    it('Should be true on the same UIDs', () => {
      const uid1 = new UIDNano()
      const uid2 = uid1
      expect(uid1.equals(uid2)).toBe(true)
    })
  })
})
