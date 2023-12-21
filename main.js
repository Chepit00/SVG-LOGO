const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const svg = require("./lib/svg");

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

function init() {
  inquirer.prompt(questions).then((theAnswers) => {
    // run my makeSvg function here
    const finalSvgText = svg(theAnswers);
    //write this text to file
    //   fs.writeFileSync(path.join(process.cwd(), "logo.svg"), finalSvgText);
    fs.writeFile("./examples/logo.svg", finalSvgText, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg!")
    );
  });
}

// // create function to render svg.file
// function makeSvg(answersObject) {
//   const { characters, colorText, shape, logoColor } = answersObject;

//   let shapeSvg;
//   switch (shape) {
//     case "circle":
//       shapeSvg = `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${logoColor}" />`;
//       break;
//     case "triangle":
//       shapeSvg = `<polygon points="50,10 90,90 10,90" stroke="black" stroke-width="3" fill="${logoColor}" />`;
//       break;
//     case "square":
//       shapeSvg = `<rect width="80" height="80" x="10" y="10" stroke="black" stroke-width="3" fill="${logoColor}" />`;
//       break;
//     default:
//       console.error("Invalid shape");
//       return;
//   }

//   const finalSvgText = `<svg width="100" height="100">${shapeSvg}</svg>`;

//   return finalSvgText;
  // return "Here is your text from the makeSvg function"

  // I might destructure the properties from the argument answersObject
  // so const { characters, colorText, shape, logoColor } = answersObject

  // you will need to use some logic to determine what shape to create based
  // on the user input
  // switch statement comes in handy here to handle the three shape cases

  // use the params to create your svg element
  // ....
  // const finalSvgText = ...
  // return finalSvgText
// }
init();
