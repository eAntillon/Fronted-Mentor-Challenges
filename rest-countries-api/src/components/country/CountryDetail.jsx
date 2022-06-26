import { Link } from 'preact-router/match';

const CountryDetail = ({ countryCode }) => {
    return (
        <div>
            CountryDetail
            <Link href="/">
                <button>{countryCode}</button>
            </Link>
        </div>
    );
};

export default CountryDetail;
