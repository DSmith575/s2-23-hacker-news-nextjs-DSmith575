/**
 * @description Array of routes for navList component
 * @file routes.js
 *
 * @author Deacon Smith
 *
 * @param {route} - page route /[folder name]/[title]
 * @param {text} - What is displayed on the Link Button
 * @param {color} - Font color, this is here because of the Hacker News NavButton being a different color
 * @param {hover} - If button has a hover effect (This is purely because the "Hacker News" logo button does not need a hover effect)
 *
 * @returns {Array} - Array of routes
 *
 * @created 31-08-2023
 * @updated 04-09-2023
 */

export const ROUTES = [
  {
    route: '/',
    text: 'Home',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/leaders/top/',
    text: 'Leaders',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/stories/askstories/',
    text: 'Ask Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/stories/beststories/',
    text: 'Best Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/stories/jobstories/',
    text: 'Job Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/stories/newstories/',
    text: 'New Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/stories/showstories/',
    text: 'Show Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/stories/topstories/',
    text: 'Top Stories',
    color: 'text-sky-400',
    hover: true,
  },
];
