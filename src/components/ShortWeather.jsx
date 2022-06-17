import React from 'react'
import { useSelector } from 'react-redux';

export const ShortWeather = () => {
    const { location, current, condition} = useSelector(state => state.weather);

    return (
    <>
        <div className="header-weather-wrapper">
            <div className="temperature">
                {Math.round(current.temp_c)}&#xb0;
            </div>
            <div>
                <div className="city-name">
                    {location.name}
                </div>
                <div className="last-updated">
                    {current.last_updated}
                </div>
            </div>
                            
        </div>
                        
            <div className="weather-condition">
                <div className="weather-icon">
                    <img src={condition.icon} alt="" />
                </div>
                <div className="weather-text">
                    {condition.text}
                </div>
                            
            </div>
    </>
  )
}

