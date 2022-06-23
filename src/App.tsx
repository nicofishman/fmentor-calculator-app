import React, { FC } from 'react';

interface AppProps {

}

const App: FC<AppProps> = () => {
    return (
        <div data-theme='light' className="bg-main-bg text-white flex h-screen w-full justify-center items-center text-3xl">
            <span>calculator app</span>
        </div>
    );
};

export default App;
