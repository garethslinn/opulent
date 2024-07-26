"use client"

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";

const CaseStudy: React.FC = () => {
    return (
        <>
            <Title first text="Case Study" />
            <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                Discover the impactful projects I have delivered for various organisations. These case studies
                highlight my solutions to complex problems, innovative strategies, and measurable results
                across different industries. Explore these examples to see my expertise in action and the
                value I bring to each project.
            </Paragraph>
        </>
    )
};

export default CaseStudy;