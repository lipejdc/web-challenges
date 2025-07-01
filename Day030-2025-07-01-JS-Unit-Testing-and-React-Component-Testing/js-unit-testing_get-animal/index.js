// export function getAnimal(animal) {
//     if (animal === "cats") {
//         return `I totally love ${animal}!`;
//     }
//     else if (!animal) {
//         return "I do not like animals at all!";
//     }
//     else {
//         return `I like ${animal}!`;
//     }
// }

export function getAnimal(animal) {
  if (!animal) return "I do not like animals at all!";
  if (animal === "cats") return "I totally love cats!";
  return `I like ${animal}!`;
}
