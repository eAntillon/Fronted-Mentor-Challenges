import { Flex, Stack, Text, Button } from '@chakra-ui/react';
import React from 'react';
const TotalPanel = ({tip, total, reset}) => {
    return (
        <Flex direction="column" justifyContent="space-between" w="100%" h="100%" >
            <Flex direction="column">
                <Flex justifyContent="space-between" marginBottom={8}>
                    <Stack color="white" spacing={0} justifyContent="center">
                        <Text fontSize={16} fontWeight="bold">
                            Tip amount
                        </Text>
                        <Text fontSize={12} color="gray.300">
                            / person
                        </Text>
                    </Stack>
                    <Text fontSize={42} color="cyan.500" fontWeight="bold">
                        ${tip != "" ? tip : 0}
                    </Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Stack color="white" spacing={0} justifyContent="center">
                        <Text fontSize={16} fontWeight="bold" >
                            Total
                        </Text>
                        <Text fontSize={12} color="gray.300">
                            / person
                        </Text>
                    </Stack>
                    <Text
                        h="100%"
                        fontSize={42}
                        color="cyan.500"
                        fontWeight="bold"
                    >
                        ${total != "" ? total : 0}
                    </Text>
                </Flex>
            </Flex>
            <Flex>
                <Button
                    h={12}
                    w="100%"
                    fontSize={20}
                    bg="cyan.350"
                    color="cyan.800"
                    _hover={{ bg: 'cyan.250' }}
                    marginTop={[14, null]}
                    onClick={reset}
                >
                    RESET
                </Button>
            </Flex>
        </Flex>
    );
};

export default TotalPanel;
