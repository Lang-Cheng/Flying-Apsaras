import { useState, useEffect } from 'react';

import theme from 'theme';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
        isMobile: width < theme.breakpoints.values.md
    };
};

type IWindowDimensions = {
    width: number;
    height: number;
    isMobile: boolean;
};

const useWindowDimensions = (): IWindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
