"use client"

export default function GlobalError({error}){
    return (
        <html>
            <body>
                <h1>Something went wrong</h1>
                <p>{error.message}</p>
            </body>
        </html>
    )
}