import { useContext, useEffect, useState } from 'preact/hooks';
import { Countries } from '../../contexts/CountriesProvider';
import { getPageCountries } from '../../helpers/getPaginationCountries';
import SearchBar from '../SearchBar';
import CountryCard from './CountryCard';

const CountriesGrid = () => {
    const [page, setPage] = useState(1);
    const { countries, region, setRegion, isLoading } = useContext(Countries);
    const [displayCountries, setDisplayCountries] = useState([]);

    useEffect(() => {
        setDisplayCountries(getPageCountries(countries, page));
    }, [isLoading]);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="px-6 md:px-8 lg:px-16 bg-VeryLightGray dark:bg-VeryDarkBlueDark transition-all duration-400 ">
            <SearchBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-14  pb-12">
                {displayCountries.map((country) => (
                    <CountryCard country={country} />
                ))}
            </div>
        </div>
    );
};

export default CountriesGrid;
