// src/app/components/header/Header.tsx
import React from 'react';
import Link from 'next/link';
import { HeaderContainer, Nav, NavList, NavItem, NavLink } from './Header.styles';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Nav>
                <div>Logo</div>
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
