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
//Comments also marked with !! were features done by myself. Otherwise comments without them are changes Eyram and I both made collaboratively 


//Created new array for the new employee objects 
const newEmployees = [];

//Function to take employee name, and values for the other arguments, push that new employee to the newEmployees array, and return the array
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
//Adding the employees from the old array, the bonusPercentage, totalCompensation, and totalBonus are initally set to 0 because they are calculated later
updateEmployees('Atticus', 0, 0, 0);
updateEmployees('Jem', 0, 0, 0);
updateEmployees('Scout', 0, 0, 0);
updateEmployees('Robert', 0, 0, 0);
updateEmployees('Mayella', 0, 0, 0);
console.log(newEmployees);


//Function to loop through the newEmployees array and the employees array at the same time and "communicate" between them
function updateBonus (array, array2) {
  //for loop to work through both array at the same time
  //!! Initally, we had 3 sets of 2 for loops to prevent any issues with the if/else if statements. I changed the program to do all the blocks of if/else if statements in the same set of for loops, cutting out the other two entirely. Looks better but has the same result.
  for (let i = 0, j = 0; i < array.length, j < array2.length; i++, j++) {
    //converts the annualSalary in each employee object of the employees array from a string to a number and updates the value of that annualSalary variable to the new number
    array2[j].annualSalary = Number(array2[j].annualSalary);

    //first if/else if block that checks the reviewRating in the original array and updates the bonusPercentage value in the newEmployees array to the corresonding value to the rating
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

    //second block that checks the annual salary in the orginal array and updates the value of bonusPercentage in the new array if applicable. 
    //Also checks the employee number for the original array and updates the new array's bonusPercentage value. 
    if (array2[j].annualSalary > 65000){
      array[i].bonusPercentage -= 1;
    }
    if (array2[j].employeeNumber.length === 4){
      array[i].bonusPercentage += 5;
    }

    //third block checks the bonusPercentage in the new array and if it is greater than 13, sets it to 13, or if it is less than 0, set it to 0 for each employee
    if (array[i].bonusPercentage > 13){
      array[i].bonusPercentage = 13;
    }
    else if (array[i].bonusPercentage < 0){
      array[i].bonusPercentage = 0;
    }
  }
  //returns the array after the loop has run its course
  return array;
}
//runs the above function and then console.logs the result.
console.log(updateBonus(newEmployees, employees));
console.log(newEmployees);

//function to caluculate the total bonus and the annual compensation
function calculateBonus (array, array2){
  //another set of 2 loops running at the same time to loop through both arrays 
  for (let i = 0, j = 0; i < array.length, j < array2.length; i++, j++){

    //Converts the annual salary in the original array from a string to a number
    array2[j].annualSalary = Number(array2[j].annualSalary);
    
    //Converts the bonusPercentage in the new array to an actual percent by dividing by 100
    array[i].bonusPercentage = array[i].bonusPercentage / 100;
    
    //calculates the total bonus in the new array by taking the annual salary of the original array (called array2 here) and multiplies it by the bonusPercentage in the new array.
    array[i].totalBonus = array2[j].annualSalary * array[i].bonusPercentage;
    
    //rounds the result from above and sets the new total bonus to be that nice and clean rounded number
    array[i].totalBonus = Math.round(array[i].totalBonus);
   
    //calculates total compensation by taking the total bonus from above in the new array and adds it to the annualSalary from the original array
    array[i].totalCompensation = array[i].totalBonus + array2[j].annualSalary;
  }
//returns the now updated compensation data for each employee in the now completed newEmployees array
return array;
}

//Running the above function and console.log the result. 
calculateBonus(newEmployees, employees);
console.log(newEmployees);
