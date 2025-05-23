export default function AboutLayout({children}){

    return (
        <div>
            <h1>About Layout</h1>
            {children}

            <h2 className = "mb-4">You might also like</h2>
            
            <ul>
                <li> First Blog Post</li>
                <li> Second Blog Post</li>
            </ul>
        </div>
    )

}