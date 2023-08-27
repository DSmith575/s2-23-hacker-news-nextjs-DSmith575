/**
 * @file Metadata for pages
 * @author Deacon Smith
 *
 * @component
 * @description Component for managing meta data
 *
 * @param {string} pageTitle - Title of the page
 * @param {string} description - Description of the page
 * @returns {JSX.Element} - Data to add to the head
 *
 * @created 27-08-2023
 * @updated 28-08-2023
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
