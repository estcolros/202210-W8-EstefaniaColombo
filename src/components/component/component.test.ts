import { Component } from './component';

class Test extends Component {}

describe('Given a class that extends abstract class Component', () => {
    test('Then public render method should not return value', () => {
        const testComponent = new Test();
        expect(testComponent.render()).toBeFalsy();
    });
});
