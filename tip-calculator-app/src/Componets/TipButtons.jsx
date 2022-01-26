import { Button, SimpleGrid, Stack, Text, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
const TipButtons = ({ tip, setTip }) => {
    const [custom, setcustom] = useState('');
    const [selected, setselected] = useState('');

    useEffect(() => {
        setTip(custom);
    }, [custom]);

    const handleClick = ({ target }) => {
        if (selected == parseInt(target.innerText)) {
            setTip('');
            setselected('');
        } else {
            setTip(parseInt(target.innerText));
            setselected(parseInt(target.innerText));
        }
        setcustom('');
    };

    const buttons = [5, 10, 15, 25, 50].map((i, k) => {
        return (
            <Button
                bg={selected === i ? 'cyan.500' : 'cyan.800'}
                fontSize="22px"
                _hover={{ bg: 'cyan.250', color: 'cyan.800' }}
                onClick={handleClick}
                key={k}
            >
                {i}%
            </Button>
        );
    });

    const handleChange = ({ target }) => {
        if (target.value == '') {
            setcustom('');
        } else {
            setcustom(parseFloat(target.value));
        }
        setselected('');
    };

    return (
        <Stack spacing={3}>
            <Text fontWeight="bold" color="cyan.400">
                Select Tip %
            </Text>
            <SimpleGrid columns={[2, null, 3]} spacing="15px" color="white">
                {buttons}
                <Input
                    type="number"
                    placeholder="Custom"
                    textAlign="right"
                    fontWeight="bold"
                    fontSize="22px"
                    variant="filled"
                    color="cyan.800"
                    _placeholder={{ color: 'cyan.400', fontSize: '22px' }}
                    _focus={{
                        bg: 'cyan.100',
                        borderColor: 'cyan.500',
                    }}
                    _hover={{
                        bg: 'cyan.100',
                        borderColor: 'cyan.500',
                    }}
                    paddingY={5}
                    paddingX={3}
                    bg="cyan.100"
                    value={custom}
                    onChange={handleChange}
                />
            </SimpleGrid>
        </Stack>
    );
};

export default TipButtons;
