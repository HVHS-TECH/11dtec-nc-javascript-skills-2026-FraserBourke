/* Paste your code from the last task */
/****************************
Name of task: input from HTML
****************************/
console.log("Running t05_introduction.js");


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/************************ 
Variables
************************/

let username = "";     
let year = 2026;
let age = 15;
let money = 20;

let birthYear;
let oldAge;
let halfMoney;

/************************ 
 function
************************/

function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField");

   
    username = NAME_FIELD.value;

  
    Welcome();
}



function Welcome() {

   
    oldAge = age + 10;
    birthYear = year - age;
    halfMoney = money / 2;

    OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

    OUTPUT.innerHTML += "<p>Hi " + username + "</p>";
    OUTPUT.innerHTML += "<p>Hi " + username + " as of " + year + " you are " + age + " years old.</p>";
    OUTPUT.innerHTML += "<p>You were born in " + birthYear + ".</p>";
    OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + " years old.</p>";
    OUTPUT.innerHTML += "<p>You have $" + money + " dollars.</p>";
    OUTPUT.innerHTML += "<p>You spend half your money, now you have $" + halfMoney + ".</p>";
    OUTPUT.innerHTML += "<p>Then you get $3, now you have $" + (halfMoney + 3) + ".</p>";
}