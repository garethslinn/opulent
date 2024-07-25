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
