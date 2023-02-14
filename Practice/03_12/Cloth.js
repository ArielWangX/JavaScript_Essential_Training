/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Cloth {
  constructor(
    // Defines parameters:
    name,
    color,
    pocketNum,
    style,
    shape,
    howManyYears
  ) {
    // Define properties:
    this.name = name;
    this.color = color;
    this.pocketNum = pocketNum;
    this.fashion = {
      style: style,
      shape: shape,
    };
    this.howManyYears = howManyYears;
  }
  // Add methods like normal functions:
  newFashion(style, shape) {
    this.fashion.style = style;
    this.fashion.shape = shape;
  }
}

export default Cloth;
