import styled from "styled-components";

export const ThemeToggleButtonContainer = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.tiny};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
