class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class triangle extends Shape {
    render() {
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`;
    }
}

class circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="75" style="fill:${this.color}"/>`;
    }
}

class square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" style="fill:${this.color}"/>`;
  }
}

module.exports = {
    Shape,
    triangle,
    circle,
    square,
};