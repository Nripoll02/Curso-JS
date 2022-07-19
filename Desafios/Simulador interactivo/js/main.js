let alumnos = [];

function RegistrarAlumno() {//Registra alumnos en la lista
  cantidadAlumnos = parseInt(
    prompt("Ingrese la cantidad de alumnos que desea registrar")
  );
  for (i = 0; i < cantidadAlumnos; i++) {
    alumnos.push({
      nombre: prompt("Ingrese el nombre del alumno"),
      legajo: prompt("Ingrese el legajo del alumno"),
    });
  }
}

function MostrarAlumnos() {//Muestra los alumnos en el HTML
  for (i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i].nombre, alumnos[i].legajo);
  }
}

function EliminarAlumnos() { //Elimina alumnos de la lista
  let eliminar = prompt("Ingrese el legajo del alumno que desea eliminar");
  for (i = 0; i < alumnos.length; i++) {
    if (alumnos[i].legajo == eliminar) {
      alumnos.splice(i, 1);
    }
  }
}

function EditarAlumno() {//Edita alumnos de la lista
  let editar = prompt("Ingrese el legajo del alumno que desea editar");
  for (i = 0; i < alumnos.length; i++) {
    if (alumnos[i].legajo == editar) {
      alumnos[i].nombre = prompt("Ingrese el nombre del alumno");
    }
  }
}

function CalcularPromedio() {//Al finalizar, muestra los resultados en el HTML
  const aprobados = [];
  const desaprobados = [];
  for (let alumnos = 1; alumnos < 4; alumnos++) {
    let parcial, final, promedio;
    nombre = prompt("Ingrese el nombre del alumno");
    parcial = parseFloat(prompt("Parcial"));
    final = parseFloat(prompt("Final"));
    promedio = (parcial + final) / 2;

    if (promedio >= 7) {
      document.write(
        "El promedio de " + nombre + " es " + promedio + " APROBADO "
      );
      aprobados.push(promedio);
      console.log(aprobados);
    } else {
      document.write(
        "El promedio de " + nombre + " es " + promedio + " DESAPROBADO "
      );
      desaprobados.push(promedio);
      console.log(desaprobados);
    }
  }
}

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


document.addEventListener("keyup", function (event) { //Evento que se ejecuta cuando se presiona una tecla (ENTER)
  if (event.keyCode === 13) {
    alert('Has presionado ENTER!');
  }
});