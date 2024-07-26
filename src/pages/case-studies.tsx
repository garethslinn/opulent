"use client"

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import Tabs from "@/app/components/tabs/Tabs";

const CaseStudies: React.FC = () => {

    const tabs = [
        { label: 'Argos', content: <div>Content of Tab Argos</div>, imageSrc: '/assets/images/brands/argos.svg' },
        { label: 'AIG', content: <div>Content of Tab AIG</div>, imageSrc: '/assets/images/brands/aig.svg' },
        { label: 'Dugout', content: <div>Content of Tab Dugout</div>, imageSrc: '' },
        { label: 'BT', content: <div>Content of Tab BT</div>, imageSrc: '/assets/images/brands/bt.svg' }
    ];

    return (
        <>
            <Title first text="Case Studies" />
            <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                Discover the impactful projects I have delivered for various organisations. These case studies
                highlight my solutions to complex problems, innovative strategies, and measurable results
                across different industries. Explore these examples to see my expertise in action and the
                value I bring to each project.
            </Paragraph>
            <Tabs tabs={tabs} />
        </>
    )
};

export default CaseStudies;