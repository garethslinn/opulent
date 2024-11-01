import React from 'react';
import { TwoColumnContainerProps } from './TwoColumnContainer.types';
import { Container, Column } from './TwoColumnContainer.styles';

const TwoColumnContainer: React.FC<TwoColumnContainerProps> = ({ backgroundColor = 'lightgray', children }) => {
    return (
        <Container backgroundColor={backgroundColor} role="region" aria-label="Two Column Container">
            {React.Children.map(children, (child, index) => (
                <Column key={index} className="column" role="article">{child}</Column>
            ))}
        </Container>
    );
};

export default TwoColumnContainer;
