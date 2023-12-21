// const { triangle } = require("./shapes");

function LogoShape(shape) {
    if (shape === 'circle') {
        return ('circle cx="150" cy="100" r="80"');
  }
  if (shape === 'square') {
        return ('rect x="50" y="50" width="200" height="200"')
  }
  if (shape === 'triangle') {
        return ('polygon points="150,50 50,150 250,150"')
  }
}

function svg(theAnswers) {
  return ` 
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${LogoShape(theAnswers.shape)} fill="${theAnswers.logoColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
    theAnswers.colorText
  }">${theAnswers.characters}</text>

</svg>`;
}

module.exports = svg;