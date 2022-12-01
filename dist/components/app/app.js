import { consoleDebug } from '../../tools/debug.js';
import { Header } from '../header/header.js';
import { List } from '../series.list/list.js';
import { State, seriesNoWatched, seriesWatched, } from '../series.state/state.js';
export class App {
    constructor() {
        try {
            new Header('.root');
            new State('.root');
            //llamar dos veces tanto por vista y no vistas
            new List('[name="list-pending"]', seriesNoWatched);
            new List('[name="list-watched"]', seriesWatched);
        }
        catch (error) {
            consoleDebug(error.message);
        }
    }
}
