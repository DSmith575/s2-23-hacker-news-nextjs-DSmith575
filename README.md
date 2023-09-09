## Table of Contents

- [About](#about)
- [Vercel Page](#vercel)
- [Navigation Differences](#Nav)
- [Project Setup](#project-setup)
    + [npm Setup](#npm-setup)
  * [env Setup](#env-setup)
- [Prettier/ESLint](#pre-lint)
- [References](#references)
- [Leaders page Issues](#leaderIss)
- [Other Issues](#othIss)


## About <a name="about"/>
BIT Intermediate App Dev  
Project 1 - Hacker News  

Create and deploy an app using NextJS, the Hacker News API and Vercel deployment

## Vercel Deployment <a name="vercel"/>

[Vercel Deployment](https://assessment1project-hackernewsapp.vercel.app/)

## Navigation Differences <a name="Nav"/>
For pass criteria requirements, the dropdown menu can be found on mobile view.  
Also for this drop down, I have done some additional rendering to not display the Home and Leaders inside the dropdown menu  
Instead they are called in Icons on the mobile view.

### Desktop View
![Screenshot 2023-09-09 235141](https://github.com/otago-polytechnic-bit-courses/assessment-2-react-application-DSmith575/assets/105030622/21f65b7f-0c2a-473f-82b4-754e09e89d57)

### Mobile View
![Screenshot 2023-09-09 235017](https://github.com/otago-polytechnic-bit-courses/assessment-2-react-application-DSmith575/assets/105030622/c626ca67-e517-468d-80af-acaddb248bfb)

## Project Setup <a name="project-setup"/>

### npm Setup <a name="npm-setup"/>
`npm install`

### env Setup <a name="env-setup"/>
Check env.example for correct env variable names  
Add .env to rootDir  
in .env add
```js
NEXT_PUBLIC_HACKER_NEWS_URL="https://hacker-news.firebaseio.com/v0/"
```
OR
```bash
touch .env
echo "NEXT_PUBLIC_HACKER_NEWS_URL=\"https://hacker-news.firebaseio.com/v0/\"" > .env
```

## Running Dev
To run the dev environment run
```js
npm run dev
```

## Build 

To Run the build/start environment

```js
npm run build
npm run start
```

## Formatting Code (Prettier/ESlint) <a name="pre-lint"/>

### ESLint
```js
npm run lint
```

### Prettier
```js
npm run format - to check for errors
npm run format:fix - to fix all errors with prettierconfig
```

## Running Test Suite
To run the Jest/RTL test suite
```js
npm run test
OR
npm run test:watch
```

## References <a name="references"/>

| App Dev | Axios | NextJS | Decoding/Sanitizing HTML | Hacker News API | DateTime |
| ------- | ----- | ------ | ------------------------ | --------------- | -------- |
| [Intro/Inter AppDev](https://github.com/otago-polytechnic-bit-courses/ID608001-intermediate-app-dev-concepts) | [Axios Query Params](https://masteringjs.io/tutorials/axios/get-query-params)  | [NextJS Documentation](https://nextjs.org/docs) | [DangerouslySetHTML](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) | [Hacker News Api LimitToFirst](https://www.elliotsachs.com/how-to-limit-the-number-of-stories-returned-by-the-hacker-news-api/) | [toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) |
| [Slug - Grayson]() | [Axios Instance](https://axios-http.com/docs/instance) | [NextJS [slug] [id]](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments) | [he package](https://www.npmjs.com/package/he) | [Hacker News API README](https://github.com/HackerNews/API) |
| | [Axios Query Params](https://masteringjs.io/tutorials/axios/get-query-params) | | [DOMPurify for DSH](https://www.npmjs.com/package/isomorphic-dompurify) |

| Styling | Icons | MarkDown | JSDoc | Prettier | Eslint |
| ------- | ----- | -------- | ----- | -------- | ------ |
| [Tailwind docs for css styling](https://tailwindcss.com/docs/installation) | [React Icons](https://react-icons.github.io/react-icons/) | [Live preview for writing README](https://markdownlivepreview.com/) | [JSdoc Documentation](https://jsdoc.app/) | [Prettier Documentation for code styling](https://prettier.io/docs/en/) | [Eslint Documentation for lint rules](https://eslint.org/docs/latest/) |

| Youtube | Testing |
| ------- | ------- |
[JackHerr](https://www.youtube.com/@jherr) | [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/) |
| [Fireship](https://www.youtube.com/@Fireship) | [Jest](https://jestjs.io/) |

## Leaders Issues <a name="leaderIss"/>

As the Leader section is hard coded, some users may no longer appear in the top 20, OR the list is not in the correct order - [HN Leaders](https://news.ycombinator.com/leaders)

## Other Issues <a name="othIss"/>
[Original way I created my slug pages](https://github.com/otago-polytechnic-bit-courses/assessment-2-react-application-DSmith575/tree/original-page-routing)  
![Original](https://github.com/otago-polytechnic-bit-courses/assessment-2-react-application-DSmith575/assets/105030622/37518605-1f18-45c6-b9ae-a2c235212b8a)

This way worked fine locally on `dev` and locally using `build` `start`  
But when deployed on Vercel, the catch-all [...id] slugs would all return a 404 page not found.  
Due to not finding any information as to why it wouldn't work on Vercel,  
and still not receiving a reply from Vercel support.  
I opted to trying out a different folder structure which works.  
![Current](https://github.com/otago-polytechnic-bit-courses/assessment-2-react-application-DSmith575/assets/105030622/5d5446c7-1c58-455c-9dd1-f489b3d99d38)

