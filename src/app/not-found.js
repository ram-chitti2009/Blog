"use client"
// This is a global error handler for the entire app

export default function notFound(){
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
            
            <div>
                You might want to chekc out some other blog posts
            </div>

            <ul>
                <li> First Blog Post</li>
                <li> Second Blog Post</li>
            </ul>
        </div>
    )
}