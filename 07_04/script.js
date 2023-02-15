/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


// Build an array with 8 items
const array = ["pen", 5, true, 3.2, "backpack", "apple", "car", "flower"];
console.log(array);

// Remove the last item
array.pop();

// Add the last item as the first item on the array 
array.unshift("car");

// Sort the items by alphabetical order
array.sort();

//Use the find() method to find a specific item in the array
const foundItem = array.find((item) => item === "car");
console.log(foundItem);

// Remove the item you found using the find method from the array.
array.splice(array.indexOf(foundItem), 1)

console.log(array);