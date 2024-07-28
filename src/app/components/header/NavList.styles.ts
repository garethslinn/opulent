import styled from 'styled-components';

export const NavListContainer = styled.ul<{ isOpen?: boolean }>`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1150px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    background-color: #fff;
    position: absolute;
    top: 60px;
    right: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
`;

export const NavItem = styled.li`
  padding: 10px 55px 10px 15px;

  &:last-child {
    border-bottom: none;
  }
`;

export const NavLink = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s, border-bottom 0.3s;
  margin-bottom: 4px; /* Added margin-bottom for space between name and underline */
  border-bottom: ${(props) => (props.isActive ? '2px solid blue' : 'none')};

  white-space: nowrap; /* Ensure text doesn't wrap */

  &:hover {
    color: #888;
  }
`;
