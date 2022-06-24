import React, { FC } from 'react';
import ColorDisplayRow from './ColorDisplayRow';

interface ColorDisplayTestProps {

}

const ColorDisplayTest: FC<ColorDisplayTestProps> = () => {
    const colors = ['red-500', 'main-bg', 'keypad-bg', 'screen-bg', 'key-opt-bg', 'key-opt-shadow', 'key-toggle-bg', 'key-toggle-shadow', 'key-main-bg', 'key-main-shadow', 'text-screen', 'text-equal', 'text-option', 'text-keypad'];
    return (
        <div className={'flex flex-col justify-center items-center w-full h-screen'}>
            <div data-theme='contrast'>
                <ColorDisplayRow colors={colors} />
            </div>
            <div data-theme='default'>
                <ColorDisplayRow colors={colors} />
            </div>
            <div data-theme='light'>
                <ColorDisplayRow colors={colors} />
            </div>
        </div>
    );
};

export default ColorDisplayTest;
