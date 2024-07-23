import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #fff;
  color: #000;
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
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
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #888;
  }
`;
