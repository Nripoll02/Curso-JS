let alumnos = [];
function register() {//funcion que se ejecuta al hacer click en el boton
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let legajo = document.getElementById("legajo").value;
  let alumno = {
    nombre: nombre,
    apellido: apellido,
    legajo: legajo
  };
  alumnos.push(alumno);
  localStorage.setItem("alumnos", JSON.stringify(alumnos));


  //Validacion
  if (nombre == "" || apellido == "" || legajo == "") {
    alert("Complete todos los campos");
  }
}



function MostrarAlumnos() {//Muestra los alumnos en el HTML
  let storageList = JSON.parse(localStorage.getItem("alumnos"));
  if(storageList == null){
    storageList = [];
  }else{
    alumnos = storageList;
  }
  let tabla = document.getElementById("tabla");
  for (i = 0; i < alumnos.length; i++) {
    let fila = tabla.insertRow(i);
    let nombre = fila.insertCell(0);
    let apellido = fila.insertCell(1);
    let legajo = fila.insertCell(2);
    let eliminar = fila.insertCell(3);
    let editar = fila.insertCell(3);
    nombre.innerHTML = alumnos[i].nombre;
    apellido.innerHTML = alumnos[i].apellido;
    legajo.innerHTML = alumnos[i].legajo;
    eliminar.innerHTML = "<button class='btn btn-primary' onclick='EliminarAlumnos()'>Eliminar</button>";
    editar.innerHTML = "<button class='btn btn-primary'>Editar</button>";
  }
}

function EliminarAlumnos() { //Elimina alumnos de la lista
  for (i = 0; i < alumnos.length; i++) {
    let fila = document.getElementById("tabla").deleteRow(i);
  }
}

//Editar alumnos de la lista
// document.querySelector('#tabla').addEventListener('click', (e) => { //AUN NO SE COMO HACERLO
//   target = e.target;
//   if(target.classList.contains('#edit')){
//     selectedRow = target.parentElement.parentElement;
//     document.querySelector('#nombre').value = selectedRow.cells[0].textContent;
//     document.querySelector('#apellido').value = selectedRow.cells[1].textContent;
//     document.querySelector('#legajo').value = selectedRow.cells[2].textContent;

//   }
// })



// Declaramos el array con frases ,el número de posiciones es indiferente
let textos = new Array();
textos[0] = "Espero que estes teniendo un lindo dia!";
textos[1] = "Todo esto se hace con JavaScript";
textos[2] = "Espero que te guste!";
textos[3] = "Cada vez que recargues la pagina, te dara un texto aleatorio";
textos[4] = "Vuelve pronto!";
textos[5] = "Hola mundo";
textos[6] = "Gracias por visitar mi pagina";
textos[7] = "Me costó mucho hacerlo";
// Calculamos la longitud del array (el resultado será el número de frases)
let x = textos.length;
// Generamos un número aleatorio entre 0 y el número de frases
let numAleatorio = Math.round(Math.random() * (x - 1));
// Mostramos la frase aleatoria
let area = (document.getElementById("textArea").innerHTML = textos[numAleatorio]);





