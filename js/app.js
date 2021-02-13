'use strict';

let userName = prompt('Hello, What is your name?');
alert( 'welcome '+userName+ ' . Thanks for visiting my page. Lets guess more information about me !');

let finalMark = 0;

// Question 1
let color = prompt( ' My favourite color is red?: Y/N  ')
console.log(color);

function favColor (){
  if ((color.toLowerCase() === 'n') || (color.toLowerCase() === 'no')) {
    alert(' Correct. Red is a nice color but I like purple more');
    finalMark++;
  } else {
    alert(' No. Red is a nice color but I like purple more ');
  }
}

favColor();

// Question 2
let hobby = prompt(' My hobby is walking?: Y/N ');
console.log(hobby);

function favHobby(){
  if ((hobby.toLowerCase() === 'y') || (hobby.toLowerCase() === 'yes') ) {
    alert(' Correct. Walking is an excellent sport for body and mind');
    finalMark++;
  } else {
    alert(' No. I like walking, it is an excellent sport for body and mind');
  }
}

favHobby();

// Question 3
let country = prompt('I am from Jordan?: Y/N ');
console.log(country);

function countryOfOrigin(){
  if ((country.toLowerCase() === 'y') || (country.toLowerCase() === 'yes')) {
    alert(' Correct. I am from Jordan');
    finalMark++;
  } else {
    alert(' No. I am from Jordan');
  }
}

countryOfOrigin();

// Question 4
let music = prompt('I like music?: Y/N ')
console.log(music);

function favMusic(){
  if ((music.toLowerCase() === 'y') || (music.toLowerCase() === 'yes')) {
    alert('Correct. Sometimes I like to listen to music');
    finalMark++;
  } else {
    alert(' No. Sometimes I like to listen to music');
  }
}

favMusic();

// Question 5
let sweets = prompt('I like sweets?: Y/N ')
console.log(sweets);

function favSweets(){
  if ((sweets.toLocaleLowerCase() === 'n') || (sweets.toLocaleLowerCase() === 'no')) {
    alert('Correct. A little of sweets is enough.');
    finalMark++;
  } else {
    alert('No. Sweets are sweet ! but a little is enough.');
  }
}

favSweets();

// Question 6

let userInput = prompt('From 1 to 20 , Can you guess my favourite number in no more than 4 attempts ?');
let attempts = 4;
function favNumber(){

  for ( ;attempts > 0; ) {

    if (userInput === '1' ){
      alert ('Correct . One is may favourite number .');
      finalMark++;
      break;
    }
    else if (userInput > 10 ){
      userInput = prompt ('No. too low.Guess again, you still have '+(attempts-1) +' attempts left');
      attempts--;
    }
    else if (userInput <= 10 ){
      userInput = prompt ('No but too high.Guess again, you still have '+(attempts-1) +' attempts left');
      attempts--;
    }
    else {
      alert ('wrong entry , please enter numbers only.');
      userInput =prompt ('Guess a number, you still have '+(attempts-1) +' attempts left');
      attempts--;
    }
  }
  if (attempts === 0){
    alert ('You carried out the four attempts. The correct answer is 1 .');
  }
}

favNumber();

//Question 7

let favDay = prompt('What is my favourite day in the week?');
let tries = 6;

function getDay(){

  for ( ;tries > 0; ) {

    if (favDay.toLowerCase() === 'friday' ){
      alert ('Correct . Friday is may favourite day in the week .');
      finalMark++;
      break;
    }
    else {
      favDay = prompt ('No. guess again, you still have '+(tries-1) +' attempts left');
      tries--;
    }
  }
  if (tries === 0){
    alert ('You carried out the six attempts. The correct answer is Friday .');
  }
}

getDay();

alert('Well... out of 7 questions your score is ' + finalMark + ' correct answers.');

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

document.getElementById('inputs').innerHTML = 'Thanks, ' + userName + '.  your answers are: <br> for color is ' + color.toUpperCase() + ' , for hobby is ' + hobby.toUpperCase() + ' , for country is ' + country.toUpperCase() + ', for music is ' + music.toUpperCase() + ' and for sweets is '+ sweets.toUpperCase()+ '.';

document.getElementById('answers').innerHTML = ' # Answers of the guessing game show more information about me :<br>' +getColor(color)+ '<br>'+getHobby(hobby)+'<br>'+getCountry(country)+'<br>'+getMusic(music)+'<br>'+getSweets(sweets) +'<br> * Favourite number is One.<br> * Favourite day of the week is Friday.';
