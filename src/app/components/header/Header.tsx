import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer, Nav, LogoContainer, BurgerMenu } from './Header.styles';
import logo from '../../../../public/assets/images/gds.svg';
import NavList from './NavList';
import useDeviceType from '@/app/utils/useDeviceType';

const Header: React.FC = () => {
    const deviceType = useDeviceType();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const [width, setWidth] = useState<number>(100);

    useEffect(() => {
        const wd = deviceType === 'mobile' || deviceType === 'tablet-sm' ? 50 : 100;
        setWidth(wd);
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
        setMenuOpen(!isMenuOpen);
    };


    return (
        <HeaderContainer isScrolled={isScrolled}>
            <Nav>
                <LogoContainer>
                    <Link href="/" passHref>
                        <Image src={logo} alt="Logo" width={width} height={width} />
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
