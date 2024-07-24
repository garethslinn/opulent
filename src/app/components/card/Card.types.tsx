// types.ts
import { ReactNode } from 'react';

export interface CardProps {
    title: string;
    link: string;
    imageSrc: string;
    children: ReactNode;
}
