
import React from 'react';

const BackgroundTheme = () => {
    return (
        <div className="orbital-container">
            <div className="orb w-96 h-96 bg-blue-300 dark:bg-blue-600/30 top-[-10%] left-[-5%] animation-delay-2000"></div>
            <div className="orb w-96 h-96 bg-purple-300 dark:bg-purple-600/30 top-[20%] right-[-10%] animation-delay-4000"></div>
            <div className="orb w-80 h-80 bg-emerald-300 dark:bg-emerald-600/30 bottom-[-10%] left-[20%] animation-delay-1000"></div>
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-500/40 rounded-full animate-float-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-emerald-500/40 rounded-full animate-float-fast"></div>
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-purple-500/40 rounded-full animate-float-medium"></div>
        </div>
    );
};

export default BackgroundTheme;
