import { Theme } from '../contexts/ThemeProvider';
import { useContext } from 'preact/hooks';
const Header = () => {
    const { dark, toggleTheme } = useContext(Theme);

    return (
        <header className="flex h-6rem flex-row justify-between items-center w-full py-4 px-6 md:px-8 lg:px-16 bg-white dark:bg-DarkBlue shadow-md text-black dark:text-white transition-all duration-400 ">
            <h2 className="text-lg md:text-2xl font-extrabold ">
                Where in the world?
            </h2>
            <button
                className="text-xs md:text-lg font-medium p-3 flex flex-row items-center justify-center dark:fill-yellow active:bg-transparent focus:bg-transparent"
                onClick={toggleTheme}
            >
                <i
                    className={`${
                        dark ? 'fa-solid' : 'fa-regular'
                    } fa-moon w-5 mr-2 transition-all`}
                ></i>
                Dark Mode
            </button>
        </header>
    );
};

export default Header;
