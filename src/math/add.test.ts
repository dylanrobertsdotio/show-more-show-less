import { add } from './add'

describe('testing the add functionality', () => {
    it('should add two positive numbers', () => {
        expect(add(1, 2)).toBe(3)
    })

    it('should add two positive numbers', () => {
        expect(add(-1, -2)).toBe(-3)
    })
})
