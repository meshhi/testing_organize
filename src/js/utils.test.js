import { validateCardNumber } from "./utils"

describe('Card number validation', () => {
    test('valid card number', () => {
        expect(validateCardNumber()).toBeUndefined();
    })
})