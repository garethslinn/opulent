"use client";

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import Tabs from "@/app/components/tabs/Tabs";
import CaseStudyArgos from "@/app/constants/casestudies/argos";
import CaseStudyAIG from "@/app/constants/casestudies/aig";
import CaseStudyDugout from "@/app/constants/casestudies/dugout";
import CaseStudyBT from "@/app/constants/casestudies/bt";

const CaseStudies: React.FC = () => {

    const tabs = [
        { label: 'Argos', content: <CaseStudyArgos />, imageSrc: '/assets/images/brands/argos.svg' },
        { label: 'AIG', content: <CaseStudyAIG />, imageSrc: '/assets/images/brands/aig.svg' },
        { label: 'Dugout', content: <CaseStudyDugout />, imageSrc: '/assets/images/brands/dugout.svg' },
        { label: 'BT', content: <CaseStudyBT />, imageSrc: '/assets/images/brands/bt.svg' }
    ];

    return (
        <>
            <section aria-labelledby="case-studies">
                <Title id="case-studies" first text="Case Studies" />
                <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                    Discover the impactful projects I have delivered for various organisations. These case studies
                    highlight my solutions to complex problems, innovative strategies, and measurable results
                    across different industries. Explore these examples to see my expertise in action and the
                    value I bring to each project.
                </Paragraph>
            </section>
            <Tabs tabs={tabs} />
        </>
    )
};

export default CaseStudies;
