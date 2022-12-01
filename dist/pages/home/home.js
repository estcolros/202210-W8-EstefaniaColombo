import { Component } from '../../components/component/component.js';
import { Serie } from '../../models/serie.js';
export class HomePage extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
        new Serie('.main');
    }
    createTemplate() {
        return `
        <div class="container">
            <header class="main-header">
                <h1 class="main-title">My Series</h1>
            </header>
            <main class="main">
            </main>
        </div> 
        `;
    }
}
