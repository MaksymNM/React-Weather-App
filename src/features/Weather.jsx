import { useSelector } from "react-redux";
import { CityList } from "../components/CityList";
import { DetailsWeather } from "../components/DetailsWeather";
import { HourlyWeather } from "../components/HourlyWeather";
import { ShortWeather } from "../components/ShortWeather";




export const Weather = ({changeCity}) => {
    const {loading} = useSelector(state => state.weather);
   
    
    
    return(
        <div className="weather-wrapper">
            <div className="content">
                <div className="logo">
                   weatherapp.com    
                </div>
                <div className="weather-content">
                    <div className="header-weather">
                        <ShortWeather/>
                    </div>
                    <div className="hourly-forecast-wrapper">
                        <HourlyWeather/>
                        
                    </div>
                </div>
            </div>
            <div className="tool-bar">
                <div className="cities">
                    Another City
                </div>
                
                <hr/>
                
                <div className="city-list-wrapper">
                    <CityList changeCity={changeCity}/>
                </div>

                <hr className="second"/>
                
                <div className="details-weather">
                    <div className="deatails-weather-header">
                        Weather Details 
                    </div>
                    <div className="weather-details-wrapper">
                        <DetailsWeather/>
                    </div>
                </div>
            </div>
    </div>
    )
}