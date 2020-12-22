import { validateUrl } from "../src/client/js/validateUrl"

describe('testing submit', () => {
    test('Returns true on valid url', () => {
        expect(validateUrl('https://www.youtube.com')).toBeTruthy;
    })

})