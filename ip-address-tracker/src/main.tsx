import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import IpTracker from './Pages/IpTracker';
ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <IpTracker />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
