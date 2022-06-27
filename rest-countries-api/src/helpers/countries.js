export const getPageCountries = ({
    countries = [],
    searchText = '',
    page = 1,
    region = 'all',
}) => {
    let countriesCopy = [...countries];

    if (region !== 'all') {
        countriesCopy = countriesCopy.filter((i) => i.region == region);
    }

    if (searchText !== '' && searchText.length > 2) {
        countriesCopy = countriesCopy.filter((i) =>
            i.name.toUpperCase().includes(searchText.toUpperCase())
        );
    }
    if (page * 8 > countriesCopy.length) {
        return countriesCopy;
    }
    const cutedArray = countriesCopy.slice(0 + 8 * (page - 1), 8 * page);
    // console.log((0 + 8 * (page - 1), 8 * page), cutedArray, "params:", {textSearch, region});
    return cutedArray;
};

export const getBorders = (bordersCodes = [], countries = []) => {
    return countries.filter((i) => bordersCodes.includes(i.alpha3Code));
};
