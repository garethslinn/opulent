import styled from 'styled-components';

interface ButtonStyledProps {
    borderColor?: string;
    borderThickness?: string;
    backgroundColor?: string;
    foregroundColor?: string;
    hoverBackgroundColor?: string;
}

export const ButtonStyled = styled.div<ButtonStyledProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#f0f0f0'};
  border: ${({ borderThickness }) => borderThickness || '2px'} solid ${({ borderColor }) => borderColor || '#333'};
  color: ${({ foregroundColor }) => foregroundColor || '#000'};
  padding: 10px; /* Padding inside the button */
  display: inline-flex; /* Aligns items inside the button */
  align-items: center; /* Vertically centers items */
  justify-content: center; /* Horizontally centers items */
  cursor: pointer; /* Pointer cursor on hover */
  border-radius: 4px; /* Rounded corners */

  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || '#e0e0e0'};
  }
`;
