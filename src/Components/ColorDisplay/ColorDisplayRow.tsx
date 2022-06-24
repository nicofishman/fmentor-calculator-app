import React, { FC } from 'react';
import ColorDisplay from './ColorDisplay';

interface ColorDisplayRowProps {
    colors: string[]
}

const ColorDisplayRow: FC<ColorDisplayRowProps> = ({ colors }) => {
    return (
        <div className='flex flex-row justify between px-10'>
            {
                colors.map((color, index) => {
                    const bg = `bg-${color}`;
                    return (
                        <ColorDisplay className={bg} key={index}><span>{color}</span></ColorDisplay>
                    );
                })
            }
        </div>
    );
};

export default ColorDisplayRow;
