import DOMPurify from 'isomorphic-dompurify';
import { decode } from 'he';

export const decodeSanitize = (text) => {
  const decodeHTML = decode(text);
  return { __html: DOMPurify.sanitize(decodeHTML) };
};
