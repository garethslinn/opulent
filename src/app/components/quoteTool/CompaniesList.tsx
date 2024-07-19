'use client';

import React from 'react';
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
}

const CompaniesList: React.FC<CompaniesListProps> = ({ companies, activeIndex }) => {
    if (!companies || companies.length === 0) {
        return null;
    }

    return (
        <CompaniesListWrapper activeIndex={activeIndex}>
            {companies.map((company, index) => (
                <Company key={index} active={index === activeIndex}>
                    <CompanyImage src={company.image} alt={company.title} />
                    <CompanyTitle>{company.title}</CompanyTitle>
                </Company>
            ))}
        </CompaniesListWrapper>
    );
};

export default CompaniesList;
