// components/ResponsiveColumns.tsx
import React from 'react';
import Image from 'next/image';
import {
    Container,
    Column,
    Logo,
    Paragraph,
    LearnMoreLink
} from './ResponsiveColumns.styles';

interface ColumnData {
    logo: string;
    description: string;
    link: string;
}

interface ResponsiveColumnsProps {
    columns: ColumnData[];
}

const ResponsiveColumns: React.FC<ResponsiveColumnsProps> = ({ columns }) => {
    return (
        <Container>
            {columns.map((column, index) => (
                <Column key={index}>
                    <Logo>
                        <Image
                            src={column.logo}
                            alt={`Logo for ${column.description}`}
                            layout="fill"
                            objectFit="contain"
                        />
                    </Logo>
                    <Paragraph>{column.description}</Paragraph>
                    <LearnMoreLink href={column.link} aria-label={`Learn more about ${column.description}`}>Learn more</LearnMoreLink>
                </Column>
            ))}
        </Container>
    );
};

export default ResponsiveColumns;
