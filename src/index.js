// @ts-check

/**
 * @file index.js is the homepage for this application
 * @author fifolio
 * @see <a href="https://github.com/fifolio"><img src="https://avatars.githubusercontent.com/u/97522852?v=4" style="border-radius: 50%; width: 35px; margin-bottom: -12px; margin-right: 10px;"/><span>Go To GitHub</span></a>
 */

const { petCounter } = require("./petcounter");

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
 * @type {{id: number, name: string, age: number | number, alive: boolean}}
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

/**
 * Desc: This is an object includes details with different property types,
 * @typedef {Object} Dog
 * @property {Number} id
 * @property {String} name
 * @property {Number | String} age -> accept Numbers or Strings
 * @property {Boolean} isMale
 * @property {Boolean} [alive] -> optional
 */
/**
 * @type {Dog}
 */
const dog = {
  id: 1,
  name: "bean",
  age: 8,
  isMale: false,
  alive: true,
};

class Owner {
  /**
   * Pet owner detail
   * @param {Object} ownerDetail
   */
  constructor(ownerDetail) {
    /**
     * @property {string} name
     * @property {number | string} age
     */
    this.name = ownerDetail.name;
    this.age = ownerDetail.age;
  }
  /**
   * @property {Function} printOwner -> Print out owner information
   * @return {void}
   */
  printOwner() {
    console.log(`Name is: ${this.name} and age is: ${this.age}`);
  }
}

/**
 * Link to Owner class
 * See {@link Owner}
 */
const owner1 = new Owner({
  name: "Keily",
  age: 22,
});

owner1.printOwner();

console.log(petCounter(19, 5));
