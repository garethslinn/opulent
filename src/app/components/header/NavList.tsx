import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    NavListContainer,
    NavItem,
    NavLink,
    CloseButton,
    BackgroundOverlay,
} from "./NavList.styles";
import linkedinIcon from "../../../../public/assets/images/brands/linkedin.svg";
import linkedinIconWhite from "../../../../public/assets/images/brands-white/linkedin.svg";
import githubIcon from "../../../../public/assets/images/brands/github.svg";
import githubIconWhite from "../../../../public/assets/images/brands-white/github.svg";
import useDeviceType from "@/app/utils/useDeviceType";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton"; // Import the Theme Toggle Button component

interface NavListProps {
    isMenuOpen?: boolean;
    toggleMenu?: () => void;
    toggleTheme?: () => void;
    currentTheme: string; // Define currentTheme as a string type
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
    const [theme, setTheme] = useState<string>(currentTheme); // Initialize theme state

    const isActive = (path: string) => pathname === path;

    useEffect(() => {
        // Access localStorage safely in a client-side context
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme") || currentTheme;
            setTheme(storedTheme);
        }
    }, [currentTheme]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            closeButtonRef.current?.focus();
        } else {
            document.body.style.overflow = "auto";
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isMenuOpen) {
                toggleMenu?.();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen, toggleMenu]);

    // Log current theme for debugging purposes
    console.log(">> currentTheme", currentTheme);

    return (
        <>
            <BackgroundOverlay
                isOpen={isMenuOpen}
                onClick={toggleMenu}
                aria-hidden={!isMenuOpen}
            />
            <NavListContainer isOpen={isMenuOpen} role="dialog" aria-modal="true">
                {width < 1150 && (
                    <CloseButton
                        ref={closeButtonRef}
                        onClick={toggleMenu}
                        src={
                            theme === "light"
                                ? "/assets/images/close.svg"
                                : "/assets/images/close_white.svg"
                        }
                        alt={"Close Button"}
                        width={20}
                        height={20}
                        aria-label="Close menu"
                    />
                )}
                <NavItem role="none">
                    <Link href="/" passHref>
                        <NavLink
                            onClick={toggleMenu}
                            isActive={isActive("/")}
                            role="menuitem"
                            tabIndex={isMenuOpen ? 0 : -1}
                        >
                            About
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/experience" passHref>
                        <NavLink
                            onClick={toggleMenu}
                            isActive={isActive("/experience")}
                            role="menuitem"
                            tabIndex={isMenuOpen ? 0 : -1}
                        >
                            Experience
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/open-source" passHref>
                        <NavLink
                            onClick={toggleMenu}
                            isActive={isActive("/open-source")}
                            role="menuitem"
                            tabIndex={isMenuOpen ? 0 : -1}
                        >
                            Open&nbsp;Source
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/case-studies" passHref>
                        <NavLink
                            onClick={toggleMenu}
                            isActive={isActive("/case-studies")}
                            role="menuitem"
                            tabIndex={isMenuOpen ? 0 : -1}
                        >
                            Case&nbsp;Studies
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/graphic-design" passHref>
                        <NavLink
                            onClick={toggleMenu}
                            isActive={isActive("/graphic-design")}
                            role="menuitem"
                            tabIndex={isMenuOpen ? 0 : -1}
                        >
                            Design
                        </NavLink>
                    </Link>
                </NavItem>
                <NavItem role="none">
                    <Link href="/recommendations" passHref>
                        <NavLink
                            onClick={toggleMenu}
                            isActive={isActive("/recommendations")}
                            role="menuitem"
                            tabIndex={isMenuOpen ? 0 : -1}
                        >
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
                        role="menuitem"
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
                                role="menuitem"
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
                            role="menuitem"
                        >

                            <Image
                                src={theme === "light" ? githubIcon : githubIconWhite}
                                alt="GitHub"
                                width={30}
                                height={30}
                            />
                        </a>
                    </NavItem>
                )}
                {/* Theme Toggle Button */}
                <NavItem role="none">
                    <ThemeToggleButton
                        onClick={() => {
                            toggleTheme?.();
                            // Update theme state and sync with localStorage
                            const newTheme = theme === "light" ? "dark" : "light";
                            setTheme(newTheme);
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
