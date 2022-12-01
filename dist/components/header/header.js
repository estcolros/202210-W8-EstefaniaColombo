import { Component } from '../component/component.js';
export class Header extends Component {
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
        return `
        <header class="main-header">
            <h1 class="main-title">My Series</h1>
        </header>
        `;
    }
}
