// src/app/components/header/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {HeaderContainer, Nav, NavList, NavItem, NavLink, LogoContainer} from './Header.styles';
import logo from '../../../../public/assets/images/gds.svg';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Nav>
                <LogoContainer>
                    <Link href="/" passHref>
                        <Image src={logo} alt="Logo" width={50} height={50} />
                    </Link>
                </LogoContainer>
                <NavList>
                    <NavItem>
                        <Link href="/about" passHref>
                            <NavLink>About</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/recommendations" passHref>
                            <NavLink>Recommendations</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/experience" passHref>
                            <NavLink>Experience</NavLink>
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
