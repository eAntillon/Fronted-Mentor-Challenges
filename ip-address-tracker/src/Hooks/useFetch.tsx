import axios from 'axios';
import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';

export interface dataObject {
    ip: string;
    location: string;
    timezone: string;
    isp: string;
    position: LatLngExpression;
}

const useFetch = (ip: string) => {
    const [data, setData] = useState<dataObject>({
        ip: '192.212.174.101',
        location: 'Brooklyn, NY 10001',
        timezone: 'UTC-5:00',
        isp: 'SpaceX Starlink',
        position: { lat: 43.731024, lng: 7.414834 },
    });
    const [loading, setLoading] = useState<string | boolean>(false);
    const [error, setError] = useState<string>('');
    const apikey = import.meta.env.VITE_API_KEY;
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apikey}&ip=${ip}`;
    useEffect(() => {
        setLoading('loading...');
        setData({
            ip: '192.212.174.101',
            location: 'Brooklyn, NY 10001',
            timezone: 'UTC-5:00',
            isp: 'SpaceX Starlink',
            position: { lat: 43.731024, lng: 7.414834 },
        });
        setError('');
        if (ip != '') {
            axios.get(url).then((res) => {
                setLoading(false);
                console.log(res);
                setData({
                    ip: res.data.ip,
                    location: `${res.data.city}, ${res.data.district}`,
                    timezone: `UTC${res.data.time_zone.offset}:00`,
                    isp: res.data.isp,
                    position: {
                        lat: res.data.latitude,
                        lng: res.data.longitude,
                    },
                });
            });
        } else {
            setData({
                ip: '192.212.174.101',
                location: 'Brooklyn, NY 10001',
                timezone: 'UTC-5:00',
                isp: 'SpaceX Starlink',
                position: { lat: 43.731024, lng: 7.414834 },
            });
        }
    }, [ip]);
    return { data, loading, error } as const;
};

export default useFetch;
