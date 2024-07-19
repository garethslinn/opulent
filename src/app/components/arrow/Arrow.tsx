import React from 'react';
import { Arrow } from './Arrow.style';

interface ArrowButtonProps {
    rotate?: number;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ rotate = 0 }) => (
    <Arrow rotate={rotate}>
        <svg
            viewBox="0 0 26 50"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24.882.827.648 25.062l24.234 24.234v-9.134L12.147 27.427c-2.228-1.959-2.144-2.586-.062-4.668L24.882 9.962Z"
            />
        </svg>
    </Arrow>
);

export default ArrowButton;
