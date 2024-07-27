import { useState, useEffect } from 'react';

// Define the breakpoints for different device types
const breakpoints = {
    mobile: 360,
    tabletSm: 640,
    tabletLg: 900,
    desktop: 1280,
};

// Function to get the device type based on window width
const getDeviceType = (width: number): 'mobile' | 'tablet-sm' | 'tablet-lg' | 'desktop' => {
    if (width < breakpoints.tabletSm) {
        return 'mobile';
    } else if (width < breakpoints.tabletLg) {
        return 'tablet-sm';
    } else if (width < breakpoints.desktop) {
        return 'tablet-lg';
    } else {
        return 'desktop';
    }
};

// Custom hook to use the device type in a component
const useDeviceType = (): 'mobile' | 'tablet-sm' | 'tablet-lg' | 'desktop' => {
    // Initialize state with undefined to avoid SSR issues
    const [deviceType, setDeviceType] = useState<'mobile' | 'tablet-sm' | 'tablet-lg' | 'desktop'>(
        typeof window !== 'undefined' ? getDeviceType(window.innerWidth) : 'desktop'
    );

    useEffect(() => {
        if (typeof window === 'undefined') return; // Avoid running in SSR

        const handleResize = () => {
            setDeviceType(getDeviceType(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return deviceType;
};

export default useDeviceType;
