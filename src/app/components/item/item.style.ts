import styled from 'styled-components';

const backgroundColors: { [key: number]: string } = {
    1: '#1C9BFC',  // Example color for type 1
    2: '#7D6666',  // Example color for type 2
    3: '#FA9600',  // Example color for type 3
    4: '#9BA4AB',  // Example color for type 4
};

interface ItemWrapperProps {
    type: number;
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  //border: 2px solid #000;
  border-radius: 10px;
  padding: 4px 10px;
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  background-color: ${props => backgroundColors[props.type]};
`;
