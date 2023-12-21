
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const svg = require("./lib/svg");
// const { Shape, triangle, circle, square } = require('./lib/shapes'); 

//questions that will be prompted to user in terminal thatll determine logo
const questions = [
  {
    type: "input",
    name: "characters",
    message: "What three characters would you like for your logo?",
  },
  {
    type: "input",
    name: "colorText",
    message: "What text color would you like",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like your logo to be?",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "logoColor",
    message: "What color would you like your shape to be?",
  },
];

//this will prompt questions when function is called then save answers 
function init() {
  inquirer.prompt(questions).then((theAnswers) => {

    //saving answers into finalSvgText 
    const finalSvgText = svg(theAnswers);

    //write this text to file
    fs.writeFile("./examples/logo.svg", finalSvgText, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg!")
    );
  });
}

//calling function 
init();
