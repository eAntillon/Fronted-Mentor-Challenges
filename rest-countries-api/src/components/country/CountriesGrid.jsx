import CountryCard from './CountryCard';

const CountriesGrid = ({ countries }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-14  pb-12">
            {countries.map((country) => (
                <CountryCard country={country} />
            ))}
        </div>
    );
};

export default CountriesGrid;
