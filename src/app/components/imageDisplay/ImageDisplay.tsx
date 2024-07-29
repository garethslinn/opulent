// components/ImageDisplay.tsx
import React from 'react';
import Image from 'next/image';
import { ImageDisplayContainer, ImageWrapper, ContentWrapper } from './ImageDisplay.styles';
import { ImageDisplayProps } from './ImageDisplay.types';

const ImageDisplay: React.FC<ImageDisplayProps> = ({ title, image, imageRight, children }) => {
    return (
        <section aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}>
            <ImageDisplayContainer imageRight={imageRight}>
                <ImageWrapper>
                    <Image src={image} alt={title} layout="responsive" width={500} height={500} />
                </ImageWrapper>
                <ContentWrapper>
                    <h2 id={title.replace(/\s+/g, '-').toLowerCase()}>{title}</h2>
                    <div>{children}</div>
                </ContentWrapper>
            </ImageDisplayContainer>
        </section>
    );
};

export default ImageDisplay;
