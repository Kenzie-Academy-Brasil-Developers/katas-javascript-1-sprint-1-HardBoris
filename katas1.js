function oneThroughTwenty() {
    
   /* Retornar os números de 1 a 20*/

    let miMatriz = []

    for (let i = 1; i <= 20; i++) {
      miMatriz.push(i)
    }

    return miMatriz
}

console.log(oneThroughTwenty())//call function oneThroughTwenty

function evensToTwenty() {
    
   /* Retornar os números pares entre 1 e 20 */

   let parMatriz = []
   let cont = 2

   while (cont <= 20) {
     parMatriz.push(cont)
     cont += 2
   }

   return parMatriz
  
}

console.log(evensToTwenty())//call function evensToTwenty

function oddsToTwenty() {
    
  /* Retornar os números ímpares entre 1 e 20 */

  let impMatriz = []
   let idx = 1

   while (idx < 20) {
     impMatriz.push(idx)
     idx += 2
   }

   return impMatriz
   
}

console.log(oddsToTwenty())//call function oddsToTwenty

function multiplesOfFive() {
    
  /* Retornar os múltiplos de 5 entre 1 e 100 */

  let mulMatriz = []
   let fiv = 5

   while (fiv <= 100) {
     mulMatriz.push(fiv)
     fiv += 5
   }

   return mulMatriz

}

console.log(multiplesOfFive())//call function multiplesOfFive

function squareNumbers() {
    
 /* Retorna os quadrados perfeitos entre 1 e 100 */

  let sqMatriz = []

    for (let i = 1; i <= 10; i++) {
      sqMatriz.push(i**2)
    }

    return sqMatriz
    
}

console.log(squareNumbers())//call function squareNumbers

function countingBackwards() {
    
  /* Retornar os números do 20 até 1
     em contagem regressiva */

  let miRevMatriz = []

    for (let i = 20; i > 0; i--) {
      miRevMatriz.push(i)
    }

    return miRevMatriz

}

console.log(countingBackwards())//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Retorna os números pares entre 20 e 1
    em contagem regressiva*/

  let parRevMatriz = []
   let cont = 20

   while (cont > 0) {
     parRevMatriz.push(cont)
     cont -= 2
   }

   return parRevMatriz

}

console.log(evenNumbersBackwards())//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Retorna os números ímpares entre 20 e 1
    em contagem regressiva */

  let impRevMatriz = []
   let idx = 19

   while (idx > 0) {
     impRevMatriz.push(idx)
     idx -= 2
   }

   return impRevMatriz

}

console.log(oddNumbersBackwards())//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function squareNumbersBackwards
