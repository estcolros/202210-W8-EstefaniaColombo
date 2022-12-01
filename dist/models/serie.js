export class Serie {
    name;
    creator;
    year;
    poster;
    score;
    emmies;
    static generateId() {
        const aNumbers = new Uint32Array(1);
        crypto.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id;
    watched;
    constructor(name, creator, year, poster, score, emmies) {
        this.name = name;
        this.creator = creator;
        this.year = year;
        this.poster = poster;
        this.score = score;
        this.emmies = emmies;
        //this.id = Serie.generateId();
        this.watched = false;
    }
}
