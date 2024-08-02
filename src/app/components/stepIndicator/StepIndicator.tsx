import React from 'react';
import {
    StepIndicatorItem,
    StepIndicatorList,
    StepIndicatorWrapper,
    VisuallyHidden,
    StepNumber,
    CompletedTick,
    Arrow
} from "@/app/components/stepIndicator/StepIndicator.styles";
import { StepIndicatorProps } from "@/app/components/stepIndicator/StepIndicator.types";

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
    return (
        <StepIndicatorWrapper>
            <StepIndicatorList>
                {steps.map((step, index) => {
                    const isCompleted = index < currentStep;
                    const isCurrent = index === currentStep;

                    return (
                        <React.Fragment key={index}>
                            <StepIndicatorItem isCompleted={isCompleted} isCurrent={isCurrent}>
                                <VisuallyHidden>
                                    {isCompleted ? 'Completed: ' : isCurrent ? 'Current: ' : ''}
                                </VisuallyHidden>
                                {isCompleted ? (
                                    <CompletedTick>&#10003;</CompletedTick> // Unicode for check mark
                                ) : (
                                    <StepNumber>{index + 1}</StepNumber>
                                )}
                                {isCompleted && step.link ? (
                                    <a href={step.link}>{step.name}</a>
                                ) : (
                                    <span>{step.name}</span>
                                )}
                            </StepIndicatorItem>
                            {index < steps.length - 1 && <Arrow>&#9654;</Arrow>} {/* Unicode for right arrow */}
                        </React.Fragment>
                    );
                })}
            </StepIndicatorList>
        </StepIndicatorWrapper>
    );
};

export default StepIndicator;
