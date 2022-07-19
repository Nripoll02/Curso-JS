// let nombre = localStorage.getItem("nombre");
// let tel = localStorage.getItem("tel");
// document.getElementById("nombre").value = nombre;
// document.getElementById("tel").value = tel;


let array = localStorage.getItem("myArrayJSON");
console.log(array);

function enviarFormulario() {
//   let nombre = document.getElementById("nombre").value;
//   let tel = document.getElementById("tel").value;
//   localStorage.setItem("nombre", nombre);

    let array = [
        {nombre: "Juan", tel: "123456789"},
        {nombre: "Pedro", tel: "987654321"},
    ];

    let JSONarray = JSON.stringify(array);

    // let myArrayJSON = '[{"nombre":"' + nombre + '","tel":"' + tel + '"}]';
    localStorage.setItem("myArrayJSON", JSONarray);
}   


//Diferencia entre JSON y LocalStorage
// let myArray = [1, 2, 3, 4, 5];
// let myArrayJSON = '[1, 2, 3, 4, 5]';

//   let numero = 99;
//   let numeroJSON = '99';

//   let myString = 'Hola';
//   let myStringJSON = 'Hola';

//   let myArrayObjetos = [{nombre: 'Nahuel'}, {nombre: 'Juan'}];

//   let myArrayObjetosJSON = '[{"nombre": "Nahuel"}, {"nombre": "Juan"}]';
