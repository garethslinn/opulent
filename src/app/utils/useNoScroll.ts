import { useEffect } from 'react';

const useNoScroll = (isActive: boolean) => {
    useEffect(() => {
        if (isActive) {
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}`;
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [isActive]);
};

export default useNoScroll;
