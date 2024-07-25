import styled from 'styled-components';

const backgroundColors: { [key: number]: string } = {
    1: '#4F6FFA',
    2: '#7D6666',
    3: '#FA9600',
    4: '#9BA4AB',
    5: '#1C9BFC',
};

interface ItemWrapperProps {
    type: number;
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  border-radius: 10px;
  padding: 4px 10px;
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  background-color: ${props => backgroundColors[props.type]};
`;
