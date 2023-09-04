/**
 * @description Metadata for pages
 * @file metaTag.jsx
 * 
 * @author Deacon Smith
 *
 * @param {string} pageTitle - Title of the page
 * @param {string} description - Description of the page
 * 
 * @returns {JSX.Element} - Data to add to the head
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import Head from 'next/head';

const MetaTag = ({ pageTitle, description }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={description} />
      </Head>
    </>
  );
};

export default MetaTag;
