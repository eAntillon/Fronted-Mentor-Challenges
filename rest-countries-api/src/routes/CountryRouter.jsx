import Router from 'preact-router';
import CountriesGrid from '../components/country/CountriesGrid';
import CountryDetail from '../components/country/CountryDetail';

const CountryRouter = () => {
    return (
        <Router>
            <CountriesGrid path="/" />
            <CountryDetail path="/detail/:countryCode" />
            {/* <Search path="/search/:query/:advanced?" /> */}
        </Router>
    );
};

export default CountryRouter;
