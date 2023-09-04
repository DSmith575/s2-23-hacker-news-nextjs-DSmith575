/**
 * @description Main page of App
 * @file index.js
 * @author Deacon Smith
 *
 *
 * @return {JSX.Element} - Home page
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import MetaTag from '@/components/metaTag/metaTag.jsx';

export default function Home() {
  return (
    <>
      <MetaTag
        pageTitle={'Hacker News'}
        description={'Hacker news home page'}
      />
    </>
  );
}
