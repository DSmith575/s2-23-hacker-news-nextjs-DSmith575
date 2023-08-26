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
