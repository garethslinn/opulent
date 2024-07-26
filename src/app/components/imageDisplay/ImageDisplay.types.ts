import { ReactNode } from 'react';

export interface ImageDisplayProps {
    title: string;
    image: string;
    imageRight: boolean;
    children: ReactNode;
}