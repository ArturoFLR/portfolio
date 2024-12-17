import { useEffect } from "react";
import { useLocation } from "react-router";

//This component is only used to make sure that the scroll is at the top of the screen when we change path.

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
