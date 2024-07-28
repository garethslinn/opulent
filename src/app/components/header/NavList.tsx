import React, { useEffect } from 'react';
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

    const isActive = (path: string) => pathname === path;

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>
            <BackgroundOverlay isOpen={isMenuOpen} onClick={toggleMenu} />
            <NavListContainer isOpen={isMenuOpen}>
                {width < 1150 &&
                    <CloseButton onClick={toggleMenu} src={'../../assets/images/close.svg'} alt={'Close Button'} width={20} height={20} />
                }
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
                    <Link href="/open-source" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/open-source')}>Open&nbsp;Source</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/case-studies" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/case-studies')}>Case&nbsp;Studies</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/graphic-design" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/graphic-design')}>Design</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/recommendations" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive('/recommendations')}>Recommendations</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <a href="https://www.linkedin.com/in/garethslinn/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                        <Image src={linkedinIcon} alt="LinkedIn" width={30} height={30} />
                    </a>
                    {width < 1150 &&
                        <>
                            &nbsp;&nbsp;
                            <a href="https://github.com/garethslinn/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                                <Image src={githubIcon} alt="GitHub" width={30} height={30} />
                            </a>
                        </>
                    }
                </NavItem>
                {width > 1150 &&
                    <NavItem>
                        <a href="https://github.com/garethslinn/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                            <Image src={githubIcon} alt="GitHub" width={30} height={30} />
                        </a>
                    </NavItem>
                }
            </NavListContainer>
        </>
    );
};

export default NavList;
