'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    CompaniesListLayout,
    CompaniesListWrapper,
    Company,
    CompanyImage,
    CompanyTitle,
} from './InlineList.style';

interface Company {
    title: string;
    image: string;
    description: string;
}

interface CompaniesListProps {
    companies: Company[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    setActiveTitle: (title: string) => void;
    setActiveDescription: (description: string) => void;
}

const InlineList: React.FC<CompaniesListProps> = ({
          companies,
          activeIndex,
          setActiveIndex,
          setActiveTitle,
          setActiveDescription
      }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(100);
    const [visibleItems, setVisibleItems] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                if (window.innerWidth <= 900) {
                    setItemWidth(50);
                    setVisibleItems(Math.floor(containerWidth / 55)); // Adjusted for item width + gap
                } else {
                    setItemWidth(100);
                    setVisibleItems(Math.floor(containerWidth / 110)); // Adjusted for item width + gap
                }
            }
        };

        handleResize(); // Initial calculation
        window.addEventListener('resize', handleResize); // Add resize listener

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, [companies.length]);

    useEffect(() => {
        if (companies.length > 0) {
            setActiveTitle(companies[activeIndex].title);
            setActiveDescription(companies[activeIndex].description);
        }
    }, [activeIndex, companies, setActiveTitle, setActiveDescription]);

    const handleCompanyClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <CompaniesListLayout>
            <CompaniesListWrapper
                ref={containerRef}
                activeIndex={activeIndex}
                itemWidth={itemWidth}
                visibleItems={visibleItems}
                totalItems={companies.length}
            >
                {companies.map((company, index) => (
                    <Company
                        key={index}
                        active={index === activeIndex}
                        onClick={() => handleCompanyClick(index)}
                    >
                        <CompanyImage src={company.image} alt={company.title} />
                    </Company>
                ))}
            </CompaniesListWrapper>
        </CompaniesListLayout>
    );
};

export default InlineList;
