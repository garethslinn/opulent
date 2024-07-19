import styled from 'styled-components';

interface ArrowProps {
    rotate: number;
}

export const Arrow = styled.div<ArrowProps>`
  svg {
    width: 25px; /* Adjust size */
    height: auto; /* Maintain aspect ratio */
    transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  }

  path {
    fill: #fff; /* Adjust fill color */
    stroke: #000; /* Adjust outline color */
    stroke-width: 2px; /* Adjust outline thickness */
  }
`;