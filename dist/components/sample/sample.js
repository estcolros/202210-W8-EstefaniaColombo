import { Component } from '../component/component.js';
export class Sample extends Component {
    selector;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.render();
    }
    render() {
        return super.innRender(this.selector);
    }
    createTemplate() {
        return `<h1>My Series</h1>`;
    }
}
