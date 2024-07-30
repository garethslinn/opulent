import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavListContainer, NavItem, NavLink, CloseButton, BackgroundOverlay } from './NavList.styles';
import linkedinIcon from '../../../../public/assets/images/brands/linkedin.svg';
import githubIcon from '../../../../public/assets/images/brands/github.svg';
import useDeviceType from "@/app/utils/useDeviceType";

interface NavListProps {
    isMenuOpen?: boolean;
    toggleMenu?: () => void;
}

const NavList: React.FC<NavListProps> = ({ isMenuOpen = false, toggleMenu }) => {
    const [deviceType, width] = useDeviceType();
    const pathname = usePathname();
    const closeButtonRef = useRef<HTMLImageElement>(null);

    const isActive = (path: string) => pathname === path;

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            closeButtonRef.current?.focus();
        } else {
            document.body.style.overflow = 'auto';
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isMenuOpen) {
                if (toggleMenu) {
                    toggleMenu();
                }
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen, toggleMenu]);

    return (
        <>
            <BackgroundOverlay isOpen={isMenuOpen} onClick={toggleMenu} aria-hidden={!isMenuOpen} />
            <NavListContainer isOpen={isMenuOpen} role="dialog" aria-modal="true">
                {width < 1150 &&
                    <CloseButton
                        ref={closeButtonRef}
                        onClick={toggleMenu}
                        src={'../../assets/images/close.svg'}
                        alt={'Close Button'}
                        width={20}
                        height={20}
                        aria-label="Close menu"
                    />
                }
                <NavItem role="none">
                    <Link href="/" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/')} role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>About</NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/experience" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/experience')} role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>Experience</NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/open-source" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/open-source')} role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>Open&nbsp;Source</NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/case-studies" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/case-studies')} role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>Case&nbsp;Studies</NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/graphic-design" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/graphic-design')} role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>Design</NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/recommendations" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/recommendations')} role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>Recommendations</NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <a href="https://www.linkedin.com/in/garethslinn/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>
                        <Image src={linkedinIcon} alt="LinkedIn" width={30} height={30} />
                    </a>
                    {width < 1150 &&
                        <>
                            &nbsp;&nbsp;
                            <a href="https://github.com/garethslinn/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} role="menuitem" tabIndex={isMenuOpen ? 0 : -1}>
                                <Image src={githubIcon} alt="GitHub" width={30} height={30} />
                            </a>
                        </>
                    }
                </NavItem>
                {width > 1150 &&
                    <NavItem role="none">
                        <a href="https://github.com/garethslinn/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} role="menuitem">
                            <Image src={githubIcon} alt="GitHub" width={30} height={30} />
                        </a>
                    </NavItem>
                }
            </NavListContainer>
        </>
    );
};

export default NavList;
