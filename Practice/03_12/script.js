/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Cloth from "./Cloth.js";

const cloth = new Cloth("dress", "red", 2, "modern", "A", 4);

console.log("The cloth object:", cloth);
console.log("The fashion value:", cloth.fashion.style);

cloth.newFashion("vintage");
console.log("The fashion value:", cloth.fashion.style);
