// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {    
    test('should return false as the name is too short', () => {
        const result = isValid("sarah");
        expect(result).toBeFalsy();
    });

    test('should return false as the name does not contain a special character', () => {
        const result = isValid("peppermint7");
        expect(result).toBeFalsy();
    });

    test('should return false as the name does not contain a number', () => {
        const result = isValid("peppermint&");
        expect(result).toBeFalsy();
    });

    test('should return true', () => {
        const result = isValid("peppermint&1");
        expect(result).toBeTruthy();
    });
});
