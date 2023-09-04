/**
 * @description Decodes API HTML text and sanitizes clickable URLs
 * @file decodeSanitize.js
 *
 * @author Deacon Smith
 *
 * @param {Prop} text - Prop for HTML text
 *
 * @returns {Text} - Returns decoded and cleaned HTML text
 *
 * @created 04-09-2023
 * @updated 04-09-2023
 */

import DOMPurify from 'isomorphic-dompurify';
import { decode } from 'he';

export const decodeSanitize = (text) => {
  const decodeHTML = decode(text);
  return { __html: DOMPurify.sanitize(decodeHTML) };
};
