import React from 'react';
import {
    Stack,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import iconDollar from '../assets/images/icon-dollar.svg';

const InputBill = ({ bill, setbill }) => {
    const handleChange = ({ target }) => {
        if (target.value == '') {
            setbill('');
        } else {
            setbill(parseFloat(target.value));
        }
    };

    return (
        <Stack spacing={2}>
            <Text fontWeight="bold" color="cyan.400">
                Bill
            </Text>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    color="cyan.300"
                    children={<img src={iconDollar} />}
                    fontSize="24px"
                    height="100%"
                    left={1}
                />
                <Input
                    type="number"
                    placeholder="0"
                    textAlign="right"
                    fontSize="24px"
                    fontWeight="bold"
                    variant="filled"
                    color="cyan.800"
                    _placeholder={{ color: 'cyan.300' }}
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
                    value={bill}
                    onChange={handleChange}
                />
            </InputGroup>
        </Stack>
    );
};

export default InputBill;
