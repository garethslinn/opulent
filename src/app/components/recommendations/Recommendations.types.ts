interface Recommendation {
    Name: string;
    Position: string;
    Description: string;
    image: string;
}

export interface RecommendationsProps {
    recommendations: Recommendation[];
}