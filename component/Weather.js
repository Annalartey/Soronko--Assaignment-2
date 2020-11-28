import React, {useEffect, useState} from 'react';
import axios from 'axios';
import map from './map.png'
import WeatherDescription from './WeatherDescription';

function Weather() {
    const [current, setCurrent] = useState({})

    useEffect(() => {
        axios.get('https://api.weatherbit.io/v2.0/current?city=Accra,Ghana&key=e79cffbc8cca4b9f8b34968c14db1d06')
        .then((res) => {
            console.log(res.data.data[0]);
            setCurrent(res.data.data[0]);

        })
        .catch(err => console.error(err))
    },
    []);

    return (
      <center> <div className="mt-20 mr-40 ml-40">

            <h2 className="font-bold text-4xl py-2">All Weather</h2>
            <hr></hr>
        <div className="flex border-2 border-blue-400 text-xl font-bold px-4 py-4 h-96">
            <div className="w-50% mt-4">
            {<img className="h-80 w-80 object-cover object center " src={map} alt="map"/>}
            </div>
            <h3 className="ml-2 text-3xl mt-4">{current.city_name}</h3>
            <div className="ml-40 text-left mt-4 ">
                <table className="w-80">
                <tr className="bg-blue-300">
                    <td>Date</td>
                    <td>------</td>
                    <td> {current.datetime}</td>
                </tr>
                <tr className="bg-blue-200">
                    <td >Time Zone</td>
                    <td>------</td>
                    <td> {current.timezone}</td>
                </tr>
                <tr className="bg-blue-300">
                    <td>Country</td>
                    <td>------</td>
                    <td> {current.country_code}</td>
                </tr>
                <tr className="bg-blue-200">
                    <td>Temperature</td>
                    <td>------</td>
                    <td>{current.temp}</td>
                </tr>
                <tr className="bg-blue-300">
                    <td>Snow</td>
                    <td>------</td>
                    <td>{current.snow}</td>
                </tr>   
            </table>
             <WeatherDescription/>
             <p className="mt-6">Amet sunt laborum irure sunt</p> 
             <p>anim eiusmod nulla mollit nisi.</p>
            </div>
            
        </div>
        
        </div>
        </center>
    );
};

export default Weather;