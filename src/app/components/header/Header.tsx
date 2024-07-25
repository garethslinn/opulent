import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer, Nav, LogoContainer, BurgerMenu } from './Header.styles';
import logo from '../../../../public/assets/images/gds.svg';
import NavList from './NavList';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContainer isScrolled={isScrolled}>
            <Nav>
                <LogoContainer>
                    <Link href="/" passHref>
                        <Image src={logo} alt="Logo" width={100} height={100} />
                    </Link>
                </LogoContainer>
                <NavList isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                <BurgerMenu onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </BurgerMenu>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
