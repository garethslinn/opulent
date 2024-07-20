// SkillItem.tsx
import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  border: 2px solid #333;
  border-radius: 12px;
  background-color: transparent;
  color: #333;
`;

interface ItemProps {
    skill: string;
}

const Item: React.FC<ItemProps> = ({ skill }) => (
    <ItemWrapper>{skill}</ItemWrapper>
);

export default Item;
