// //Storing Data

// const myName = "Aditya Raval";
// const graduationYear = 2024;
// let currentSkill = "Begineer";
// let daysStudied = 1;

// //Printing data using template literals

// console.log(`Hi ! I'm ${myName}. I graduated in ${graduationYear}.`);
// console.log(
//   `Currently , I am a ${currentSkill} and this is the Day ${daysStudied} of my 90 days sprint.`,
// );

// //Changing variable

// daysStudied = 2;
// console.log(`Tomorrow , it will be Day ${daysStudied}!`);

// let targetSalary = 100000;
// let currentSavings = 10000;

// let gap = targetSalary - currentSavings;

// console.log(`I need to earn ${gap} more to reach my goal!`);



// "JOB ELIGIBLITY CHECKER" 

// let yearsOfExperience = 0 ;
// let knowsJavascript = true ;
// let hasDegree = true ;
// let isLazy = false ;

// if(hasDegree === true || yearsOfExperience >2){
//     console.log("Educational/Experience requirement met.");
// }

// if(!isLazy){
//     console.log("you have the right mindset for this 90-days sprint");
// }


// Make a script that checks:

// If you have studied more than 8 hours AND (you finished your DSA OR you finished your Dev tasks).

let studiedHours = 8 ;
let isDsaDone = true ;
let isDevDone = true ;

if (studiedHours >= 8 && (isDsaDone || isDevDone)) {
    console.log("You are done for the day");
}