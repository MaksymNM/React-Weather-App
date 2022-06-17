import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Weather } from './features/Weather';
import { loadWeather } from './features/weather-slice';


function App() {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.weather);
  
  const changeCity = (cityName='Kiev') => {
    dispatch(loadWeather(cityName))
  }
  

  useEffect(() => {
    changeCity();
  }, [])

  if(loading) {
    return (
      <div className='back'>
        <h2>Loading</h2>
      </div>
    ) 
    
  }
  
  return (
        <div className='back'>
          <Weather changeCity={changeCity}></Weather>
        </div>
  
  );
}

export default App;
