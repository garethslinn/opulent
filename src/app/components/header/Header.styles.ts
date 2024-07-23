// src/app/components/header/Header.styles.ts
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #0070f3;
  }
`;
