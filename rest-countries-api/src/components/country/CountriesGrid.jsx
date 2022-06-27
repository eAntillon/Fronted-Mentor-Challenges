import CountryCard from './CountryCard';

const CountriesGrid = ({ countries }) => {
    return countries.map((country) => <CountryCard country={country} />);
};

export default CountriesGrid;
