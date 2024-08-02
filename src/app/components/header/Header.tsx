import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    HeaderContainer,
    Nav,
    LogoContainer,
    SkipLink,
} from "./Header.styles";
import logo from "../../../../public/assets/images/gds.svg";
import logoWhite from "../../../../public/assets/images/gds-white.svg";
import NavList from "./NavList";
import useDeviceType from "@/app/hooks/useDeviceType";
import BurgerMenu from "@/app/components/burgerMenu/BurgerMenu";

interface HeaderProps {
    toggleTheme: () => void;
    currentTheme: any;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
    const [deviceType, width] = useDeviceType();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [imageWidth, setImageWidth] = useState<number>(100);

    useEffect(() => {
        const wd = deviceType === "tablet-lg" || deviceType === "tablet-sm" || deviceType === "mobile" ? 60 : 100;
        setImageWidth(wd);
    }, [deviceType]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        width < 1150 && setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <HeaderContainer isScrolled={isScrolled}>
                <SkipLink className="skip-link" href="#main">
                    Skip to main content
                </SkipLink>
                <Nav role="navigation" aria-label="Main Navigation">
                    <LogoContainer>
                        <Link href="/" passHref aria-label="Homepage">
                            <Image
                                src={currentTheme.colors.primary === "#000" ? logo : logoWhite}
                                alt="GDS Consulting Logo"
                                width={imageWidth}
                                height={imageWidth}
                            />
                        </Link>
                    </LogoContainer>
                    <NavList
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                        toggleTheme={toggleTheme}
                        currentTheme={currentTheme}
                    />
                    <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </Nav>
            </HeaderContainer>
        </header>
    );
};

export default Header;
