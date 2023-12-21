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

init();
