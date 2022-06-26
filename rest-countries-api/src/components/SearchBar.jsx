const SearchBar = ({ regions }) => {
    return (
        <div className="py-6 flex flex-row justify-between">
            <div className="bg-white px-6 py-3 rounded-lg text-DarkGray shadow-md w-1/3 dark:bg-DarkBlue transition-all duration-400">
                <i className="fa-solid fa-magnifying-glass mr-4 dark:text-gray-300"></i>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for a country..."
                    className="p-2 text-black outline-0 w-2/3 caret-blue-500 dark:bg-DarkBlue dark:text-white dark:placeholder-gray-300 transition-all duration-400"
                />
            </div>
            <select name="regionSelected">
                <option selected disabled>
                    Filter by Region
                </option>
                <option value="hello">All</option>
            </select>
        </div>
    );
};

export default SearchBar;
