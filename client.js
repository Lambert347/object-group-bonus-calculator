const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


const newEmployees = [];

function updateEmployees (name, bonusPercentage, totalCompensation, totalBonus ) {
  let employee = {
    name,
    bonusPercentage,
    totalCompensation,
    totalBonus,
  }
  newEmployees.push(employee);
  return newEmployees;
}
updateEmployees('Atticus', 0, 0, 0);
updateEmployees('Jem', 0, 0, 0);
updateEmployees('Scout', 0, 0, 0);
updateEmployees('Robert', 0, 0, 0);
updateEmployees('Mayella', 0, 0, 0);
console.log(newEmployees);



function updateBonus (array, array2) {
  for (let i = 0, j = 0; i < array.length, j < array2.length; i++, j++) {
    if (array2[j].reviewRating <= 2) {
      array[i].bonusPercentage = 0;
    }
    else if(array2[j].reviewRating === 3){
      array[i].bonusPercentage = 4;
    }
    else if(array2[j].reviewRating === 4){
      array[i].bonusPercentage = 6;
    }
    else if(array2[j].reviewRating === 5){
      array[i].bonusPercentage = 10;
    }
  }
  for (let x = 0, y = 0; x < array.length, y < array2.length; x++, y++) {
    parseInt(array2[y].annualSalary, 10);
    if (array2[y].annualSalary > 65000){
      array[x].bonusPercentage -= 1;
    }
    if (array2[y].employeeNumber.length === 4){
      array[x].bonusPercentage += 5;
    }
  }
  for (let o = 0, v = 0; o < array.length, v < array2.length; o++, v++){
    if (array[o].bonusPercentage > 13){
      array[o].bonusPercentage = 13;
    }
    else if (array[o].bonusPercentage < 0){
      array[o].bonusPercentage = 0;
    }
  }
  return array;
}
console.log(updateBonus(newEmployees, employees));
console.log(newEmployees);

function calculateBonus (array, array2){
  for (let i = 0, j = 0; i < array.length, j < array2.length; i++, j++){
    array2[j].annualSalary = parseInt(array2[j].annualSalary, 10);
    array[i].bonusPercentage = array[i].bonusPercentage / 100;
    array[i].totalBonus = array2[j].annualSalary * array[i].bonusPercentage;
    array[i].totalBonus = Math.round(array[i].totalBonus);
    array[i].totalCompensation = array[i].totalBonus + array2[j].annualSalary;
  }
return array;
}

calculateBonus(newEmployees, employees);
console.log(newEmployees);


// function addBonus(array){
//   let bonusPercentage = 0;
//   for (let i = 0; i < array.length; i++){
  

//   }
//   return array;
// }
// addBonus(employees);
// console.log(employees);