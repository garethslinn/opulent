import styled from 'styled-components';

interface ItemWrapperProps {
    type: number;
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.tiny} ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  white-space: nowrap;
  background-color: ${({ type, theme }) => {
    switch (type) {
        case 1:
            return theme.colors.itemType1;
        case 2:
            return theme.colors.itemType2;
        case 3:
            return theme.colors.itemType3;
        case 4:
            return theme.colors.itemType4;
        case 5:
            return theme.colors.itemType5;
        default:
            return theme.colors.background;
    }
}};
`;
