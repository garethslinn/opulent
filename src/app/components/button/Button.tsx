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
}

const Button: React.FC<ButtonProps> = ({
       onClick,
       children,
       borderColor,
       borderThickness,
       backgroundColor,
       foregroundColor,
       hoverBackgroundColor
   }) => {
    return (
        <ButtonStyled
            onClick={onClick}
            borderColor={borderColor}
            borderThickness={borderThickness}
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            hoverBackgroundColor={hoverBackgroundColor}
        >
            {children}
        </ButtonStyled>
    );
};

export default Button;
