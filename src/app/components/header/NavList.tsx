import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavListContainer, NavItem, NavLink } from './NavList.styles';
import linkedinIcon from '../../../../public/assets/images/brands/linkedin.svg';
import githubIcon from '../../../../public/assets/images/brands/github.svg';

interface NavListProps {
    isMenuOpen?: boolean;
    toggleMenu?: () => void;
}

const NavList: React.FC<NavListProps> = ({ isMenuOpen = false, toggleMenu }) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <NavListContainer isOpen={isMenuOpen}>
            <NavItem>
                <Link href="/" passHref>
                    <NavLink onClick={toggleMenu} isActive={isActive('/')}>About</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/experience" passHref>
                    <NavLink onClick={toggleMenu} isActive={isActive('/experience')}>Experience</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/recommendations" passHref>
                    <NavLink onClick={toggleMenu} isActive={isActive('/recommendations')}>Recommendations</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/open-source" passHref>
                    <NavLink onClick={toggleMenu} isActive={isActive('/open-source')}>Open&nbsp;Source</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/publications" passHref>
                    <NavLink onClick={toggleMenu} isActive={isActive('/publications')}>Publications</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/graphic-design" passHref>
                    <NavLink onClick={toggleMenu} isActive={isActive('/graphic-design')}>Design</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/contact" passHref>
                    <NavLink onClick={toggleMenu} isActive={isActive('/contact')}>Contact</NavLink>
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
