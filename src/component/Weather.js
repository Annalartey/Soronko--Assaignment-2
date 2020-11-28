import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
        <div className="flex border-2 border-blue-400 text-2xl font-bold px-24 py-4">
            <h3>{current.city_name}</h3>
            <div className="ml-96 text-left">
                <table>
                <tr>
                    <td>Date</td>
                    <td>{current.datetime}</td>
                </tr>
                <tr>
                    <td>Time Zone</td>
                    <td> {current.timezone}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{current.country_code}</td>
                </tr>
                <tr>
                    <td>Temperature</td>
                    <td>{current.temp}</td>
                </tr>
                <tr>
                    <td>Snow</td>
                    <td>{current.snow}</td>
                </tr>
            </table>
            </div>
        </div>
        
        </div>
        </center>
    );
};

export default Weather;