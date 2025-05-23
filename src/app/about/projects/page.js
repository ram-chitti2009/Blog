import React from 'react'
import {Suspense} from 'react'
import ProjectsList from './components/project-list'
import ProjectLoadingPage from './components/project-list-loading'
import { ErrorBoundary } from "react-error-boundary";

export default async function ProjectsPage() {  
    return (
        <div>
        <div className = "p-20">
            <h1 className = "mb-8 text-xl">
            Projects
            </h1>
           
            {/* <ErrorBoundary fallback = {<div> Cannot fetch projects currently</div>}> */}
            <Suspense fallback = {<ProjectLoadingPage/>}>
            <ProjectsList />
            </Suspense>
            {/* </ErrorBoundary> */}
        </div>
        </div>
    )  
}
