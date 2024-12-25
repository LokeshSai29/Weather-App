const Currentweather = ({currentWeather}) => {
  return (
    <div className="current-weather">
          <img src={`icons/${currentWeather.weatherIcon}.svg`} className="weather-icon" />
          <h2 className="temperature">{currentWeather.temperature} <span>°C</span></h2>
          <p className="discription">
            {currentWeather.description}
          </p>
    </div>
  )
}

export default Currentweather