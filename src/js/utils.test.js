import { validateCardNumber } from "./utils"

describe('Card number validation', () => {
    test('valid card number', () => {
        expect(validateCardNumber('4276040011700973')).toBe(true);
    })

    test('invalid card number', () => {
        expect(validateCardNumber('4276040011700974')).toBe(false);
    })
})