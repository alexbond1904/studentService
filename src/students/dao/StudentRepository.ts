import * as fs from "node:fs";
import Student from "../model/Student";

export default class StudentRepository<T>{
    private readonly filePath: string;

    constructor(filePath = './db.txt') {
        this.filePath = filePath;
    }

    readAll(): T[] {
        try {
            const res = fs.readFileSync(this.filePath,{encoding:'utf-8'});
            const result = JSON.parse(res)
            return result;
        } catch (err: any) {
            console.error(`Error -> ${err}`);
            return [];
        }
    }

    writeAll(arg: T[]):boolean {
        try {
            const data = JSON.stringify(arg,null,2);
            fs.writeFileSync(this.filePath,data,{encoding:'utf-8'});
            return true;
        }catch (err){
            console.error(err)
            return false;
        }
    }
}