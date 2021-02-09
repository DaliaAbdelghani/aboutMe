'use strict'

let userName = prompt('Hello, What is your name?');
console.log(userName);
alert("welcome " +userName+ ". Lets guess more information about me !");

let color = confirm("My favourite color is red?: Y/N ")
console.log(color);

if (color === true) {
    alert(" No. Red is a nice color but I like purple more")
} else {
    alert(" Correct. Red is a nice color but I like purple more");
}


let hobby = confirm("My hobby is walking?: Y/N ");
console.log(hobby);

if (hobby === true) {
    alert(" Correct. Walking is an excellent sport for body and mind");
} else {
    alert(" No. I like walking, it is an excellent sport for body and mind");
}

let country = confirm("I'm from Jordan?: Y/N ");
console.log(country);

if (country === true) {
    alert(" Correct. I'm from Jordan");
} else {
    alert(" No. I'm from Jordan");
}

let music = confirm("I like music?: Y/N ")
console.log(music);

if (music === true) {
    alert(" Correct. Sometimes I like to listen to music");
} else {
    alert(" No.Sometimes I like to listen to music");
}

let sweets = confirm("I like sweets?: Y/N ")
console.log(sweets);

if (sweets === true) {
    alert(" No. Sweets are sweet ! but a little is enough.");
} else {
    alert(" Correct. A little of sweets is enough. ");
}


document.getElementById("inputs").innerHTML="Thanks, "+userName+".  your answers are: for color is " +color+  " , for hobby is " +hobby+ " , for country is " +country+  ", for music is " +music+ " and for sweets is "+sweets+ "."; 


