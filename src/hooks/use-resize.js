import { useState, useLayoutEffect } from 'react';

const useResize = () => {
    const [windowSize, setWindowSize] = useState([0, 0]);

    useLayoutEffect(() => {
        const updateWindowSize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', updateWindowSize, false);
        updateWindowSize();

        return () => {
            window.removeEventListener('resize', updateWindowSize, false);
        };
    }, []);

    return windowSize;
};

export default useResize;
