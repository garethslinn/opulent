// Card.tsx
import React from 'react';
import Image from 'next/image';
import { CardProps } from './Card.types';
import { CardContainer, Title, Description, ImageWrapper, ContentWrapper } from './Card.styles';

const Card: React.FC<CardProps> = ({ title, link, imageSrc, children }) => {
    return (
        <CardContainer>
            <Title>{title}</Title>
            <ContentWrapper>
                <Description>{children}</Description>
                <ImageWrapper>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Image src={imageSrc} alt={title} width={300} height={300} />
                    </a>
                </ImageWrapper>
            </ContentWrapper>
            <a className="learn-more" href={link} target="_blank" rel="noopener noreferrer">Learn more</a>
        </CardContainer>
    );
};

export default Card;
