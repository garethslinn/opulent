import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer, Nav, LogoContainer, BurgerMenu } from './Header.styles';
import logo from '../../../../public/assets/images/gds.svg';
import NavList from './NavList';
import useDeviceType from '@/app/utils/useDeviceType';

const Header: React.FC = () => {
    const [deviceType, width] = useDeviceType();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [imageWidth, setImageWidth] = useState<number>(100);

    useEffect(() => {
        const wd = deviceType === 'tablet-lg' ||deviceType === 'tablet-sm' || deviceType === 'mobile' ? 50 : 100;
        setImageWidth(wd);
    }, [deviceType]);

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
        {width < 1150 && setMenuOpen(!isMenuOpen);}
    };


    return (
        <HeaderContainer isScrolled={isScrolled}>
            <Nav role="navigation" aria-label="Main Navigation">
                <LogoContainer>
                    <Link href="/" passHref>
                        <Image src={logo} alt="Logo" width={imageWidth} height={imageWidth} />
                    </Link>
                </LogoContainer>
                <NavList isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                <BurgerMenu onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="navigation-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </BurgerMenu>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
