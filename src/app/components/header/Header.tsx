// src/app/components/header/Header.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer, Nav, NavList, NavItem, NavLink, LogoContainer, BurgerMenu, MobileNavList } from './Header.styles';
import logo from '../../../../public/assets/images/gds.svg';

const Header: React.FC = () => {
    const [opacity, setOpacity] = useState(1);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY >= 300) {
                setOpacity(0);
            } else if (scrollY >= 270) {
                setOpacity(1 - (scrollY - 270) / 20);
            } else {
                setOpacity(1);
            }
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
        <HeaderContainer opacity={opacity}>
            <Nav>
                <LogoContainer>
                    <Link href="/" passHref>
                        <Image src={logo} alt="Logo" width={70} height={70} />
                    </Link>
                </LogoContainer>
                <NavList>
                    <NavItem>
                        <Link href="/" passHref>
                            <NavLink>About</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/experience" passHref>
                            <NavLink>Experience</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/recommendations" passHref>
                            <NavLink>Recommendations</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/publications" passHref>
                            <NavLink>Publications</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/open-source" passHref>
                            <NavLink>Open Source</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/graphic-design" passHref>
                            <NavLink>Graphic Design</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/contact" passHref>
                            <NavLink>Contact</NavLink>
                        </Link>
                    </NavItem>
                </NavList>
                <BurgerMenu onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </BurgerMenu>
            </Nav>
            <MobileNavList isOpen={isMenuOpen}>
                <NavItem>
                    <Link href="/about" passHref>
                        <NavLink onClick={toggleMenu}>About</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/experience" passHref>
                        <NavLink onClick={toggleMenu}>Experience</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/recommendations" passHref>
                        <NavLink onClick={toggleMenu}>Recommendations</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/publications" passHref>
                        <NavLink onClick={toggleMenu}>Publications</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/open-source" passHref>
                        <NavLink onClick={toggleMenu}>Open Source</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/graphic-design" passHref>
                        <NavLink onClick={toggleMenu}>Graphic Design</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/contact" passHref>
                        <NavLink onClick={toggleMenu}>Contact</NavLink>
                    </Link>
                </NavItem>
            </MobileNavList>
        </HeaderContainer>
    );
};

export default Header;
