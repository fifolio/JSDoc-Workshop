// @ts-check

/**
 * Desc: This is the Pen Name.
 * @type {String}
 */

const petName = "Ruby";

/**
 * Desc: This is the number of pets
 * @type {Number}
 */
const petNumber = 100;

/**
 * Desc: This is an array includes details with different types,
 * @type {Array}
 */
const myPetsPrices = [138.4, 522.3, 42.5, 43.23, 99, 75, "hi", true];

/**
 * Desc: This Array includes the available Pets names
 * @type {Array<String>}
 */
const myPetsNames = ["Alissa", "Vies", "Roda", "Mea"];

/**
 * Desc: This object store Coco pet details
 * @type {{id: number, name: string, age: number | number, alive: true}}
 */
const pet = {
  id: 1,
  name: "Coco",
  age: 2,
  alive: true,
};

/**
 * Desc: this function gets the current year and subtract it from the year of birth to return with the age
 * @param {Number} current -> current year
 * @param {Number} yearOfBirth -> year of birth
 * @returns {String} that calculate the age
 */
let caluc = (current, yearOfBirth) => {
  return `${current - yearOfBirth}`;
};

console.log(caluc(2023, 1996));
