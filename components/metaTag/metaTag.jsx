import Head from 'next/head';

const MetaTag = ({ pageTitle, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
      </Head>
    </>
  );
};

export default MetaTag;
