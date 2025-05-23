"use client"
import useDarkMode from '../hooks/use-dark-mode';
import React from 'react';

const nextModeIcons = {
    "light": "☀️",
    "dark": "☽",
}

export default function DarkMode() {
    const { theme, toggleTheme } = useDarkMode("dark");
    
    return (
        <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
            {nextModeIcons[theme]}
        </button>
    )
}
