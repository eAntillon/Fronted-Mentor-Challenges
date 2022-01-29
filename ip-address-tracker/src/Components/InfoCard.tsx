import { Divider, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { dataObject } from '../Hooks/useFetch';

interface props {
    data: dataObject;
}

const InfoCard = ({ data }: props) => {
    const infoBlocks = [
        { title: 'IP ADDRESS', data: data.ip },
        { title: 'LOCATION', data: data.location },
        { title: 'TIMEZONE', data: data.timezone },
        { title: 'ISP', data: data.isp },
    ].map((item, index) => {
        return (
            <HStack
                w={{ base: '100%', md: 'auto' }}
                alignItems="flex-start"
                key={index}
            >
                {index != 0 && (
                    <Flex
                        display={{ base: 'none', md: 'block' }}
                        h="5rem"
                        mt="12px"
                    >
                        <Divider
                            orientation="vertical"
                            h="100%"
                            borderColor="hsl(0, 0%, 79%)"
                        />
                    </Flex>
                )}

                <Stack
                    padding={[0, 0, 3]}
                    paddingX={[0, 5]}
                    paddingTop={0}
                    w="100%"
                    textAlign={{ base: 'center', md: 'left' }}
                    spacing={1}
                >
                    <Text
                        color="hsl(0, 0%, 59%)"
                        fontSize={[12, 14]}
                        fontWeight="700"
                        letterSpacing={1}
                    >
                        {item.title}
                    </Text>
                    <Text
                        color="black"
                        fontSize={[20, 22, 28]}
                        fontWeight={500}
                        letterSpacing={1}
                    >
                        {item.data}
                    </Text>
                </Stack>
            </HStack>
        );
    });

    return (
        <Stack
            w={{ base: '90%', lg: '80%' }}
            bg="white"
            padding={6}
            paddingTop={7}
            borderRadius={15}
            justifyContent="space-between"
            direction={{ base: 'column', md: 'row' }}
            position="absolute"
            top={{ base: 150, sm: 200 }}
            boxShadow="md"
            alignItems={{ base: 'center', md: 'start' }}
        >
            {infoBlocks}
        </Stack>
    );
};

export default InfoCard;
