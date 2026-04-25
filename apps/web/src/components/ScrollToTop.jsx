import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Avoid `behavior: 'instant'` (not supported in some browsers; can break navigation).
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;