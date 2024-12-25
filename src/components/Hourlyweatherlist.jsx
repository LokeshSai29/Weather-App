import { weatherCodes } from "../constants"

const Hourlyweatherlist = ({hourlyweather}) => {

  const temperature =Math.floor(hourlyweather.temp_c);
  const time = hourlyweather.time.split(" ")[1].substring(0,5);
  const weatherIcon = Object.keys(weatherCodes).find((icon)=> weatherCodes[icon].includes(hourlyweather.condition.code));
  
  return (
    <li className="weather-item">
          <p className="time">{time}</p>
          <img src={`icons/${weatherIcon}.svg`} className="weather-icon" />
          <p className="temperature">{temperature}°</p>
          </li>
  )
}

export default Hourlyweatherlist