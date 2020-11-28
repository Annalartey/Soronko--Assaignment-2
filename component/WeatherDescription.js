import React, {useEffect, useState} from 'react';
import axios from 'axios';

function WeatherDescription() {
    const [description, setDescription] = useState({})

    useEffect(() => {
        axios.get('https://api.weatherbit.io/v2.0/current?city=Accra,Ghana&key=e79cffbc8cca4b9f8b34968c14db1d06')
        .then((res) => {
            console.log(res.data.data[0].weather);
            setDescription(res.data.data[0].weather);

        })
        .catch(err => console.error(err))
    },
    []);


    return (
        <div>
            <table className="text-left w-50% w-80">
            <tr className="bg-blue-200">
                    <td >Code</td>
                    <td>------</td>
                    <td> {description.code}</td>
                </tr>
                <tr className="bg-blue-300">
                    <td >Description</td>
                    <td>------</td>
                    <td> {description.description}</td>
                </tr>
            </table>
            
        </div>
    )
}

export default WeatherDescription
