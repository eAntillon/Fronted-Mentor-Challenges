export const getPageCountries = (countries = [], page = 1, region = 'all') => {
    if (page * 8 > countries.length) {
        return countries.slice(8 * page);
    }
    const cutedArray = countries.slice(0 + 8 * (page - 1), 8 * page);
    console.log((0 + 8 * (page - 1), 8 * page), cutedArray);
    return cutedArray;
};
