/**
 * @description Converts unix time to readable format
 * @file convertUnix.js
 *
 * @author Deacon Smith
 *
 * @param {Prop} timeStamp - Prop for unix timestamp
 *
 * @returns {Date} Returns sliced ISO date
 *
 * @created 04-09-2023
 * @updated 04-09-2023
 */

export const convertTime = (timeStamp) => {
  return new Date(timeStamp * 1000).toISOString().slice(0, 10);
};
