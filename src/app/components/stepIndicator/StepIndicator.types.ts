export interface Step {
    name: string;
    link?: string;
}

export interface StepIndicatorProps {
    steps: Step[];
    currentStep: number;
}