import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    NavListContainer,
    NavItem,
    NavLink,
    CloseButtonContainer,
    CloseButton,
    MenuText,
    BackgroundOverlay,
} from "./NavList.styles";
import linkedinIcon from "../../../../public/assets/images/brands/linkedin.svg";
import linkedinIconWhite from "../../../../public/assets/images/brands-white/linkedin.svg";
import githubIcon from "../../../../public/assets/images/brands/github.svg";
import githubIconWhite from "../../../../public/assets/images/brands-white/github.svg";
import useDeviceType from "@/app/hooks/useDeviceType";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton";
import { useTheme } from "@/app/context/ThemeContext";
import useNoScroll from "@/app/hooks/useNoScroll";

interface NavListProps {
    isMenuOpen?: boolean;
    toggleMenu?: () => void;
    toggleTheme?: () => void;
    currentTheme: string;
}

const NavList: React.FC<NavListProps> = ({
                                             isMenuOpen = false,
                                             toggleMenu,
                                             toggleTheme,
                                             currentTheme,
                                         }) => {
    const [deviceType, width] = useDeviceType();
    const pathname = usePathname();
    const closeButtonRef = useRef<HTMLImageElement>(null);
    const { currentTheme: { theme } } = useTheme();

    const isActive = (path: string) => {
        if (!pathname) return false;
        if (path === "/") {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    useNoScroll(isMenuOpen);

    useEffect(() => {
        if (isMenuOpen) {
            closeButtonRef.current?.focus();
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isMenuOpen) {
                toggleMenu?.();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isMenuOpen, toggleMenu]);

    return (
        <>
            <BackgroundOverlay isOpen={isMenuOpen} onClick={toggleMenu} aria-hidden={!isMenuOpen} />
            <NavListContainer isOpen={isMenuOpen} role="dialog" aria-labelledby="dialogTitle1" aria-modal="true">
                <h2 className="accessible" id="dialogTitle1">Main Navigation</h2>
                {width < 1150 && (
                    <CloseButtonContainer onClick={toggleMenu} role="button" tabIndex={0}>
                        <CloseButton
                            ref={closeButtonRef}
                            src={theme === "light" ? "/assets/images/close.svg" : "/assets/images/close_white.svg"}
                            alt="Close Button"
                            aria-label="Close menu"
                        />
                        <MenuText>Menu</MenuText>
                    </CloseButtonContainer>
                )}
                <NavItem role="none">
                    <Link href="/" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive("/")} tabIndex={isMenuOpen ? 0 : -1}>
                            About
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/experience" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive("/experience")} tabIndex={isMenuOpen ? 0 : -1}>
                            Experience
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/open-source" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive("/open-source")} tabIndex={isMenuOpen ? 0 : -1}>
                            Open&nbsp;Source
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/case-studies" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive("/case-studies")} tabIndex={isMenuOpen ? 0 : -1}>
                            Case&nbsp;Studies
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/graphic-design" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive("/graphic-design")} tabIndex={isMenuOpen ? 0 : -1}>
                            Design
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/recommendations" passHref>
                        <NavLink onClick={toggleMenu} isActive={isActive("/recommendations")} tabIndex={isMenuOpen ? 0 : -1}>
                            Recommendations
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <a
                        href="https://www.linkedin.com/in/garethslinn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleMenu}
                        tabIndex={isMenuOpen ? 0 : -1}
                    >
                        <Image src={theme === "light" ? linkedinIcon : linkedinIconWhite} alt="LinkedIn" width={30} height={30} />
                    </a>
                    {width < 1150 && (
                        <>
                            &nbsp;&nbsp;
                            <a
                                href="https://github.com/garethslinn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={toggleMenu}
                                tabIndex={isMenuOpen ? 0 : -1}
                            >
                                <Image src={theme === "light" ? githubIcon : githubIconWhite} alt="GitHub" width={30} height={30} />
                            </a>
                        </>
                    )}
                </NavItem>
                {width > 1150 && (
                    <NavItem role="none">
                        <a
                            href="https://github.com/garethslinn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggleMenu}
                        >
                            <Image src={theme === "light" ? githubIcon : githubIconWhite} alt="GitHub" width={30} height={30} />
                        </a>
                    </NavItem>
                )}
                <NavItem role="none">
                    <ThemeToggleButton
                        onClick={() => {
                            toggleTheme?.();
                            const newTheme = theme === "light" ? "dark" : "light";
                            if (typeof window !== "undefined") {
                                localStorage.setItem("theme", newTheme);
                            }
                        }}
                        tabIndex={isMenuOpen ? 0 : -1}
                    />
                </NavItem>
            </NavListContainer>
        </>
    );
};

export default NavList;
