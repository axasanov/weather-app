import React from 'react';
import Button from 'react-bootstrap/Button';

export default function WeatherBtn({ cities, setCity }) {
  return (
    <div className="btn">
      <Button>Current</Button>
      {cities.map((city, index) => (
        <Button key={index} onClick={() => setCity(city)}>
          {city}
        </Button>
      ))}
    </div>
  );
}
