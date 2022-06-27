const SearchBar = ({ regions, setRegion, searchText, setSearchText }) => {
    const handleChangeText = (e) => {
        setSearchText(e.target.value);
    };

    const handleSelect = (e) => {
        setRegion(e.target.value);
    };

    return (
        <div className="py-6 flex flex-row justify-between">
            <div className="bg-white px-6 py-3 rounded-lg text-DarkGray shadow-md w-1/3 dark:bg-DarkBlue transition-all duration-400">
                <i className="fa-solid fa-magnifying-glass mr-4 dark:text-gray-300"></i>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for a country..."
                    value={searchText}
                    className="p-2 text-black outline-0 w-2/3 caret-blue-500 dark:bg-DarkBlue dark:text-white dark:placeholder-gray-300 transition-all duration-400"
                    onInput={handleChangeText}
                />
            </div>
            <div className="flex items-center px-2 py-1 bg-white rounded-lg shadow-md dark:bg-DarkBlue transition-all duration-400">
                <select
                    name="regionSelected"
                    className="p-3 dark:bg-DarkBlue transition-all duration-400 outline-0 dark:text-white dark:placeholder-gray-300"
                    onChange={handleSelect}
                >
                    <option selected disabled>
                        Filter by Region
                    </option>
                    <option value="all">All</option>
                    {regions.map((i) => (
                        <option value={i}>{i}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SearchBar;
