import styled from 'styled-components';

interface HeaderContainerProps {
    isScrolled: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) =>
    props.isScrolled ? props.theme.colors.white : 'transparent'};
  box-shadow: ${(props) =>
    props.isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: background-color 0.3s, box-shadow 0.3s;
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
`;

export const Nav = styled.nav`
  max-width: ${({ theme }) => theme.widths.max};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.padding};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SkipLink = styled.a`
  position: absolute;
  top: -2000px;
  z-index: 1000;
  color: ${({ theme }) => theme.colors.text};
`;

export const NavListContainer = styled.ul<{ isOpen?: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1100px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 70px;
    right: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
  }
`;

export const NavItem = styled.li`
  padding: ${({ theme }) => theme.spacing.padding};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};

  &:last-child {
    border-bottom: none;
  }
`;

export const NavLink = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s, border-bottom 0.3s;
  border-bottom: ${(props) => (props.isActive ? `2px solid ${props.theme.colors.primary}` : 'none')};

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  @media (max-width: 1150px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.linkColor};
    margin: ${({ theme }) => theme.spacing.tiny} 0;
    transition: 0.4s;
  }
`;

