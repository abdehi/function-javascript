function runExample(parameter) {
  console.log(parameter); // Hello
}

const argument = "Hello";

runExample(argument);

function showMessage(name) {
  console.log(`Hello, ${name}!`);
}

showMessage("Andy"); // "Andy" as argument
// params: name, greeting
function showMessage(name, greeting) {
  console.log(`${greeting}, ${name}!`);
}

showMessage("Andy", "Hello"); // Hello, Andy!
showMessage("Betty", "Welcome"); // Welcome, Betty!

function showMessage(name, greeting) {
  console.log(`${greeting}, ${name}!`);
}

const greeting = "Hello";

const person = {
  name: "Andy",
};

showMessage(person.name, greeting); // Hello, Andy
