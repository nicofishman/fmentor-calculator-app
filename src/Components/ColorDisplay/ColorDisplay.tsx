import React, { FC, HTMLAttributes } from 'react';

interface ColorDisplayProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ColorDisplay: FC<ColorDisplayProps> = ({ className, children, ...props }) => {
    return (
        <div className={`${className} h-24 w-24 rounded-md bg-opacity-100`}>
            {children}
        </div>
    );
};

export default ColorDisplay;
