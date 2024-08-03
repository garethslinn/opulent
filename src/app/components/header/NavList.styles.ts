import styled from 'styled-components';

export const NavListContainer = styled.ul<{ isOpen?: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1150px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    position: fixed;
    top: 60px;
    right: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    z-index: 1001; 
  }
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.tiny};
  cursor: pointer;
  position: absolute;
  top: -4000px;
  // top: ${({ theme }) => theme.spacing.tiny};
  right: ${({ theme }) => theme.spacing.tiny};
`;

export const CloseButton = styled.img`
  width: 20px;
  height: 20px;
`;

export const MenuText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

export const NavItem = styled.li`
  padding: 20px 0px 10px 15px;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1150px) {
    padding: 10px 55px 10px 15px;
  }
`;

export const NavLink = styled.span<{ isActive?: boolean }>`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.large};
  transition: color 0.3s, border-bottom 0.3s;
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
  border-bottom: ${(props) => (props.isActive ? `2px solid ${props.theme.colors.primary}` : 'none')};
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const BackgroundOverlay = styled.div<{ isOpen?: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1); 
  opacity: 1;
  z-index: 1000;
  overflow: hidden;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); 
`;
