import React from 'react';
import { FooterWrapper, FooterContent, FooterLinks, FooterLink, FooterText } from './Footer.styles';

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterText>&copy; {new Date().getFullYear()} GDS Consulting Ltd. All rights reserved.</FooterText>
                <FooterLinks>
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink href="/terms">Terms of Service</FooterLink>
                </FooterLinks>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;
