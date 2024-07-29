import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.containerBackground};
  padding: 2rem 1rem;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.widths.max};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.padding};
`;

export const FooterLink = styled.a`
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary || '#555'};
    text-decoration: underline;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
`;
