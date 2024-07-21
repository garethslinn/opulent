import React from 'react';
import { ButtonStyled } from './Button.style';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    borderColor?: string;
    borderThickness?: string;
    backgroundColor?: string;
    foregroundColor?: string;
    hoverBackgroundColor?: string;
    ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
       onClick,
       children,
       borderColor,
       borderThickness,
       backgroundColor,
       foregroundColor,
       hoverBackgroundColor,
       ariaLabel
   }) => {
    return (
        <ButtonStyled
            onClick={onClick}
            borderColor={borderColor}
            borderThickness={borderThickness}
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            hoverBackgroundColor={hoverBackgroundColor}
            aria-label={ariaLabel}
        >
            {children}
        </ButtonStyled>
    );
};

export default Button;
