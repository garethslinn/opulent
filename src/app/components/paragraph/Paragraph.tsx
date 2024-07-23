import React from 'react';
import { ParagraphProps } from './Paragraph.types';
import { Container, ParagraphText, Wrapper } from './Paragraph.styles';

const Paragraph: React.FC<ParagraphProps> = ({ backgroundColor = '#f1f1f1', foregroundColor = '#000', children }) => {
    return (
        <Container backgroundColor={backgroundColor} foregroundColor={foregroundColor}>
            <Wrapper>
                <ParagraphText>{children}</ParagraphText>
            </Wrapper>
        </Container>
    );
};

export default Paragraph;
