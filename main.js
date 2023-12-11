const inquirer = require(inquirer);
const svg = require(./Assets/svg);

const question = [{
    type: 'input',
    name: 'Characters',
    message: 'What three characters would you like for your logo?'
},
    {
    type: 'input',
    name: 'colorText',
    message: 'What text color would you like'
    },
    {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like your logo to be?',
    choices: ['circle', 'triangle', 'square']
    },
    {
    type: 'input',
    name: 'logoColor',
    message: 'What color would you like your shape to be?'
    },]

    // create function to call inquirer

    // create function to render svg.file

