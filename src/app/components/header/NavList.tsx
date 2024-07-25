import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavListContainer, NavItem, NavLink } from './NavList.styles';
import linkedinIcon from '../../../../public/assets/images/brands/linkedin.svg';
import githubIcon from '../../../../public/assets/images/brands/github.svg';

interface NavListProps {
    isMenuOpen?: boolean;
    toggleMenu?: () => void;
}

const NavList: React.FC<NavListProps> = ({ isMenuOpen = false, toggleMenu }) => {
    return (
        <NavListContainer isOpen={isMenuOpen}>
            <NavItem>
                <Link href="/" passHref>
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
                <Link href="/open-source" passHref>
                    <NavLink onClick={toggleMenu}>Open Source</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/publications" passHref>
                    <NavLink onClick={toggleMenu}>Publications</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/graphic-design" passHref>
                    <NavLink onClick={toggleMenu}>Design</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/contact" passHref>
                    <NavLink onClick={toggleMenu}>Contact</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <a href="https://www.linkedin.com/in/garethslinn/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                    <Image src={linkedinIcon} alt="LinkedIn" width={30} height={30} />
                </a>
            </NavItem>
            <NavItem>
                <a href="https://github.com/garethslinn/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                    <Image src={githubIcon} alt="GitHub" width={30} height={30} />
                </a>
            </NavItem>
        </NavListContainer>
    );
};

export default NavList;
