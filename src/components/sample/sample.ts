import { Component } from '../component/component.js';

export class Sample extends Component {
    constructor(private selector: string) {
        super();
        this.template = this.createTemplate();
        this.render();
    }

    render() {
        return super.innRender(this.selector);
    }
    private createTemplate() {
        return `<h1>My Series</h1>`;
    }
}
