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
    setActiveDescription: (description: string) => void;
}

const CompaniesList: React.FC<CompaniesListProps> = ({ companies, activeIndex, setActiveTitle, setActiveDescription }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(0);
    const [visibleItems, setVisibleItems] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            const firstItem = containerRef.current.children[0] as HTMLDivElement;
            setItemWidth(firstItem.offsetWidth + 10); // Adding the gap

            const containerWidth = containerRef.current.offsetWidth;
            setVisibleItems(Math.floor(containerWidth / (firstItem.offsetWidth + 10)));
        }
    }, []);

    useEffect(() => {
        if (companies.length > 0) {
            setActiveTitle(companies[activeIndex].title);
            setActiveDescription(companies[activeIndex].description);
        }
    }, [activeIndex, companies, setActiveTitle, setActiveDescription]);

    return (
        <CompaniesListWrapper
            ref={containerRef}
            itemWidth={itemWidth}
            activeIndex={activeIndex}
            visibleItems={visibleItems}
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
