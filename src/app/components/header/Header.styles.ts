// src/app/components/header/Header.styles.ts
import styled from 'styled-components';

interface HeaderContainerProps {
    opacity: number;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s;
  z-index: 1000;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a<{ isActive?: boolean }>`
  color: #000;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s, border-bottom 0.3s;
  border-bottom: ${(props) => (props.isActive ? '2px solid blue' : 'none')};

  &:hover {
    color: #888;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 900px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #000;
    margin: 4px 0;
    transition: 0.4s;
  }
`;

export const MobileNavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  position: absolute;
  top: 70px;
  right: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? '380px' : '0')};
  transition: max-height 0.3s ease-in-out;

  @media (min-width: 901px) {
    display: none;
  }

  li {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
  }

  li:last-child {
    border-bottom: none;
  }
`;
