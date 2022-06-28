import Header from './components/Header';
import CountriesProvider from './contexts/CountriesProvider';
import CountryRouter from './routes/CountryRouter';
export function App() {
    return (
        <div className="font-nunito text-[14px] h-full overflow-y-auto bg-VeryLightGray dark:bg-VeryDarkBlueDark transition-all duration-400">
            <Header />
            <CountriesProvider>
                <CountryRouter />
            </CountriesProvider>
        </div>
    );
}
