import React from 'react';
import Title from "@/app/components/title/Title";
import RecommendationsComponent from "@/app/components/recommendations/Recommendations";
import { recommendations } from "@/app/stubs/recommendations";
import Paragraph from "@/app/components/paragraph/Paragraph";

const Recommendations: React.FC = () => {
    return (
        <>
            <Title text="Recommendations" />
            <Paragraph backgroundColor="#f1f1f1" foregroundColor="">
                Here is a list of public recommendations extracted from my
                <a href="https://www.linkedin.com/in/garethslinn/details/recommendations/?detailScreenTabIndex=0">
                LinkedIn profile
                </a>
            </Paragraph>
            <RecommendationsComponent recommendations={recommendations} />
        </>
    );
};

export default Recommendations;
