import styled from 'styled-components';

interface ButtonStyledProps {
    borderColor?: string;
    borderThickness?: string;
    backgroundColor?: string;
    foregroundColor?: string;
    hoverBackgroundColor?: string;
}

export const ButtonStyled = styled.div<ButtonStyledProps>`
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.containerBackground};
  border: ${({ borderThickness, theme }) => borderThickness || '2px'} solid ${({ borderColor, theme }) => borderColor || theme.colors.text};
  color: ${({ foregroundColor, theme }) => foregroundColor || theme.colors.text};
  padding: ${({ theme }) => theme.spacing.small};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    background-color: ${({ hoverBackgroundColor, theme }) => hoverBackgroundColor || theme.colors.background};
  }
`;
