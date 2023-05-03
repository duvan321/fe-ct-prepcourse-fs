/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { mayuscula } = require("../M08 JavaScript Callback/homework");

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
  
  const entradas = Object.entries(objeto);

  const arrayDeArrays = entradas.map(par => [par[0], par[1]]);
  return arrayDeArrays;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const contador = {};
   // Recorremos el string y contamos la cantidad de veces que aparece cada letra
   for (let i = 0; i < string.length; i++) {
     if (contador[string[i]]) {
       contador[string[i]]++;
     } else {
       contador[string[i]] = 1;
     }
   }
   // Ordenamos el objeto por las claves en orden alfabético
   const entradasOrdenadas = Object.entries(contador).sort();
   // Creamos un nuevo objeto a partir del arreglo de pares clave-valor ordenado
   const objetoOrdenado = {};
   for (let i = 0; i < entradasOrdenadas.length; i++) {
     objetoOrdenado[entradasOrdenadas[i][0]] = entradasOrdenadas[i][1];
   }
   return objetoOrdenado;
 }

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let minusculas = ""
   let mayusculas = ""
   for (let i = 0; i < string.length; i++) {
      if(string[i] === string[i].toUpperCase()){
         mayusculas += string[i]
      }else{
         minusculas += string[i]
      }
      
   }
   return mayusculas + minusculas
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let palabras = frase.split(" ");
  let palabrasInvertidas = [];
  // Recorremos el arreglo de palabras y las invertimos
  for (let i = 0; i < palabras.length; i++) {
    let palabraInvertida = palabras[i].split("").reverse().join("");
    palabrasInvertidas.push(palabraInvertida);
  }
  // Unimos las palabras invertidas en un solo string separadas por un espacio
  return palabrasInvertidas.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numeroString = numero.toString();
   let numeroInvertido = numeroString.split("").reverse().join("");
   switch(numeroString === numeroInvertido) {
     case true:
       return "Es capicua";
     case false:
       return "No es capicua";
   }
 
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let frase = string
   frase = frase.replace(/[abc]/g, "")
   return frase
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
    });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   return array1.filter(function(element) {
      return array2.includes(element);
    });
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
