import React from 'react';
import styled from 'styled-components';
import {ItemWrapper} from "@/app/components/item/item.style";

interface ItemProps {
    skill: string;
}

const Item: React.FC<ItemProps> = ({ skill }) => (
    <ItemWrapper role="listitem" aria-label={`Skill: ${skill}`}>{skill}</ItemWrapper>
);

export default Item;
