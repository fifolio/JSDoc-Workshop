/**
 * Pet Conuter Module
 * @module petCounter
 */

/**
 * Desc: Function that will count the pet total
 * @param {number} first -> existing pets
 * @param {number} second -> new pets
 * @return {number} -> return the total
 */

exports.petCounter = (first, second) =>
  `The total of Existing pets and New pets is: ${first + second}`;
