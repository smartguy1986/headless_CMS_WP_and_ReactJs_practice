import React, { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../../urlConfig';
import { Spin, Space, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Text } = Typography;
const WEATHER_APP_API_ICON = 'https://openweathermap.org/img/wn';

const WeatherData = () => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `${API_ENDPOINTS.CUSTOM_WEATHER}?lat=${lat}&lon=${long}`
                );
                if (response.status === 200) {
                    const data = await response.json();
                    setWeatherData(data.data);
                } else {
                    console.error('Error fetching weather:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching weather:', error.message);
            }
        };

        fetchWeather();
    }, [lat, long]);

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 0 }}>
            {weatherData && (
                <>
                    <Space direction="horizontal" align="start">
                        <Text strong>{weatherData.main.temp}&deg;C</Text>
                        <Text strong  type="secondary">{weatherData.name}</Text>
                        <img
                            src={`${WEATHER_APP_API_ICON}/${weatherData.weather[0].icon}@2x.png`}
                            alt={weatherData.weather[0].description}
                            style={{ width: '30px', height: '30px', display: 'inline-block' }}
                        />
                        <Text strong>{weatherData.weather[0].main}</Text>
                    </Space>
                </>
            )}
        </div>

    );
};

export default WeatherData;
