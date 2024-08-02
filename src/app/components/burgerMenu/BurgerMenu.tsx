import React from 'react';
import {
    BurgerMenuContainer,
    BurgerMenuWrapper,
    MenuText,
    Line
} from './BurgerMenu.styles';
import { BurgerMenuProps } from "@/app/components/burgerMenu/BurgerMenu.types";

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isMenuOpen, toggleMenu }) => {
    return (
        <BurgerMenuContainer
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Back" : "Menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            role="button"
        >
            <MenuText>{isMenuOpen ? "Back" : "Menu"}</MenuText>
            <BurgerMenuWrapper isOpen={isMenuOpen}>
                <Line isOpen={isMenuOpen}></Line>
                <Line isOpen={isMenuOpen}></Line>
                <Line isOpen={isMenuOpen}></Line>
            </BurgerMenuWrapper>
        </BurgerMenuContainer>
    );
};

export default BurgerMenu;
