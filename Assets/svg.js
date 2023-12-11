function LogoShape (shape) {
    if (shape === 'circle') {
        return ('circle cx="150" cy="100" r="80"');
    }
}

function svg(data) {
    return ` 
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${LogoShape(data.shape)} fill="${data.logoColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.colorText}">${data.Characters}</text>

</svg>`
}

