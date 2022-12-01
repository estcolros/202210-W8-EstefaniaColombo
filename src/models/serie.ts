export type SerieType = {
    id: number;
    name: string;
    creator: string;
    year: number;
    poster: string;
    watched: boolean;
    score: number;
    emmies: number;
};

export class Serie implements SerieType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        crypto.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }

    id!: number;
    watched: boolean;
    constructor(
        public name: string,
        public creator: string,
        public year: number,
        public poster: string,
        public score: number,
        public emmies: number
    ) {
        this.watched = false;
    }
}
