/**
 * @file Layout that will wrap entire App
 * @author Deacon Smith
 *
 * @description Component includes a nav bar and wraps page content for all pages
 *
 * @component
 * @param {object} children - Content wrapped by layout
 *
 * @return {JSX.Element} - Layout structure
 *
 * @created 27-08-2023
 * @updated 28-08-2023
 */

import NavBar from '@/components/navigation/navBar.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
