// proyecto en Gihub (Listo)

//tipoa de datos nulos e indefinidos 
const constanteNula = null
var constanteIndefinida = undefined
constanteIndefinida = 0
//terminar modificadores de lista 
var lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//copiar elemento de lista 
var primerelemento = lista1[0]
console.log(primerelemento)
//agregar un elemento a una lista 
lista1.push(11)
console.log(lista1)
//sacar un elemento de una lista 
const ultimoElemento = lista1.pop()
console.log(ultimoElemento)
// modificadores booleanos 
var verdadera = true
verdadera = !verdadera
var falsa = false
falsa = !false
// objetos de javascript
var Color =  'Rojo'
var Persona = {
  Edad : 30,
  Nacionalida: 'Colombiano',
  TieneCabelloLargo: false,
  NumerosPreferidos: [1, 2, 4],
  ColorPreferido: 'Rojo',
  Nombre: {
    Nombre: 'willmer',
    Apellido: 'urueña'
  },
  
 ColorPreferido: 'Rojo'
}
//modificadores de objetos
console.log(Persona.Nombre)
//Iprimir propiedades de un objeto
console.log(Persona.ColorPreferido)
//Guardarlas
const NombrePersona = Persona.Nombre.Apellido
console.log(NombrePersona)
// Agregar mas propiedades a un objeto
Persona.ComidaPreferida = 'Hamburguesa'
//Eliminar una propiedad de un objeto
delete Persona.Edad
// Comparadores (>, <, ===, !==, ! )
// Mayor y Menor que 
4 > 3 // true
4 < 3 // false
// Igual
4 === 4 //true
100 === 99 //false
'Hola' === 'Hola' //true
true === true // true
true === false  // true
//Diferente
4 !== 3 // true
4 !== 4 // false

// operadores logicos  (&& ||)
// And | Y | && 
// para que un And sea verdadero los valores de verdad que tiene a su derecha y a su izquierda debe ser verdaderos
false && false // false
true && false  // false
true && true && true // true
false && true && false // false
4 > 3 && 5 > 2 // true
// Or | ó
// para que un or sea true los valores de verdad ue tiene a su derecha o izquierda, alguno de los dos deben ser true
true || false || false // true
4 > 3 || 5 < 2 //true


