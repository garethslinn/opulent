import { ReactNode } from 'react';

export interface ParagraphProps {
    backgroundColor?: string;
    foregroundColor?: string;
    first?: boolean;
    children: ReactNode;
}
