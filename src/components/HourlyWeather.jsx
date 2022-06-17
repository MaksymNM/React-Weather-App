import React from 'react'
import clock from '../clock.png';

import { useSelector } from 'react-redux';

export const HourlyWeather = () => {
    const {time} = useSelector(state => state.weather);


    const hour = time.map(h => ({
        hours: h.time.split(' ')[1],
        temp: h.temp_c,
        icon: h.condition.icon,
        
    }));

    const date = new Date;

    const filteredHour = hour.filter(h => (
        parseInt(h.hours) >= date.getHours()
    )); 

    return (
      <>
       <div className="hourly-forecast">
            <div>
                <img src={clock} alt="" />
            </div>
            <div>
                Hourly forecast
            </div>
        </div>
        <div className="hours">
            {filteredHour.map(h => (
            <div key={h.hours} className='hour'>
            <div className="hour-text">
            { h.hours} 
            </div>
            <img 
            src={h.icon} 
            alt="condition"
            className={`${filteredHour.length > 9 ? 'weather-img' : ''}`} />
            <div className="hour-text">
                {Math.round(h.temp) }&#xb0;
            </div>

            </div>

            ))}
        </div>
      </>
   
  )
}

