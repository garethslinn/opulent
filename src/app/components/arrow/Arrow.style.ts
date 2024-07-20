import styled from 'styled-components';

interface ArrowProps {
    rotate: number;
}

export const Arrow = styled.div<ArrowProps>`
  svg {
    width: 25px; 
    height: auto; 
    transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  }

  path {
    fill: #fff; 
    stroke: #000; 
    stroke-width: 2px; 
  }
`;