import ListPerson from "./listPerson.js";
import { Student } from "./student.js"
import { Employee } from "./employee.js";
import { Customer } from "./customer.js";

const list = new ListPerson();

// ẨN HIỆN FORM
// SV
const btnThemSV = document.getElementById("btnThemSV");
const formContainerSV = document.getElementById("form-containerSV");
const formThemSV = document.getElementById("form-addSV");
const btnCancel = document.getElementById("btn-cancelSV");

btnThemSV.addEventListener("click", () => {
    formContainerSV.style.display = "flex";
});
btnCancel.addEventListener("click", () => { 
    formContainerSV.style.display = "none"; 
});

// XỬ LÝ CÁC HÀM
const XoaForm = () =>{
    let element = document.getElementsByTagName('input');
    for(let input of element){
        input.value = '';
    }
}

document.getElementById('themSV').addEventListener('click', () => {
    // validation
    const ten = document.getElementById('name').value;
    const dia_chi = document.getElementById('address').value;
    const ma = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const toan = +document.getElementById('math-grade').value;
    const ly = +document.getElementById('physics-grade').value;
    const hoa = +document.getElementById('chemistry-grade').value;

    const sv = new Student(toan, ly, hoa, ten, dia_chi, ma, email);
    list.ThemSV(sv);
    XoaForm();
    renderStudentList(sv);
})

const renderStudentList = (sv) => {
    const studentListElement = document.getElementById('tbodySV');
    
    const studentItems = list.listPerson.map(sv => 
      `<tr>
      <td>${sv.ho_ten}</td>
      <td>${sv.dia_chi}</td>
      <td>${sv.ma}</td>
      <td>${sv.email}</td>
      <td>${sv.toan}</td>
      <td>${sv.ly}</td>
      <td>${sv.hoa}</td>
      <td>${sv.getDTB()}</td>
      <td>
      <button id="sua_${sv.ma}" class="btn btn-success updateSV">Sua</button>
      <button id="xoa_${sv.ma}" class="btn btn-danger deleteSV">Xoa</button>
      </td>

  </tr>`
  );
    studentListElement.innerHTML = studentItems.join('');
    SuaSinhVien('sua_'+sv.ma);
}

const SuaSinhVien = (idBtnSua) => {
    document.getElementById(idBtnSua).addEventListener('click', () => {
        formContainerSV.style.display = "flex";
        let id = idBtnSua;
        let mangTam = id.split('_');
        let maSV = mangTam[1];

        let sinhVien = list.findSinhVien(maSV);
        
        document.getElementById('name').value = sinhVien.ten;
        document.getElementById('address').value = sinhVien.dia_chi;
        document.getElementById('id').value = maSV;
        document.getElementById('email').value = sinhVien.email;
        document.getElementById('math-grade').value = sinhVien.toan;
        document.getElementById('physics-grade').value = sinhVien.ly;
        document.getElementById('chemistry-grade').value = sinhVien.hoa;

    })
}
// Hiển thị thông tin đã sửa lên giao diện

document.getElementById('btn-capNhatSV').addEventListener('click', () => {
    const ten = document.getElementById('name').value;
    const dia_chi = document.getElementById('address').value;
    const ma = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const toan = +document.getElementById('math-grade').value;
    const ly = +document.getElementById('physics-grade').value;
    const hoa = +document.getElementById('chemistry-grade').value;

    const sv_moi = new Student(toan, ly, hoa, ten, dia_chi, ma, email);
    list.SuaThongTin(sv_moi);
    renderStudentList(sv_moi);
})
