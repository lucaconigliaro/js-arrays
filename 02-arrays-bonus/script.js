const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i = teachers.lenght - 1; i >=0; i--) {
  const curTeacher = teachers [1];
  reversedTeachers.push(curTeacher);
}

console.log(reversedTeachers);
console.log(teachers);

// const reversedTeachers = teachers.slice().reverse();
// console.log(reversedTeachers);
// console.log(teachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i =0; i < teachers.length; i++) {
  const curTeacher = teachers [i];
  if(curTeacher.lenght >= 5) {
    longNames.push(curTeacher);
  }
}
console.log(longNames);

// const longNames = teachers.filter((teachersName) >= teachersName.length >= 5);

// 3. Rimuovi 'Ed' dall'array teachers
const edIndex = teachers.indexOf("Ed");
console.log(edIndex);
teachers.splice(edIndex, 1);
console.log(teachers);