export const validateCardNumber = (cardNumber) => {
    let checkDigit = 0;
    for (let i = cardNumber.length - 2; i >= 0; --i) {
        if (i % 2) {
            checkDigit += Number(cardNumber[i])
        } else {
            checkDigit += Number(cardNumber[i]) > 4 ? Number(cardNumber[i]) * 2 - 9 : Number(cardNumber[i]) * 2
        }
    }
    return (10 - (checkDigit % 10)) == Number(cardNumber[cardNumber.length - 1]);
};

export const cardNumberToSystemMapping = {
    '2': 'mir',
    '4': 'visa',
    '5': 'mastercard',
    '30': 'diners',
    '36': 'diners',
    '38': 'diners',
    '31': 'jcb',
    '35': 'jcb',
    '34': 'amex',
    '37': 'amex',
    '60': 'discover',
}
export const determinePaySystem = (cardNumber) => {
    const possibleSystems = [];
    for (let key in cardNumberToSystemMapping) {
        const regex = new RegExp(`^${key}`);
        if(cardNumber.match(regex)) {
            possibleSystems.push(key);
        }
    }
    
    if (possibleSystems.length) {
        return cardNumberToSystemMapping[possibleSystems[possibleSystems.length - 1]];
    }
}