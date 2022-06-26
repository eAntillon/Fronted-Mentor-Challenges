import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export const Theme = createContext(null);

const getInitialTheme = () => {
    const storedPref = window.localStorage.getItem('dark-theme');
    return storedPref && storedPref === 'true' ? true : false;
};

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(getInitialTheme());

    useEffect(() => {
        window.localStorage.setItem('dark-theme', dark);
        const root = window.document.documentElement;
        root.classList.remove(dark ? 'light' : 'dark');
        root.classList.add(!dark ? 'light' : 'dark');
    }, [dark]);

    const toggleTheme = () => {
        setDark((actualTheme) => !actualTheme);
    };

    return (
        <Theme.Provider value={{ dark, toggleTheme }}>
            {children}
        </Theme.Provider>
    );
};

export default ThemeProvider;
