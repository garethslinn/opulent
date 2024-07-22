import React from 'react';
import { TwoColumnContainerProps } from './TwoColumnContainer.types';
import { Container, Column, FullWrapper } from './TwoColumnContainer.styles';

const TwoColumnContainer: React.FC<TwoColumnContainerProps> = ({ backgroundColor = 'lightgray', children }) => {
    return (

        <FullWrapper>
            <Container backgroundColor={backgroundColor}>
                {React.Children.map(children, child => (
                    <Column>{child}</Column>
                ))}
            </Container>
        </FullWrapper>
    );
};

export default TwoColumnContainer;
