import { useWeather } from "../context/WeatherContext";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

function Weather() {
  const { cities, selected, setSelected, weathers, unit, setUnit } =
    useWeather();
  console.log(selected);
  const { theme, setTheme } = useTheme();

  

  const handleChange = (e) => {
    const newValue = e.target.value.split(",");
    console.log("esd", newValue);
    setSelected({
      id: newValue[0],
      name: newValue[1],
      latitude: newValue[2],
      longitude: newValue[3],
      population: newValue[4],
      region: newValue[5],
    });
  };

  const handleSwitch = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };
  const dt = weathers?.current?.dt;

  function createDate(dt) {
    const newDate = new Date(dt * 1000);
    return newDate.toDateString().slice(3);
  }

  function createDay(dt, type) {
    const day = new Date(dt * 1000);
    if (type === "long") {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return day.toLocaleString("en-us", options);
    } else {
      return day.toLocaleString("en-us", { weekday: "long" });
    }
  }
  return (
    <>
      <aside>
        <div className={`aside ${theme}`}>
          <div className="aside-container">
            <div className="aside-header">
              <select
                onChange={handleChange}
                defaultValue={[
                  "61",
                  "Trabzon",
                  "41.0015",
                  "39.7178",
                  "768417",
                  "Karadeniz",
                ]}
                
              >
                {cities.map((city) => (
                  <option
                    key={city.id}
                    selected={city.id === selected.id}
                    value={[
                      city.id,
                      city.name,
                      city.latitude,
                      city.longitude,
                      city.population,
                      city.region,
                    ]}
                  >
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="aside-main">
              <h1>{selected.name}</h1>
              <h2>
                <span>{createDate(weathers?.current?.dt)}</span>
                <span>{createDay(dt)}</span>
              </h2>
              {weathers?.current?.weather?.[0].icon && (
                <img
                  src={`http://openweathermap.org/img/wn/${weathers?.current?.weather?.[0].icon}@2x.png`}
                  style={{ backgroundColor: "#E6E6E6", borderRadius: "6px" }}
                />
              )}
              <span className="aside-degree">
                {Math.round(weathers?.current?.temp)}
                {unit === "metric" ? (
                  <span>&#8451;</span>
                ) : (
                  <span> &#8457; </span>
                )}
              </span>
              <div className="aside-main-item">
                <div>
                  Feels Like
                  <span className="material-symbols-rounded">
                    device_thermostat
                  </span>
                </div>
                <span>
                  {Math.round(weathers?.current?.feels_like)}
                  {unit === "metric" ? (
                    <span>&#8451;</span>
                  ) : (
                    <span> &#8457; </span>
                  )}
                </span>
              </div>
              <div className="aside-main-item">
                <div>
                  Day
                  <span className="material-symbols-rounded">light_mode</span>
                </div>
                <span>
                  {Math.round(weathers?.daily?.[0]?.temp?.day)}
                  {unit === "metric" ? (
                    <span>&#8451;</span>
                  ) : (
                    <span> &#8457; </span>
                  )}
                </span>
              </div>
              <div className="aside-main-item">
                <div>
                  Night
                  <span className="material-symbols-rounded">bedtime</span>
                </div>
                <span>
                  {Math.round(weathers?.daily?.[0]?.temp?.night)}
                  {unit === "metric" ? (
                    <span>&#8451;</span>
                  ) : (
                    <span> &#8457; </span>
                  )}
                </span>
              </div>
              <div className="aside-main-item">
                <div>
                  Humidity
                  <ion-icon name="water"></ion-icon>
                </div>
                <span>{weathers?.current?.humidity}%</span>
              </div>
              <div className="aside-main-item">
                <div>
                  Wind
                  <span className="material-symbols-rounded">air</span>
                </div>
                <span>{weathers?.current?.wind_speed}</span>
              </div>
            </div>
            <div className="aside-footer">
              <span
                className="mode"
                onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
              >
                {theme === "Dark" ? (
                  <ion-icon name="sunny"></ion-icon>
                ) : (
                  <ion-icon name="moon"></ion-icon>
                )}
              </span>
              <div className="unity">
                <div>C</div>
                <div>
                  <label className="switch">
                    <input type="checkbox" onChange={handleSwitch} />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div>F</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <section>
        <div className="section-container">
          {weathers?.daily?.map((daily, i) => (
            <div key={i} className={`grid-item ${theme} `}>
              <div className="grid-item-header">{createDate(daily?.dt)}</div>
              <div className="grid-item-container">
                <img
                  src={`http://openweathermap.org/img/wn/${daily?.weather?.[0].icon}@2x.png`}
                  style={{
                    backgroundColor: "#E6E6E6",
                    borderRadius: "6px",
                    marginTop: "10px",
                  }}
                />
                <span>{createDay(daily?.dt)}</span>
                <span>{daily?.weather?.[0]?.description}</span>
              </div>
              <div className="grid-item-footer">
                <div>
                  Min: {Math.round(daily?.temp?.min)}
                  {unit === "metric" ? (
                    <span>&#8451;</span>
                  ) : (
                    <span> &#8457; </span>
                  )}
                </div>
                <div>
                  Max: {Math.round(daily?.temp?.max)}
                  {unit === "metric" ? (
                    <span>&#8451;</span>
                  ) : (
                    <span> &#8457; </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Weather;
