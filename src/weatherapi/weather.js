import React, {useState} from "react";
import axios from 'axios';
import "./weather.css";


const api={
    key: "cd4e08fb92b9ef40e471559aca528bb0",
    base: "https://api.openweathermap.org/data/2.5/"
}

function Weather(){
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)

            
            
            .then(result =>{ 
                setWeather(result?.data);
                setQuery('');
                console.log(result);

            }).catch((err, data) => alert(err?.response?.data?.message));
        }
    }



    const dateBuilder = (d) =>{
        let months = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"  ];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }


    return(
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app' }>
            <main>
                <div className="search-box">
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="search..."
                    value={query}
                    onKeyPress={search}
                    onChange={(e) => setQuery(e.target.value)}
                    
            
                    
                

                    
                />

                </div>
                {(typeof weather.main != "undefined") ? (
            <div>
                    <div>
                    <div className="location-box">
                    <div className="location">{weather.name},{weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())} </div>

                </div>

              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°c </div>
                <div className="weather"> {weather.weather[0].main}</div>
              </div>
                </div>
            </div>
               ) : ('')     }
            </main>

        </div>
    )
}

export default Weather