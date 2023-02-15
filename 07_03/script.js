/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

backpackContents.push("pencil", 5);
backpackContents.unshift("Another pencil");
backpackContents.pop();

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item; // return the first item meeting this condition.
  }
});
console.log("longItems:", longItems);

console.log(backpackContents.join("|"));
