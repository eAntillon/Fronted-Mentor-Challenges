import { Box, Stack, Text } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import InputIp from '../Components/InputIp';
import pattern from '../assets/images/pattern-bg.png';
import InfoCard from '../Components/InfoCard';
import useFetch, { dataObject } from '../Hooks/useFetch';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './IpTracker.css';

const IpTracker: FC = () => {
    const [ip, setIp] = useState<string>('');
    const [lastIp, setLastIp] = useState<string>('');
    const { data, loading, error } = useFetch(lastIp);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (ip.match(new RegExp('^(?:[0-9]{1,3}.){3}[0-9]{1,3}$'))) {
            if (lastIp === ip) {
                return;
            }
            setLastIp(ip);
        } else {
            console.log('INVALID IP');
        }
    };

    return (
        <Stack w="100%" h="100vh" spacing={0} bg="blue.400">
            <Stack
                direction="column"
                paddingTop={{ base: 6, sm: 12 }}
                paddingX={{ base: 5, sm: 12 }}
                paddingBottom={{ base: 40, sm: 32 }}
                bgImage={pattern}
                bgRepeat="no-repeat"
                bgSize="cover"
                w="100%"
                alignItems="center"
                position="relative"
                zIndex={10}
            >
                <Text
                    color="white"
                    fontSize={[22, 30]}
                    fontWeight={500}
                    textAlign="center"
                    marginBottom={4}
                >
                    IP Address Tracker
                </Text>
                <InputIp ip={ip} setIp={setIp} handleClick={handleClick} />
                <InfoCard data={data} />
            </Stack>
            <Box bg="red.400" width="100%" h="100%">
                <MapContainer
                    center={data.position}
                    zoom={22}
                    scrollWheelZoom={true}
                    id="mapid"
                    zoomControl={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={data.position}></Marker>
                </MapContainer>
            </Box>
        </Stack>
    );
};

export default IpTracker;
