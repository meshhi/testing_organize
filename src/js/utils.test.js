import { validateCardNumber } from "./utils"

describe('Card number validation', () => {
    test('invalid card number', () => {
        expect(validateCardNumber('4276040011700974')).toBe(false);
    })
    
    test('valid card number: mir', () => {
        expect(validateCardNumber('2202201865987982')).toBe(true);
    })

    test('valid card number: visa', () => {
        expect(validateCardNumber('4539522422774138')).toBe(true);
    })

    test('valid card number: MasterCard', () => {
        expect(validateCardNumber('2720992529428933')).toBe(true);
    })

    test('valid card number: JCB', () => {
        expect(validateCardNumber('3537824548868446')).toBe(true);
    })

    test('valid card number: Discover', () => {
        expect(validateCardNumber('6011318680272424')).toBe(true);
    })

    test('valid card number: Diners Club', () => {
        expect(validateCardNumber('36328182833643')).toBe(true);
    })

    test('valid card number: amex', () => {
        expect(validateCardNumber('343400805994645')).toBe(true);
    })
})