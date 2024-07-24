// src/app/components/header/Header.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer, Nav, NavList, NavItem, NavLink, LogoContainer } from './Header.styles';
import logo from '../../../../public/assets/images/gds.svg';

const Header: React.FC = () => {
    const [opacity, setOpacity] = useState(1);

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
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
