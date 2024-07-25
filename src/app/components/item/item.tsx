import React from 'react';
import { ItemWrapper } from './item.style';

interface ItemProps {
    skill: string;
    type: number;
}

const Item: React.FC<ItemProps> = ({ skill, type }) => (
    <ItemWrapper role="listitem" aria-label={`Skill: ${skill}`} type={type}>{skill}</ItemWrapper>
);

export default Item;
