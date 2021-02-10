'use strict'

let userName = prompt('Hello, What is your name?');
console.log(userName);
alert("welcome " +userName+ ". Lets guess more information about me !");

let color = prompt ("My favourite color is red?: Y/N ")
console.log(color);

if ( (color.toLocaleLowerCase() === 'y') || (color.toLocaleLowerCase() === 'yes') ) {
    alert(" No. Red is a nice color but I like purple more")
} else {
    alert(" Correct. Red is a nice color but I like purple more");
}


let hobby = prompt ("My hobby is walking?: Y/N ");
console.log(hobby);

if ( (hobby.toLocaleLowerCase() === 'y') || (hobby.toLocaleLowerCase() === 'yes') ) {
    alert(" Correct. Walking is an excellent sport for body and mind");
} else {
    alert(" No. I like walking, it is an excellent sport for body and mind");
}

let country = prompt ("I'm from Jordan?: Y/N ");
console.log(country);

if ( (country.toLocaleLowerCase() === 'y') || (country.toLocaleLowerCase() === 'yes') ) {
    alert(" Correct. I'm from Jordan");
} else {
    alert(" No. I'm from Jordan");
}

let music = prompt ("I like music?: Y/N ")
console.log(music);

if ( (music.toLocaleLowerCase() === 'y') || (music.toLocaleLowerCase() === 'yes') ) {
    alert(" Correct. Sometimes I like to listen to music");
} else {
    alert(" No.Sometimes I like to listen to music");
}

let sweets = prompt ("I like sweets?: Y/N ")
console.log(sweets);

if ( (sweets.toLocaleLowerCase() === 'y') || (sweets.toLocaleLowerCase() === 'yes')) {
    alert(" No. Sweets are sweet ! but a little is enough.");
} else {
    alert(" Correct. A little of sweets is enough. ");
}


document.getElementById("inputs").innerHTML="Thanks, "+userName+".  your answers are: for color is " +color+  " , for hobby is " +hobby+ " , for country is " +country+  ", for music is " +music+ " and for sweets is "+sweets+ "."; 


// the 6th question of lab 03

let numbersList=[1,2,3,4,5];
console.log(numbersList.length);
console.log(numbersList);

let attempts=4;
let userInput=prompt('From 1 to 5, What is my favourite number?');
let correct = false;

while(attempts > 1 && !correct){
    for (let i= 0;i<numbersList.length;i++){
        if (userInput === '1' ){
           alert('correct answer!');
           correct=true;
           break;
         }
       attempts-=1;
       userInput=prompt('please try again you have : '+attempts+' remaining!');
       }
    if (correct){
       break;
    }
}

// the 7th question of lab 03
let days=['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
let newAttempts=6;
while(newAttempts){
  let newGuess = prompt('Can you guess my favourite day of the week ! you have ' + newAttempts + ' attempts!').toLowerCase();
  if (newGuess=== 'friday'){
    alert('Correct answer! \'' + newGuess + '\' is my day');
    
    break;
  } else{
    newAttempts-=1;
    alert('Wrong answer... you have ' + newAttempts + ' attempts left!');
    if(!newAttempts){
      alert('The correct answer is ' + friday + '!');
      break;
    }
  }
}

alert("Well... your score is " +newAttempts+ ". out of 6!!!");
