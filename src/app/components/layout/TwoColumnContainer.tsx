import React from 'react';
import { TwoColumnContainerProps } from './TwoColumnContainer.types';
import { Container, Column } from './TwoColumnContainer.styles';

const TwoColumnContainer: React.FC<TwoColumnContainerProps> = ({ backgroundColor = 'lightgray', children }) => {
    return (
        <Container backgroundColor={backgroundColor}>
            {React.Children.map(children, (child, index) => (
                <Column key={index} className="column">{child}</Column>
            ))}
        </Container>
    );
};

export default TwoColumnContainer;
