// function hablar(quien, donde){
//     console.log(quien);
//     console.log(donde);
// }

// hablar('Nahuel', 'Mendoza');
// hablar('Messi', 'Rosario');

// const persona = {nombre: "Nahuel", edad: 20, dni: 44309329};
// console.log(persona);
// const persona2 = {nombre: "Lionel", edad: 35, direcc: "Rosario"};
// console.log(persona2);

// console.log(persona.edad);

//*****************OBJETOS*******************

// function Persona(nombre, edad, dni){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.dni = dni;
// }

// const persona1 = new Persona('Nahuel', 20, 44309329);
// console.log(persona1);

// const persona2 = new Persona('Messi', 35, 10101010);
// console.log(persona2);

//*****************CLASES********************

class Persona {
  constructor(nombre, edad, dni) {
    this.nombre = nombre;
    this.edad = parseInt(edad);
    this.dni = dni;
  }

  hablar() {
    console.log(
      "Hola soy " +
        this.nombre +
        " tengo " +
        this.edad +
        " y mi dni es " +
        this.dni
    );
  }
}

let persona1 = new Persona("Nahuel", 19.7, 44309329);
console.log(persona1);

persona1.hablar();
