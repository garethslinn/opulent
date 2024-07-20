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
    const [itemWidth, setItemWidth] = useState(100);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 900) {
                setItemWidth(50);
            } else {
                setItemWidth(100);
            }
        };

        handleResize(); // Initial calculation
        window.addEventListener('resize', handleResize); // Add resize listener

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
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
