/**
 * @description Layout component includes a nav bar and wraps page content for all pages
 * @file layout.jsx
 * 
 * @author Deacon Smith
 *
 * @param {object} children - Content wrapped by layout
 *
 * @return {JSX.Element} - Layout structure
 *
 * @created 27-08-2023
 * @updated 04-09-2023
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
