import Link from 'next/link';
import Navigation from './navigation';
import DarkMode from './darkmode';
export default function Header(){
    return (
        <header className="flex justify-between md:items-center mt-4">
           <div className="flex items-center md:space-x-12"> 
            <div className = "md:block">
                <Link href="/">
                    <h1 className="text-2xl font-bold mb-4">Next 14 Blog</h1>
                </Link>
            </div>
            <Navigation />

            </div>
            <div>
                <DarkMode />
            </div>
        </header>
    )
}