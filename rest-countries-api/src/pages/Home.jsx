import { useContext, useEffect, useState } from 'preact/hooks';
import { Countries } from '../contexts/CountriesProvider';
import { getPageCountries } from '../helpers/countries';
import CountriesGrid from '../components/country/CountriesGrid';
import SearchBar from '../components/SearchBar';
const Home = () => {
    const { countries, region, setRegion, isLoading } = useContext(Countries);
    const [displayCountries, setDisplayCountries] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (!isLoading) {
            setDisplayCountries(getPageCountries({ countries }));
        }
    }, [isLoading]);

    useEffect(() => {
        if (isLoading) return;
        setDisplayCountries(
            getPageCountries({ countries, searchText, region })
        );
    }, [searchText, region]);

    if (isLoading || displayCountries.length === 0) {
        return (
            <div className="bg-red-500 h-full">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="px-6 md:px-8 lg:px-16 bg-VeryLightGray dark:bg-VeryDarkBlueDark transition-all duration-400 ease-in-out">
            <SearchBar
                regions={['Africa', 'Europe', 'Oceania', 'Asia', 'Americas']}
                setRegion={setRegion}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-14  pb-12">
                <CountriesGrid countries={displayCountries} />
            </div>
        </div>
    );
};

export default Home;
