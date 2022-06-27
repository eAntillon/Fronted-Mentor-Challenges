import { Link } from 'preact-router';

const CountryCard = ({ country }) => {
    return (
        <div className="inline-block shadow-lg rounded-xl bg-white dark:bg-DarkBlue dark:text-white dark:shadow-none transition-all duration-400">
            <Link href={`/detail/${country.alpha3Code}`}>
                <div
                    className="h-52 w-full bg-center bg-cover bg-no-repeat rounded-t-xl"
                    style={{ backgroundImage: `url(${country.flag})` }}
                ></div>
            </Link>
            <div className="px-10 py-8">
                <h3 className="text-2xl font-bold mb-4">{country.name}</h3>
                <p className="mb-1 text-base font-light">
                    <span className="font-semibold">Population: </span>
                    {country.population.toLocaleString('en-US')}
                </p>
                <p className="mb-1 text-base font-light">
                    <span className="font-semibold">Region: </span>
                    {country.region}
                </p>
                <p className="mb-6 text-base font-light">
                    <span className="font-semibold">Capital: </span>
                    {country.capital}
                </p>
            </div>
        </div>
    );
};

export default CountryCard;
