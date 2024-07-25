import styled from 'styled-components';

interface HeaderContainerProps {
    isScrolled: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) => (props.isScrolled ? '#fff' : 'transparent')};
  color: #000;
  padding: 1rem 0;
  box-shadow: ${(props) => (props.isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: background-color 0.3s, box-shadow 0.3s;
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-family: 'Advent Pro', sans-serif;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavListContainer = styled.ul<{ isOpen?: boolean }>`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1100px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    background-color: #fff;
    position: absolute;
    top: 70px;
    right: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
`;

export const NavItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const NavLink = styled.a<{ isActive?: boolean }>`
  color: #000;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s, border-bottom 0.3s;
  border-bottom: ${(props) => (props.isActive ? '2px solid blue' : 'none')};

  &:hover {
    color: #888;
  }
  font-family: 'Advent Pro', sans-serif;
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
    background-color: #000;
    margin: 4px 0;
    transition: 0.4s;
  }
`;
