import React from 'react';
import {
    RecommendationWrapper,
    RecommendationContainer,
    QuoteIconContainer,
    QuoteIcon,
    ClosingQuoteContainer,
    ClosingQuoteIcon,
    Name,
    Position,
    Description
} from './Recommendations.styles';
import { RecommendationsProps } from "@/app/components/recommendations/Recommendations.types";
import {useTheme} from "@/app/context/ThemeContext";

const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
    const { currentTheme: { theme } } = useTheme();
    return (
        <RecommendationWrapper>
            {recommendations.map((rec, index) => (
                <RecommendationContainer key={index} role="article" aria-labelledby={`rec-name-${index}`}>
                    <QuoteIconContainer>
                        <QuoteIcon
                            width="50mm"
                            height="41mm"
                            viewBox="0 0 50 41"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path
                                    style={{
                                        fill: 'none',
                                        stroke: theme === 'light' ? '#989cf5' : '#fff',
                                        strokeWidth: '.7',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round'
                                    }}
                                    d="M2.626 13.887v6.726h8.375c1.758.085 1.977-.796 1.93-2.144v-6.926c-1.746-.046-4.302-.081-6.047-.116-.48-1.56.853-3.505 1.88-4.28 1.032-.756 2.43-1.233 4.204-1.58V2.134C8.046 1.807 3.545 5.486 2.774 9.945c-.182 1.333-.148 2.498-.148 3.942ZM15.326 13.887v6.726h8.375c1.758.085 1.977-.796 1.93-2.144v-6.926c-1.746-.046-4.302-.081-6.047-.116-.48-1.56.853-3.505 1.88-4.28 1.032-.756 2.43-1.233 4.204-1.58V2.134c-4.922-.327-9.423 3.352-10.194 7.811-.182 1.333-.148 2.498-.148 3.942Z"
                                    transform="translate(-4.343 -3.18) scale(2.07182)"
                                />
                            </g>
                        </QuoteIcon>
                    </QuoteIconContainer>
                    <Name id={`rec-name-${index}`}>{rec.Name}</Name>
                    <Position>{rec.Position}</Position>
                    <Description>{rec.Description}</Description>
                    <ClosingQuoteContainer>
                        <ClosingQuoteIcon
                            width="50mm"
                            height="41mm"
                            viewBox="0 0 50 41"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path
                                    style={{
                                        fill: 'none',
                                        stroke: theme === 'light' ? '#989cf5' : '#fff',
                                        strokeWidth: '.7',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round'
                                    }}
                                    d="M2.626 13.887v6.726h8.375c1.758.085 1.977-.796 1.93-2.144v-6.926c-1.746-.046-4.302-.081-6.047-.116-.48-1.56.853-3.505 1.88-4.28 1.032-.756 2.43-1.233 4.204-1.58V2.134C8.046 1.807 3.545 5.486 2.774 9.945c-.182 1.333-.148 2.498-.148 3.942ZM15.326 13.887v6.726h8.375c1.758.085 1.977-.796 1.93-2.144v-6.926c-1.746-.046-4.302-.081-6.047-.116-.48-1.56.853-3.505 1.88-4.28 1.032-.756 2.43-1.233 4.204-1.58V2.134c-4.922-.327-9.423 3.352-10.194 7.811-.182 1.333-.148 2.498-.148 3.942Z"
                                    transform="translate(-4.343 -3.18) scale(2.07182)"
                                />
                            </g>
                        </ClosingQuoteIcon>
                    </ClosingQuoteContainer>
                </RecommendationContainer>
            ))}
        </RecommendationWrapper>
    );
};

export default Recommendations;
