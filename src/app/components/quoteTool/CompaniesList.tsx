'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    CompaniesListWrapper,
    Company,
    CompanyImage,
    CompanyTitle,
} from './CompaniesList.style';

interface Company {
    title: string;
    image: string;
}

interface CompaniesListProps {
    companies: Company[];
    activeIndex: number;
    setActiveTitle: (title: string) => void;
}

const CompaniesList: React.FC<CompaniesListProps> = ({ companies, activeIndex, setActiveTitle }) => {
    const [itemWidth, setItemWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const firstItem = containerRef.current.children[0] as HTMLDivElement;
            setItemWidth(firstItem.offsetWidth + 10); // Adding the gap
        }
    }, []);

    useEffect(() => {
        if (companies.length > 0) {
            setActiveTitle(companies[activeIndex].title);
        }
    }, [activeIndex, companies, setActiveTitle]);

    if (!companies || companies.length === 0) {
        return null;
    }

    return (
        <CompaniesListWrapper
            ref={containerRef}
            activeIndex={activeIndex}
            itemWidth={itemWidth}
        >
            {companies.map((company, index) => (
                <Company key={index} active={index === activeIndex}>
                    <CompanyImage src={company.image} alt={company.title} />
                </Company>
            ))}
        </CompaniesListWrapper>
    );
};

export default CompaniesList;
