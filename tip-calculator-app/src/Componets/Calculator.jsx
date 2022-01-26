import { Box, Stack, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import InputPersons from './InputPersons';

import InputBill from './InputBill';
import TipButtons from './TipButtons';
import TotalPanel from './TotalPanel';

TotalPanel;
const Calculator = () => {
    const [bill, setbill] = useState('');
    const [people, setpeople] = useState('');
    const [tip, setTip] = useState('');

    const [total, settotal] = useState(0);
    const [totalTip, settotalTip] = useState(0);

    useEffect(() => {
        if (bill == 0 || people == 0) {
            settotal(0);
            settotalTip(0);
        } else {
            settotal((bill + (bill * tip) / 100) / people);
            settotalTip((bill * tip) / 100);
        }
    }, [bill, people, tip]);

    const reset = () => {
        setbill('')
        setpeople('')
        setTip('')
    }

    return (
        <Flex
            bg="cyan.200"
            w="100%"
            h="100%"
            alignItems={['start', 'center']}
            fontFamily="mono"
            boxSizing="border-box"
            overflowY="scroll"
        >
            <Stack
                direction="column"
                marginX="auto"
                width={{ base: '100%', sm: '86%', lg: '72%', xl: '55%' }}
                spacing={16}
            >
                <Box
                    w="100%"
                    fontWeight="bold"
                    fontSize="24px"
                    letterSpacing="0.6rem"
                    color="cyan.800"
                    marginTop={[10,0]}
                >
                    <Text textAlign="center">SPLI</Text>
                    <Text textAlign="center">TTER</Text>
                </Box>
                <Stack
                    bg="white"
                    w="100%"
                    height="100%"
                    direction={{ base: 'column', md: 'row' }}
                    borderRadius={24}
                    borderTopRadius={24}
                        borderBottomRadius={[0,null,24]}
                    padding={8}
                    spacing={8}
                >
                    <Box
                        width={{ base: '100%', md: '50%' }}
                        fontSize="15px"
                        color="cyan.800"
                    >
                        <Stack w="100%" h="100%" padding={2} spacing="10%">
                            <InputBill bill={bill} setbill={setbill} />
                            <TipButtons tip={tip} setTip={setTip} />
                            <InputPersons
                                people={people}
                                setpeople={setpeople}
                            />
                        </Stack>
                    </Box>
                    <Box
                        bg="cyan.800"
                        width={{ base: '100%', md: '50%' }}
                        borderRadius={16}
                        padding={8}
                    >
                        <TotalPanel tip={totalTip} total={total} reset={reset} />
                    </Box>
                </Stack>
            </Stack>
        </Flex>
    );
};

export default Calculator;
