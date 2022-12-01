import { App } from './app';
import { Header } from '../header/header';
import { List } from '../series.list/list';
import { State } from '../series.state/state';
jest.mock('../header/header.js');
jest.mock('../series.item/item.js');
jest.mock('../series.list/list.js');
jest.mock('../series.state/state');
describe('Given and instantiate "App" class', () => {
    beforeAll(() => {
        global.window = Object.create(window);
        Object.defineProperty(window, 'location', {
            value: {},
        });
    });
    describe('When location include a pathname "./index.html"', () => {
        test('Then the application components, included HomePage, should be instantiated ', () => {
            global.window.location.pathname = './index.html';
            new App();
            expect(Header).toHaveBeenCalled();
            expect(List).toHaveBeenCalled();
            expect(State).toHaveBeenCalled();
        });
    });
});
