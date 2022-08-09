//Ajax y Fetch
//Fetch
//Fetch es una libreria que nos permite hacer peticiones a un servidor
//Fetch es una promesa

//https://pokeapi.co/api/v2/pokemon/snorlax/

// console.log("Queremos saber el peso de Snorlax");

// fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
//   .then((resinicial) => resinicial.json())
//   .then((res) => {
//     console.log(res.results);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// function clickEnPoque(name) {
//   alert("Click en " + name);
// }

// fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
//   .then((resinicial) => resinicial.json())
//   .then((res) => {
//     const miArray = res.results;

//     let htmlAux = '';
//     for (let i = 0; i < miArray.length; i++) {
//       htmlAux =
//         htmlAux +
//         `<div onclick="clickEnPoque('${miArray[i].name}');">
//             <h3>${miArray[i].name}</h3>
//             <a href="${miArray[i].url}">${miArray[i].url}</a>
//         </div>`;
//     }
//     document.getElementById('listadoDePoques').innerHTML = htmlAux;
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//Async Await
//Async Await es una forma de escribir una funcion asincrona

async function main() {
    const res = await fetch("../data.json");
    const miArray = await res.json();
    
      let htmlAux = "";
      for (let i = 0; i < miArray.length; i++) {
        htmlAux =
          htmlAux +
          `<div onclick="clickEnProducto('${miArray[i].id}');">
            <h3>${miArray[i].name}</h3>
            <p>${miArray[i].price}</p>
            <a href="${miArray[i].url}">${miArray[i].url}</a>
        </div>`;
      }
      document.getElementById("listadoDePoques").innerHTML = htmlAux;
      console.log(htmlAux);
   
}

main();
