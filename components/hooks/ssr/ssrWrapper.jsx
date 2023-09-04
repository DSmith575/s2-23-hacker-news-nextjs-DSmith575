/**
 * @description Wrapper component that conditionally renders a component.
 * @file ssrWrapper.jsx
 * 
 * @author Deacon Smith
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import { useState, useEffect } from 'react';
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return [isMounted, setIsMounted];
};

const withNoSsr = (Component) => {
  return function NoSsrWrapper(props) {
    const [isMounted] = useIsMounted();
    return isMounted ? <Component {...props} /> : null;
  };
};

export default withNoSsr;
