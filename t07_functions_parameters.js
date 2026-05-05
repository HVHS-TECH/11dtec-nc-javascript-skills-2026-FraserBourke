/* Paste your code from task 3, Maths here */
/* Paste your code from task 2 here */
/* Paste your code from task 1 here */
/****************************
Name of task: Javascript and HTML
****************************/
console.log("Running t05_introduction.js")


//variables
let Username = "Fraser";
let year = 2026;
let age = "15";
let money = 20;
let birthYear;
let oldAge;
let name = "Fraser";

oldAge = age + 10;
birthYear = year - age;
halfMoney = money / 2;
const OUTPUT = document .getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
/************************ 
Main code
************************/

OUTPUT.innerHTML += ("<p>Hi "+ Username + " as of " + year + " you are " + age + " years old.</p>");
OUTPUT.innerHTML += ("<p>You were born in " + birthYear)
OUTPUT.innerHTML += ("<p>In 10 years you will be " + oldAge + " years old </p>")
OUTPUT.innerHTML += ("<p>you have " + money + " dollars </p>")
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + " dollars</p>")
OUTPUT.innerHTML += (" <p>Then you get $3, now you have " + (halfMoney + 3) + " dollars </p>")

/************************ 
Functions
************************/
function Welcome(){
OUTPUT.innerHTML += "<p>Welcome</p>";

}

Welcome();

function displayWelcome(_name, _age){
OUTPUT.innerHTML += "<p>Welcome to the page "+_name+"</p>";
OUTPUT.innerHTML += "<p>You are "+_age+" years old</p>";
}


// This is a single line comment

