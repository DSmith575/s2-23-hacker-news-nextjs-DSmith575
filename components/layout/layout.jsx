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
