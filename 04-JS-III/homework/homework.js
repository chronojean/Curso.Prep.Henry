// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  return array.map(function (num) {
    return num + 1;
  });
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sum = 0;
  numeros.forEach((elemento) => (sum = sum + elemento));
  return sum;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //me piden una matriz pero me dan un vector como parámetro. Con este arreglo, acepta el vector.
  var i = (j = prom = elementos = 0);
  if (isNaN(resultadosTest) && typeof resultadosTest !== "string") {
    for (i = 0; i < resultadosTest.length; i++) {
      if (resultadosTest[i].length > 0) {
        for (j = 0; j < resultadosTest[i].length; j++) {
          prom = prom + resultadosTest[i][j];
          elementos++;
        }
      } else {
        prom = prom + resultadosTest[i];
        elementos++;
      }
    }
    return prom / elementos;
  } else {
    console.log("El argumento no es un array numérico");
    return resultadosTest;
  }
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //me piden una matriz pero me dan un vector como parámetro. Con este arreglo, acepta el vector.
  var max = (temp = 0);
  if (isNaN(numeros) && typeof numeros !== "string") {
    for (i = 0; i < numeros.length; i++) {
      if (numeros[i].length > 0) {
        temp = Math.max.apply(null, numeros[i]);
      } else {
        temp = numeros[i];
      }
      if (temp > max) max = temp;
    }
    return max;
  } else {
    console.log("El argumento no es un array numérico");
    return;
  }
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) return 0;
  if (arguments.length === 1) return arguments[0];
  var array = Array.prototype.slice.call(arguments);
  var multiplicar = array.pop();
  while (array.length > 0) {
    multiplicar = multiplicar * array.pop();
  }
  return multiplicar;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayores = [];
  if (isNaN(arreglo) && typeof arreglo !== "string") {
    mayores = arreglo.filter((mayor) => mayor > 18);
    return mayores.length;
  } else {
    console.log("El argumento no es un array numérico");
    return arreglo;
  }
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia == 1 || numeroDeDia == 7) return "Es fin de semana";
  else if (numeroDeDia > 1 && numeroDeDia < 7) return "Es dia Laboral";
  else return "ingrese un número de la semana (1-7)";
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n = n + "";
  return n.startsWith("9");
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  const figuales = (arr) => arr.every((elemento) => elemento === arr[0]);
  return figuales(arreglo);
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  var temp;
  if (
    array.includes("Enero") &&
    array.includes("Marzo") &&
    array.includes("Noviembre")
  ) {
    nuevoArray = array.filter(
      (mes) => mes === "Enero" || mes === "Marzo" || mes === "Noviembre"
    );
    return nuevoArray;
  }
  return "No se encontraron los meses pedidos";
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  nuevoArray = array.filter((num) => num > 100);
  return nuevoArray;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArray = [];
  for (var i = 0; i < 10; i++) {
    numero = numero + 2;
    if (numero === i) break;
    nuevoArray.push(numero);
  }
  if (i < 10) return "Se interrumpió la ejecución";
  return nuevoArray;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = [];
  for (var i = 0; i < 10; i++) {
    if (i === 4) continue;
    numero = numero + 2;
    nuevoArray.push(numero);
  }
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
