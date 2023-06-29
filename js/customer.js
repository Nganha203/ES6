import { Person } from "./class.js";

export class Customer extends Person{
    constructor(cong_ty, gia_tri_hoa_don, danh_gia, ...restPerson){
        super(...restPerson);
        this.cong_ty = cong_ty;
        this.gia_tri_hoa_don = gia_tri_hoa_don;
        this.danh_gia = danh_gia;
    }
}