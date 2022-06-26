import 'virtual:windi.css';
import { App } from './app';
import { render } from 'preact';
import ThemeProvider from './contexts/ThemeProvider';
import './main.css'
render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,

    document.getElementById('app')
);
