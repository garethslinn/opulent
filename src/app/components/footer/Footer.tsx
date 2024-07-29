import React from 'react';
import { FooterWrapper, FooterContent, FooterLinks, FooterLink, FooterText } from './Footer.styles';

const Footer: React.FC = () => {
    return (
        <footer>
            <FooterWrapper>
                <FooterContent>
                    <FooterText>&copy; {new Date().getFullYear()} GDS Consulting Ltd. All rights reserved.</FooterText>
                    <FooterLinks>
                        <FooterLink href="/privacy" aria-label="Privacy Policy page">Privacy Policy</FooterLink>
                        <FooterLink href="/terms" aria-label="Terms of Service page">Terms of Service</FooterLink>
                    </FooterLinks>
                </FooterContent>
            </FooterWrapper>
        </footer>
    );
};

export default Footer;
