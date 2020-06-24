// Exercice 1: A l'aide d'une boucle, affiche les chiffres de 0 à 100, place les chiffres dans un tableau que tu nommeras fizzBuzzArray, à l'aide de la méthode .push()
let newArray = [];
let iteration = 0;
do {
  newArray.push(iteration);
  iteration++;
} while (iteration <= 100);
console.log(newArray);

// Exercice 2: Toujours à l'aide d'une boucle, passe sur chaque élément du tableau que tu viens de créer (fizzBuzzArray), si l'élément est divisible par trois affiche "fizz" dans la console, si l'élément est divisible par cinq affiche "buzz", si il est divisible par trois et par cinq affiche "fizzBuzz"

for (newArray = 0; newArray <= 100; newArray++) {
  if (newArray % 5 === 0 && newArray % 3 === 0) {
    console.log('FizzBuzz');
  } else if (newArray % 3 === 0) {
    console.log('Fizz');
  } else if (newArray % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(newArray);
  }
}

// Exercice 3: A l'aide de l'objet Date (voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) affiche tous les vendredi 13 de l'année 2020

for (m = 0; m < 12; m++) {
  const myYear = new Date(2020, m, 13);
  const myMonth = myYear.getMonth();
  if (myYear.getDay() === 5) {
    console.log(`MONTH ${myMonth} FRIDAY 13 !`);
  }
}
