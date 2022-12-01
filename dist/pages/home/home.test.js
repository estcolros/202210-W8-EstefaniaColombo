import { screen } from '@testing-library/dom';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom';
import { HomePage } from './home';
describe('Given "HomePage" component', () => {
    document.body.innerHTML = `<slot></slot>`;
    new HomePage('slot');
    const elements = [
        screen.getByRole('heading', { name: 'Home' }), // <h2>
    ];
    describe.each(elements)('When it is call with a DOM implementation', (element) => {
        test(`Then ${element.tagName} should be render`, () => {
            expect(element).toBeInstanceOf(HTMLElement);
            expect(element).toBeInTheDocument();
        });
    });
});
