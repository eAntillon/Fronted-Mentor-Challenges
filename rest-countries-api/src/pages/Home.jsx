import { useContext, useEffect, useState } from 'preact/hooks';
import { Countries } from '../contexts/CountriesProvider';
import { getPageCountries } from '../helpers/countries';
import CountriesGrid from '../components/country/CountriesGrid';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import NoCountries from '../components/NoCountries';
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

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="h-[calc(100vh-6rem)] px-6 md:px-8 lg:px-16 bg-VeryLightGray dark:bg-VeryDarkBlueDark transition-all duration-400 ease-in-out">
            <SearchBar
                regions={['Africa', 'Europe', 'Oceania', 'Asia', 'Americas']}
                setRegion={setRegion}
                region={region}
                searchText={searchText}
                setSearchText={setSearchText}
            />
            {displayCountries.length === 0 ? (
                <NoCountries />
            ) : (
                <CountriesGrid countries={displayCountries} />
            )}
        </div>
    );
};

export default Home;
