"use client";

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import Tabs from "@/app/components/tabs/Tabs";
import CaseStudyArgos from "@/app/stubs/casestudies/argos";
import CaseStudyAIG from "@/app/stubs/casestudies/aig";
import CaseStudyDugout from "@/app/stubs/casestudies/dugout";
import CaseStudyBT from "@/app/stubs/casestudies/bt";

const CaseStudies: React.FC = () => {

    const tabs = [
        { label: 'Argos', content: <CaseStudyArgos />, imageSrc: '/assets/images/brands/argos.svg' },
        { label: 'AIG', content: <CaseStudyAIG />, imageSrc: '/assets/images/brands/aig.svg' },
        { label: 'Dugout', content: <CaseStudyDugout />, imageSrc: '/assets/images/brands/dugout.svg' },
        { label: 'BT', content: <CaseStudyBT />, imageSrc: '/assets/images/brands/bt.svg' }
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