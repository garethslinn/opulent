import React from 'react';
import Button from "@/app/components/button/Button";
import ArrowButton from "@/app/components/Arrow/Arrow";
import { BUTTON_CONST as BUTTON_CONSTANTS } from "@/app/components/button/Button.const";
import { CounterStyle } from './Counter.style';
import { companies } from "@/app/stubs/companies";

interface CounterProps {
    activeIndex: number;
    totalItems: number;
    handleNavLeft: () => void;
    handleNavRight: () => void;
    quotesArrowTheme: {
        fillColor: string;
        outlineColor: string;
        hoverFillColor: string;
    };
}

const Counter: React.FC<CounterProps> = ({
         activeIndex,
         totalItems,
         handleNavLeft,
         handleNavRight,
         quotesArrowTheme
     }) => {
    return (
        <CounterStyle>
            <Button {...BUTTON_CONSTANTS.TRANSPARENT} onClick={handleNavLeft} aria-label="Previous item">
                <ArrowButton {...quotesArrowTheme} />
            </Button>
            <svg width="100%" height="1" aria-hidden="true">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="#f1f1f1" strokeWidth="1" />
            </svg>
            <div aria-live="polite" aria-atomic="true">{activeIndex + 1}/{totalItems}</div>
            <svg width="100%" height="1" aria-hidden="true">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="#f1f1f1" strokeWidth="1" />
            </svg>
            <Button {...BUTTON_CONSTANTS.TRANSPARENT} onClick={handleNavRight} aria-label="Next item">
                <ArrowButton {...quotesArrowTheme} rotate={180} />
            </Button>
        </CounterStyle>
    );
};

export default Counter;
