import { Serie, SerieType } from '../../models/serie.js';
import { consoleDebug } from '../../tools/debug.js';
import { Component } from '../component/component.js';
import { Item } from '../series.item/item.js';
import { serieMsgPending, serieMsgWatched } from '../series.state/state.js';

export class List extends Component {
    constructor(private selector: string, series: Array<SerieType>) {
        super();
        this.template = this.createTemplate(series);
        this.innRender(selector);
        this.manageComponent(series);
    }

    render() {
        return super.innRender(this.selector);
    }

    manageComponent(series: Array<SerieType>) {
        consoleDebug(series);
        setTimeout(() => {
            try {
                new Item(`${this.selector} .series-list`, series);
            } catch (error) {
                consoleDebug((error as Error).message);
            }
        }, 100);
    }

    private createTemplate(series: Array<SerieType>) {
        let itemsTemplate = '';
        const listWatcheds = (item: Serie) => item.watched === false;
        const serieWatched = series.every(listWatcheds);
        itemsTemplate += `
             <section class="series">
                    ${
                        serieWatched
                            ? serieMsgPending(series)
                            : serieMsgWatched(series)
                    }
                <ul class="series-list">
                </ul>
            </section>
        `;
        return itemsTemplate;
    }
}
