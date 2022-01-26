import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Calculator from './Componets/Calculator';
import theme from './Theme';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Calculator />
        </ChakraProvider>
    );
};

export default App;
