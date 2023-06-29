import { Person } from "./class.js";

export class Student extends Person{
    constructor(toan, ly, hoa, ...restPerson){
        super(...restPerson);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
    }
    getDTB(){
        return ((this.toan + this.ly + this.hoa)/3).toFixed(1);
    }
    
}