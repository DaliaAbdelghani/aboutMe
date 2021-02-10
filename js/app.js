'use strict';

let userName = prompt('Hello, What is your name?');
alert( 'welcome '+userName+ ' .Lets guess more information about me !');

let color = prompt( ' My favourite color is red?: Y/N  ')
console.log(color);

if ((color.toLocaleLowerCase() === 'y') || (color.toLocaleLowerCase() === 'yes')) {
  alert(' No. Red is a nice color but I like purple more');
} else {
  alert('Correct. Red is a nice color but I like purple more');
}

let hobby = prompt(' My hobby is walking?: Y/N ');
console.log(hobby);

if ((hobby.toLocaleLowerCase() === 'y') || (hobby.toLocaleLowerCase() === 'yes')) {
  alert(' Correct. Walking is an excellent sport for body and mind');
} else {
  alert(' No. I like walking, it is an excellent sport for body and mind');
}

let country = prompt('I am from Jordan?: Y/N ');
console.log(country);

if ((country.toLocaleLowerCase() === 'y') || (country.toLocaleLowerCase() === 'yes')) {
  alert(' Correct. I am from Jordan');
} else {
  alert(' No. I amm from Jordan');
}

let music = prompt('I like music?: Y/N ')
console.log(music);

if ((music.toLocaleLowerCase() === 'y') || (music.toLocaleLowerCase() === 'yes')) {
  alert('Correct. Sometimes I like to listen to music');
} else {
  alert(' No.Sometimes I like to listen to music');
}


let sweets = prompt('I like sweets?: Y/N ')
console.log(sweets);

if ((sweets.toLocaleLowerCase() === 'y') || (sweets.toLocaleLowerCase() === 'yes')) {
  alert('No. Sweets are sweet ! but a little is enough.');
} else {
  alert('Correct. A little of sweets is enough. ');
}

document.getElementById('inputs').innerHTML = 'Thanks, ' + userName + '.  your answers are: for color is ' + color + ' , for hobby is ' + hobby + ' , for country is ' + country + ', for music is ' + music + ' and for sweets is '+ sweets + '.';

// the 6th question of lab 03

let numbersList = [1, 2, 3, 4];
console.log(numbersList.length);
// console.log(numbersList);


let attempts = 4;
let userInput = prompt('From 1 to 4, What is my favourite number?');
let correct = false;

while (attempts && !correct) {
  for (let i = 0; i < numbersList.length; i++) {
    if (userInput === userInput[i]) {
      alert('correct answer!');
      correct = true;
      break;
    }
    attempts -= 1;
    userInput = prompt('please try again you have : ' + attempts + ' remaining!');
  }
  if (correct) {
    break;
  }
}

// the 7th question of lab 03

let newAttempts = 6;
while (newAttempts) {
  let newGuess = prompt('Can you guess my favourite day of the week ! you have ' + newAttempts + ' attempts!').toLowerCase();
  if (newGuess === 'friday') {
    alert('Correct answer! \'' + newGuess + '\' is my day');

    break;
  } else {
    newAttempts -= 1;
    alert('Wrong answer... you have ' + newAttempts + ' attempts left!');
    if (!newAttempts) {
      alert('The correct answer is friday !');
      break;
    }
  }
}

alert('Well... your score is ' + newAttempts + '. out of 6!!!');

// lab 04

function getName(){
  console.log('User name is: ' +userName+ '.');
}
getName(userName);


function getColor(){
  console.log('favourite color is not Red its purple');
  return '* Favourite color is purple';
}
getColor(color);


function getHobby(){
  console.log('favourite hobby is walking');
  return '* Favourite hobby is walking';
}
getHobby(hobby);

function getCountry(){
  console.log('country of origin is Jordan');
  return ' * Country of origin is Jordan';
}
getCountry(country);

function getMusic(){
  console.log('Developer listens to music');
  return ' * Like listening to music';
}
getMusic(music);

function getSweets(){
  console.log('Developer does not like sweets');
  return ' * Do not like sweets';
}
getSweets(sweets);

document.getElementById('answers').innerHTML = ' # Answers of the guess game show more information about me :<br>' +getColor(color)+ '<br>'+getHobby(hobby)+'<br>'+getCountry(country)+'<br>'+getMusic(music)+'<br>'+getSweets(sweets);
