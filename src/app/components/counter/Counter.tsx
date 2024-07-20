import React from 'react';
import Button from "@/app/components/button/Button";
import ArrowButton from "@/app/components/Arrow/Arrow";
import { BUTTON_CONST as BUTTON_CONSTANTS } from "@/app/components/button/Button.const";
import { CounterStyle } from './Counter.style';
import {companies} from "@/app/stubs/companies";
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
            <Button {...BUTTON_CONSTANTS.TRANSPARENT} onClick={handleNavLeft}>
                <ArrowButton {...quotesArrowTheme} />
            </Button>
            <div>{activeIndex + 1}/{companies.length}</div>
            <Button {...BUTTON_CONSTANTS.TRANSPARENT} onClick={handleNavRight}>
                <ArrowButton {...quotesArrowTheme} rotate={180} />
            </Button>
        </CounterStyle>
    );
};

export default Counter;
