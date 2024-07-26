
import React from 'react';
import { ParagraphProps } from './Paragraph.types';
import { Container, ParagraphText, Wrapper } from './Paragraph.styles';

const Paragraph: React.FC<ParagraphProps> = ({ backgroundColor = '#f1f1f1', foregroundColor = '#000', first, children }) => {
    return (
        <Container backgroundColor={backgroundColor} foregroundColor={foregroundColor} first={first}>
            <Wrapper>
                <ParagraphText first={first}>{children}</ParagraphText>
            </Wrapper>
        </Container>
    );
};

export default Paragraph;
