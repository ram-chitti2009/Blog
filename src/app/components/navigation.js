import Link from 'next/link'
import styles from './navigation.module.css'
export default function Navigation() {
    return (
        <nav className="p-20 font-mono border border-yellow-400">
            <ul className="flex space-x-4 flex-col md:flex-row">
               
                <li>
                    <Link className = {styles.link} href="/about">About</Link>
                </li>
                <li>
                    <Link className = {styles.link} href="/about/projects">Projects</Link>
                </li>

                <li>
                    <Link className = {styles.link} href = "/photos">Photos</Link>
                </li>
                <li>
                    <Link className = {styles.link} href = "/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}