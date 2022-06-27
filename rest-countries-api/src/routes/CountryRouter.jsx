import Router from 'preact-router';
import Home from '../pages/Home';
import CountryDetail from '../components/country/CountryDetail';

const CountryRouter = () => {
    return (
        <Router>
            <Home path="/" />
            <CountryDetail path="/detail/:countryCode" />
            {/* <Search path="/search/:query/:advanced?" /> */}
        </Router>
    );
};

export default CountryRouter;
