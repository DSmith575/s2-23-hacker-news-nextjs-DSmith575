/**
 * @description Array of routes for navList component
 * @file routes.js
 * 
 * @author Deacon Smith
 * 
 * @param {route} - page route
 * @param {text} - What is displayed on the Link
 * @param {color} - Font color
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
    route: '/leaders/top20',
    text: 'Leaders',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/story/askstories',
    text: 'Ask Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/story/beststories',
    text: 'Best Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/story/jobstories',
    text: 'Job Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/story/newstories',
    text: 'New Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/story/showstories',
    text: 'Show Stories',
    color: 'text-sky-400',
    hover: true,
  },
  {
    route: '/story/topstories',
    text: 'Top Stories',
    color: 'text-sky-400',
    hover: true,
  },
];
