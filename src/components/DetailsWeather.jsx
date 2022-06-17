import React from 'react'
import { useSelector } from 'react-redux';

export const DetailsWeather = () => {
    const {current} = useSelector(state => state.weather);


    const weatherDetails = [{
        cloud: current.cloud,
        wind: current.wind_kph,
        humidity: current.humidity,
        feelsLike: current.feelslike_c,
        visibility: current.vis_km,
    }];

    return (
    <>
        <table className="weather-table">
            {            
                weatherDetails.map((cond) => (
                    <tbody key={cond}>
                        <tr>
                        <td className="condition-name">Cloudy</td>
                        <td className="condition-value">{cond.cloud}%</td>
                        </tr>
                        <tr>
                        <td className="condition-name">Wind</td>
                        <td className="condition-value">{cond.wind} km/h</td>
                        </tr>
                        <tr>
                        <td className="condition-name">Feels Like</td>
                        <td className="condition-value">{Math.round(cond.feelsLike)}&#xb0;</td>
                        </tr>
                        <tr>
                        <td className="condition-name">Humidity</td>
                        <td className="condition-value">{cond.humidity}%</td>
                        </tr>
                        <tr>
                        <td className="condition-name">Visibility</td>
                        <td className="condition-value">{cond.visibility} km</td>
                        </tr>
                        </tbody>
                ))
            }
                           
        </table>
    </>
  )
}

