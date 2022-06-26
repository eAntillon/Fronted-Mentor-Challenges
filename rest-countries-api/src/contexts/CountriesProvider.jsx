import axios from 'axios';
import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export const Countries = createContext(null);

const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState('');
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        (async () => {
            console.log('getting countries');
            setisLoading(true);
            const resp = await axios({
                method: 'get',
                url: 'https://restcountries.com/v2/all?fields=name,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flag',
            });
            if (resp.status != 200) {
                console.error('error getting countries');
                setCountries([]);
            }
            setCountries(resp.data);
            setisLoading(false);
        })();
    }, []);

    return (
        <Countries.Provider value={{ countries, region, setRegion, isLoading }}>
            {children}
        </Countries.Provider>
    );
};

export default CountriesProvider;
