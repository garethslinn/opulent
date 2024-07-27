import styled from 'styled-components';

interface ArrowProps {
    rotate: number;
    fillColor: string;
    outlineColor: string;
    hoverFillColor: string;
}

export const Arrow = styled.div<ArrowProps>`
  svg {
    width: 25px; 
    height: auto; 
    transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  }

  path {
    fill: ${({ fillColor }) => fillColor}; 
    stroke: ${({ outlineColor }) => outlineColor}; 
    stroke-width: 2px;

    &:hover {
        fill: ${({ hoverFillColor }) => hoverFillColor};
    }
  }
`;
