import { SERIES } from '../../mocks/series.js';
import { SerieType } from '../../models/serie.js';
import { Component } from '../component/component.js';
import { consoleDebug } from '../../tools/debug.js';

//Template separate lists
export class State extends Component {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.innRender(selector);
    }
    createTemplate() {
        return `
            <main class="main">
                <section class="series">
                    <h2 class="section-title">Series list</h2>
                    <div name="list-pending"></div>
                    <div name="list-watched"></div>
                </section>
            </main>
        `;
    }
}

//State of series
export const seriesNoWatched = SERIES.filter((item) => item.watched === false);
export const seriesWatched = SERIES.filter((item) => item.watched === true);

//Message depending of the section
export const serieMsgPending = (serie: Array<SerieType>) => {
    try {
        let itemsTemplate = `<section class="series-pending"><h3 class="subsection-title">Pending series</h3>`;

        serie.length === 0
            ? (itemsTemplate += `<p class="info">Congrats! You've watched all your series</p>`)
            : (itemsTemplate += `<p class="info">You have ${serie.length} series pending to watch</p>`);

        return itemsTemplate;
    } catch (error) {
        consoleDebug((error as Error).message);
    }
};
export const serieMsgWatched = (serie: Array<SerieType>) => {
    try {
        let itemsTemplate = `<section class="series-watched"><h3 class="subsection-title">Watched series</h3>`;
        serie.length === 0
            ? (itemsTemplate += `<p class="info">You already have not watched any serie</p>`)
            : (itemsTemplate += `<p class="info">You have watched ${serie.length} series</p>`);
        return itemsTemplate;
    } catch (error) {
        consoleDebug((error as Error).message);
    }
};

//Generate score of items
export function serieScore(score: number) {
    let scoreTemplate = '';
    if (score === 0) {
        return (scoreTemplate = `
            <li class="score__star">
                <i class="icon--score far fa-star" title="1/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score far fa-star" title="2/5"></i>
                </li>
            <li class="score__star">
                <i class="icon--score far fa-star" title="3/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score far fa-star" title="4/5"></i>
            </li>
            <li class="score__star">
                <i class="icon--score far fa-star" title="5/5"></i>
            </li>`);
    }
    if (score > 0) {
        for (let i = 0; i < score; i++) {
            scoreTemplate += `
            <li class="score__star">
                <i class="icon--score fas fa-star" title="${i + 1}/5"></i>
            </li>`;
        }
        return scoreTemplate;
    }
}

//Delete Button in progress
// export const handleClickDelete = (id: number) => {
//     console.log('CLICK DELETE');
//     const series = SERIES.filter((series) => series.id !== id);
//     return series;
// };

// export const addDeleteListeners = () => {
//     const deleteButtons = document.querySelectorAll('.icon--delete');
//     deleteButtons.forEach((item, index) => {
//         item.addEventListener('click', () => {
//             handleClickDelete(index);
//         });
//     });
// };
