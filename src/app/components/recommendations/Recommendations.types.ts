interface Recommendation {
    Name: string;
    Position: string;
    Description: string;
}

export interface RecommendationsProps {
    recommendations: Recommendation[];
}