
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

// formThemSV.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const address = document.getElementById("address").value;
//   const id = document.getElementById("id").value;
//   const email = document.getElementById("email").value;
//   const mathGrade = parseFloat(document.getElementById("math-grade").value);
//   const physicsGrade = parseFloat(document.getElementById("physics-grade").value);
//   const chemistryGrade = parseFloat(document.getElementById("chemistry-grade").value);
//   const student = new Student(name, address, id, email, mathGrade, physicsGrade, chemistryGrade);
//   personList.addPerson(student);
//   formContainerSV.style.display = "none";
// });

// NV
const btnThemNV = document.getElementById("btnThemNV");
const formContainerNV = document.getElementById("form-containerNV");
const formThemNV = document.getElementById("form-addNV");
const btnCancelNV = document.getElementById("btn-cancelNV");

btnThemNV.addEventListener("click", () => {
    formContainerNV.style.display = "flex";
});

btnCancelNV.addEventListener("click", () => { 
    formContainerNV.style.display = "none"; 
});

// formThemNV.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const address = document.getElementById("address").value;
//   const id = document.getElementById("id").value;
//   const email = document.getElementById("email").value;
//   const mathGrade = parseFloat(document.getElementById("math-grade").value);
//   const physicsGrade = parseFloat(document.getElementById("physics-grade").value);
//   const chemistryGrade = parseFloat(document.getElementById("chemistry-grade").value);
//   const student = new Student(name, address, id, email, mathGrade, physicsGrade, chemistryGrade);
//   personList.addPerson(student);
//   formContainerNV.style.display = "none";
// });


// KH

const btnThemKH = document.getElementById("btnThemKH");
const formContainerKH = document.getElementById("form-containerKH");
const formThemKH = document.getElementById("form-addKH");
const btnCancelKH = document.getElementById("btn-cancelKH");

btnThemKH.addEventListener("click", () => {
    formContainerKH.style.display = "flex";
});

btnCancelKH.addEventListener("click", () => { 
    formContainerKH.style.display = "none"; 
});

// formThemKH.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const address = document.getElementById("address").value;
//   const id = document.getElementById("id").value;
//   const email = document.getElementById("email").value;
//   const mathGrade = parseFloat(document.getElementById("math-grade").value);
//   const physicsGrade = parseFloat(document.getElementById("physics-grade").value);
//   const chemistryGrade = parseFloat(document.getElementById("chemistry-grade").value);
//   const student = new Student(name, address, id, email, mathGrade, physicsGrade, chemistryGrade);
//   personList.addPerson(student);
//   formContainerKH.style.display = "none";
// });