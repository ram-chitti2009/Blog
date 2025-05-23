"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Pagination({

    pageCount
}) {

    const searchParams = useSearchParams()
    const pathname = usePathname()

    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

  return (
    <ul>
        {pages.map((pageNumber) => {
            let params = new URLSearchParams(searchParams.toString());
            params.set('page', pageNumber.toString());

            
            return (
                <li key={pageNumber} className="inline-block mx-1">
                    <a href={`${pathname}?${params.toString()}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        {pageNumber}
                    </a>
                </li>
            );
        })}
        
    </ul>
  )
}
