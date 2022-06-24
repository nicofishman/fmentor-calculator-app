import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import ColorDisplayTest from './Components/ColorDisplay/ColorDisplayTest';

interface ContextProps {
    theme: 'contrast' | 'default' | 'light';
}

interface AppProps {

}

// const appCtx = createContext<ContextProps | null>(null);

// const appProvider: PropsWithChildren = ({children}) => {
//     const [theme, setTheme] = useState<ContextProps['theme']>('default');
// }

const App: FC<AppProps> = () => {
    return (
        <ColorDisplayTest />
    );
};

export default App;
