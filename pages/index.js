/**
 * @file Renders the home page of the application
 * @author Deacon Smith
 *
 * @description Main page of App
 *
 * @return {JSX.Element} - Home page
 *
 * @created 27-08-2023
 * @updated 28-08-2023
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
