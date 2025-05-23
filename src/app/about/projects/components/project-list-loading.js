import React from 'react'

export default function ProjectLoadingPage() {
 return (
        <div>
            <div className="p-20">
                <h1 className="mb-8 text-xl">Projects</h1>
                <ul>
                    {Array(3).fill(0).map((_, index) => (
                        <li key={index} className="mb-4">
                            <div className="w-full h-24 animate-pulse bg-neutral-200 rounded-lg shadow-md mb-4">
                                <div className="h-4 bg-neutral-300 rounded w-1/4 mb-2 animate-pulse"></div>
                                <div className="h-4 bg-neutral-300 rounded w-3/4 mb-2 animate-pulse"></div>
                                <div className="h-4 bg-neutral-300 rounded w-1/6 animate-pulse"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
