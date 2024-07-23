import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #f1f1f1;
  color: #000;
  padding: 2rem 1rem;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const FooterLink = styled.a`
  color: #000;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #555;
    text-decoration: underline;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;
