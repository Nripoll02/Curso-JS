
// let boton = document.getElementById('boton');

// function ejecutarBoton(){
//     alert("Formulario enviado");
// }


// boton.onmousemove = () => {
//     console.log('mouse move');
// }

// let input1 = document.getElementById('inputNombre');

// input1.onkeyup = () => {
//     console.log('Key up');
// }
// input1.onkeydown = () => {
//     console.log('Key down');
// }
// input1.onchange = () => {
//     console.log('Change');
// }

// const nombre = document.getElementById('inputNombre');
// nombre.onchange = () => {
//     console.log('Tu nombre es: ' + nombre.value);
// }
// const telefono = document.getElementById('inputTelefono');
// telefono.onchange = () => {
//     console.log('Tu telefono es: ' + telefono.value);
// }
// const email = document.getElementById('inputEmail');
// email.onchange = () => {
//     console.log('Tu email es: ' + email.value);
// }

let nombreIngresado = '';
let telefonoIngresado = '';
let emailIngresado = '';

let inputNombre = document.getElementById('inputNombre');
let inputTelefono = document.getElementById('inputTelefono');
let inputEmail = document.getElementById('inputEmail');

inputNombre.addEventListener('input', () => {
    nombreIngresado = inputNombre.value;
})
inputTelefono.addEventListener('input', () => {
    telefonoIngresado = inputTelefono.value;
})
inputEmail.addEventListener('input', () => {
    emailIngresado = inputEmail.value;
})

let mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', () => {
    console.log('Tu nombre es: ' + nombreIngresado);
    console.log('Tu telefono es: ' + telefonoIngresado);
    console.log('Tu email es: ' + emailIngresado);
})