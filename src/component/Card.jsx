import React from 'react';
import moon from '../assets/image/moon.jpg';
import min from '../assets/image/min.png';
import max from '../assets/image/max.png';

export default function Card({ weather }) {
  return (
    <div className="card">
      <div className="flex-container">
        <img className="moon" src={moon} alt="weather_image" />
        <h1>{weather?.name}</h1>
      </div>
      <h3>
        {weather?.main.temp} °C /{' '}
        {Number(weather?.main.temp * 1.8 + 32).toFixed(2)} °F
      </h3>
      <h5>
        <img className="temp" src={min} alt="min image" />
        {weather?.main.temp_min}{' '}
        <img className="temp" src={max} alt="max image" />{' '}
        {weather?.main.temp_max}
      </h5>
      <h3 className="description">{weather?.weather[0].description}</h3>
    </div>
  );
}
