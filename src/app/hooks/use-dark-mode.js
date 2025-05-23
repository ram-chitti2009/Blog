import React from 'react';
import { useCookies } from 'react-cookie';

const useDarkMode = (defaultTheme = "dark") => {
    const [cookies, setCookie] = useCookies(['theme']);
    const [theme, setTheme] = React.useState(cookies.theme || defaultTheme);

    React.useEffect(() => {
        // Update document classes when theme changes
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        // Save theme to cookie
        setCookie("theme", theme, { path: "/" });
    }, [theme, setCookie]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    
    return { theme, toggleTheme };
}

export default useDarkMode;