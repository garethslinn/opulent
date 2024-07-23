// Recommendations.tsx
import React from 'react';
import { RecommendationWrapper, RecommendationContainer, Name, Position, Description } from './Recommendations.styles';
import {RecommendationsProps} from "@/app/components/recommendations/Recommendations.types";

const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
    return (
        <RecommendationWrapper>
            {recommendations.map((rec, index) => (
                <RecommendationContainer key={index}>
                    <Name>{rec.Name}</Name>
                    <Position>{rec.Position}</Position>
                    <Description>{rec.Description}</Description>
                </RecommendationContainer>
            ))}
        </RecommendationWrapper>
    );
};

export default Recommendations;
