export default class Student {
    private readonly _id:number;
    private _name :string;
    private _scores: Map<string,number>;


    constructor(id: number, name: string, scores: Map<string, number>) {
        this._id = id;
        this._name = name;
        this._scores = scores;
    }

    serialize() {
        return {
            "id": this._id,
            "name": this._name,
            "scores": this._scores,
        }
    }


    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get scores(): Map<string, number> {
        return this._scores;
    }

    set scores(value: Map<string, number>) {
        this._scores = value;
    }

    addScore(key:string, value:number) {
        if(this._scores.get(key) !== undefined) {
            throw new Error(`Score is added for ${key}`);
        }
        this._scores.set(key,value);
    }

}