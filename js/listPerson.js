import {Student} from "./student.js";
import {Employee} from "./employee.js";
// import Customer from "./customer.js";

class ListPerson {
  constructor() {
    this.listPerson = [];
  }

  ThemSV(person) {
    this.listPerson.push(person);
  }

  XoaSV(maSV){
    let vitri = this.FindSinhVien(maSV);
    this.listPerson.splice(vitri, 1);
  }

  UpdatePerson(person) {
    const index = this.list.findIndex((p) => p.id === person.id);
    if (index !== -1) {
      this.listPerson[index] = person;
    }
  }

  SortByName() {
    this.listPerson.sort((a, b) => a.name.localeCompare(b.name));
  }

  FilterByType(type) {
    return this.listPerson.filter((person) => person.constructor.name === type);
  }

  FindSinhVien(maSV){
    for(let sv of this.listPerson){
      if(sv.maSV === maSV){
          return sv;
          break;
      }
    }
  }

  SuaThongTin(sv){
    let vitri = this.FindSinhVien(sv.maSV);
    this.listPerson[vitri] = sv;
  }




}


export default ListPerson;