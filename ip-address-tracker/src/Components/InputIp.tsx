import React from 'react';
import {
    Button,
    Input,
    InputGroup,
    InputRightAddon,
    Image,
} from '@chakra-ui/react';
import iconArrow from '../assets/images/icon-arrow.svg';

interface props {
    ip: string | undefined;
    setIp: Function;
    handleClick: Function;
}

const InputIp = ({ ip, setIp, handleClick}: props) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setIp(e.currentTarget.value);
    };
    return (
        <InputGroup justifyContent="center">
            <Input
                type="url"
                placeholder="Search for any IP address or domain"
                fontSize={[16, 18]}
                fontWeight={400}
                variant="filled"
                bg="white"
                padding={7}
                borderRadius={15}
                _focus={{ bg: 'white' }}
                border="none"
                w={{ base: '90%', md: '60%', lg: '40%' }}
                boxShadow="md"
                value={ip}
                onChange={handleChange}
            />
            <InputRightAddon
                children={
                    <Button
                        borderLeftRadius={0}
                        borderRightRadius={12}
                        bg="black"
                        fontSize={18}
                        paddingX={6}
                        paddingY={7}
                        _hover={{ bg: 'hsl(0, 0%, 17%)' }}
                        onClick={(e) => handleClick(e)}
                        aria-label="Submit"
                    >
                        <Image src={iconArrow} alt="icon-arrow"/>
                    </Button>
                }
                padding={0}
                margin={0}
                h="100%"
                borderRightRadius={12}
                border="none"
            />
        </InputGroup>
    );
};

export default InputIp;
