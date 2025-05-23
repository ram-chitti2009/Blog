import React from 'react'

export default async function  ProjectsList() {
const response = await fetch("http://localhost:8080/repos", {
        // Add cache: no-store to prevent caching in server components
        cache: 'no-store'
    })
    const repos = await response.json()
  return (
    <div>
    <div className = "p-20">
        <h1 className = "mb-8 text-xl">

            Projects


        </h1>
        <ul>
            {repos.map((repo) => (

                <li key = {repo.id} className = "mb-4">

                    <div>{repo.title} </div>

                    <div> {repo.description} </div>

                    <div> {repo.stargazers_count} </div>
                    
                </li>
            ))}
        </ul>
    </div>
    </div>
  )
}
