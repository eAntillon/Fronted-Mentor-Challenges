import { Link } from 'preact-router/match';
import { useContext, useEffect, useState } from 'preact/hooks';
import { Countries } from '../../contexts/CountriesProvider';
import { getBorders } from '../../helpers/countries';
import DetailedInfo from './DetailedInfo';

const CountryDetail = ({ countryCode }) => {
    const { countries, isLoading } = useContext(Countries);
    const [country, setCountry] = useState({ name: '' });
    useEffect(() => {
        if (!isLoading) {
            setCountry(countries.filter((c) => c.alpha3Code == countryCode)[0]);
        }
    }, [isLoading]);

    useEffect(() => {
        if (!isLoading) {
            setCountry(countries.filter((c) => c.alpha3Code == countryCode)[0]);
        }
    }, [countryCode]);

    if (isLoading) {
        return (
            <div className="bg-red-500 h-full">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className=" h-auto md:h-[calc(100%-6rem)] px-6 py-12 md:px-8 lg:px-16 bg-VeryLightGray dark:bg-VeryDarkBlueDark dark:text-white transition-all duration-400 ease-in-out">
            <div className="mb-10 h-4rem">
                <Link href="/">
                    <button className="px-6 py-3 bg-white rounded-lg text-VeryDarkBlueDark shadow-md dark:bg-DarkBlue shadow-md text-black dark:text-white transition-all duration-400">
                        <i className="fa-solid fa-arrow-left mr-3"></i>
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-24 h-[calc(100%-4rem)] ">
                <div
                    className="h-96 md:h-9/12 md:mr-1 w-full bg-center bg-contain md:bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${country.flag})` }}
                ></div>
                <DetailedInfo
                    country={country}
                    borderCountries={getBorders(country.borders, countries)}
                />
            </div>
        </div>
    );
};

export default CountryDetail;
