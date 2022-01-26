import {
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
    Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import iconPerson from '../assets/images/icon-person.svg';
const InputPersons = ({ people, setpeople }) => {
    const [error, seterror] = useState(false);

    const handleChange = ({ target }) => {
        if (target.value == '') {
            setpeople('');
            seterror(false);
        } else if (target.value == '0') {
            seterror(true);
            setpeople(parseFloat(target.value));
        } else {
            seterror(false);
            setpeople(parseFloat(target.value));
        }
    };

    return (
        <Stack spacing={2}>
            <Flex justifyContent="space-between" w="100%">
                <Text fontWeight="bold" color="cyan.400">
                    Number of People
                </Text>
                {error && (
                    <Text fontWeight="bold" color="red.300">
                        Can't be zero
                    </Text>
                )}
            </Flex>

            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    color="cyan.300"
                    children={<img src={iconPerson} />}
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
                    errorBorderColor="red.400"
                    isInvalid={error}
                    _placeholder={{ color: 'cyan.300' }}
                    _focus={{
                        bg: 'cyan.100',
                        borderColor: !error ? 'cyan.500' : 'red.400',
                    }}
                    _hover={{
                        bg: 'cyan.100',
                        borderColor: !error ? 'cyan.500' : 'red.400',
                    }}
                    paddingY={5}
                    paddingX={3}
                    bg="cyan.100"
                    value={people}
                    onChange={handleChange}
                />
            </InputGroup>
        </Stack>
    );
};

export default InputPersons;
