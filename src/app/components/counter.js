"use client"

import React from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0);
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);
    
    return (
        <div>
            Count: {count}
        </div>
    )
}
