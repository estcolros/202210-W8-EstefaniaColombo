import { screen } from '@testing-library/dom';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom';
import { Sample } from './sample';

describe('Given "Sample" component', () => {
    document.body.innerHTML = `<slot></slot>`;
    new Sample('slot');
    const elements = [
        screen.getByRole('heading', { name: 'My Series' }), // <h1>
    ];
    describe.each(elements)(
        'When it is call with a DOM implementation',
        (element: HTMLElement) => {
            test(`Then ${element.tagName} should be render`, () => {
                expect(element).toBeInstanceOf(HTMLElement);
                expect(element).toBeInTheDocument();
            });
        }
    );
});
describe(`Given "Sample" component, 
    When it is instantiate with a invalid DOM selector`, () => {
    const result = new Sample('.invalid');
    test('No element should be render', () => {
        expect(result.render()).toBeFalsy();
    });
});
