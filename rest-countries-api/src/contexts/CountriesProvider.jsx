import axios from 'axios';
import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export const Countries = createContext(null);

const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState('all');
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        const getCountries = async () => {
            setisLoading(true);
            console.log('fetching countries');
            const resp = await axios({
                method: 'get',
                url: 'https://restcountries.com/v2/all?fields=name,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flag,alpha3Code,nativeName',
            });
            if (resp.status != 200) {
                console.error('error getting countries');
                return [];
            }
            setCountries(resp.data);
            setisLoading(false);
        };
        getCountries();
    }, []);

    return (
        <Countries.Provider value={{ countries, region, setRegion, isLoading }}>
            {children}
        </Countries.Provider>
    );
};

export default CountriesProvider;
