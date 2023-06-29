import { Person } from "./class.js";

export class Employee extends Person{
    constructor(workingDate, salaryDate, ...restPerson){
        super(...restPerson);
        this.workingDate = workingDate;
        this.salaryDate = salaryDate;
    }

    getSalary(){
        return this.workingDate * this.salaryDate;
    }

}