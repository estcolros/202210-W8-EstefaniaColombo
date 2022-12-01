import { Component } from '../component/component.js';
import { serieScore } from '../series.state/state.js';
export class Item extends Component {
    selector;
    constructor(selector, series) {
        super();
        this.selector = selector;
        this.template = this.createTemplate(series);
        this.innRender(selector);
    }
    createTemplate(series) {
        let itemsTemplate = '';
        series.forEach((item) => {
            itemsTemplate += `
             <li class="serie">
                    <img
                        class="serie__poster"
                        src="${item.poster}"
                        alt="${item.name}"
                    />
                    <h4 class="serie__title">${item.name}</h4>
                    <p class="serie__info">${item.creator}${item.year}</p>
                    <p class="serie__info">${item.year}</p>
                    <ul class="score">${serieScore(item.score)}
                    </ul>
                <i role="button" class="fas fa-times-circle icon--delete"></i>
            </li>
        `;
        });
        return itemsTemplate;
    }
}
