import { Link } from 'preact-router';

const DetailedInfo = ({ country, borderCountries }) => {
    return (
        <div className="flex flex-col  pb-0 md:pb-4">
            <h1 className="mb-6 text-3xl font-bold">{country.name}</h1>
            <div className="flex flex-col md:flex-row md:mb-12">
                <div className="grid grid-cols-1 gap-y-5 md:mr-16 mb-12">
                    <p>
                        <span className="font-semibold">Native Name: </span>
                        {country.nativeName}
                    </p>
                    <p>
                        <span className="font-semibold">Population: </span>
                        {(+country.population).toLocaleString('en-US')}
                    </p>
                    <p>
                        <span className="font-semibold">Region: </span>
                        {country.region}
                    </p>
                    <p>
                        <span className="font-semibold">Sub Region: </span>
                        {country.subregion}
                    </p>
                    <p>
                        <span className="font-semibold">Capital: </span>
                        {country.capital}
                    </p>
                </div>
                <div className="grid grid-cols-1 grid-rows-5 gap-y-5 ">
                    <p>
                        <span className="font-semibold">
                            Top Level Domain:{' '}
                        </span>
                        {country.topLevelDomain?.join()}
                    </p>
                    <p>
                        <span className="font-semibold">Currencies: </span>
                        {country.currencies?.map((i) => i.name).join()}
                    </p>
                    <p>
                        <span className="font-semibold">Languages: </span>
                        {country.languages?.map((i) => i.name).join()}
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center">
                <p className="font-bold mb-3 md:mb-0 mr-2">
                    Border Countries:{' '}
                </p>
                <div className="flex flex-wrap items-center justify-center">
                    {borderCountries.map((i) => (
                        <Link href={`/detail/${i.alpha3Code}`}>
                            <button className="rounded-sm p-2 shadow-md text-black mr-2 mb-2 dark:bg-DarkBlue dark:text-white transition-all duration-400 hover:underline decoration-gray-500">
                                {i.name}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailedInfo;
