import React, {useState} from 'react'
import axios from 'axios'

function SearchButton() {
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState({})
    const [history, setHistory] = useState([])


    function handleInput(e) {
        setQuery(e.target.value)
    }

    function handleSearch(e) {
            axios.get(`https://api.weatherbit.io/v2.0/current?city=${query}&key=e79cffbc8cca4b9f8b34968c14db1d06`)
                .then((res) => {
                    console.log(res);
                    const searchResult = res.data.data[0]

                    setSearch(searchResult);
                    setHistory([searchResult, ...history])
                })
                .catch((err) => {
                    console.log(err.info);
                },
                    []
                );

            setQuery("")
    }

    

    return (
            <div className="mt-20 flex ml-40 mr-40">
                <div>
                <input className="shadow border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" value={query} onChange={handleInput} type="text" name='search' placeholder="search" />
                <button value={search} onClick={handleSearch}>Search</button>
            </div>
            <div className="ml-20">
                <h2>Result</h2>
                <table>
                    <center>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time Zone</th>
                        <th>Country Code</th>
                        <th>Temperature</th>
                        <th>Snow</th>
                    </tr>

                {
                    history.map((searchHistory) => (
                
                    <tr>
                        <td>{searchHistory.city_name}</td>
                        <td>{searchHistory.datetime}</td>
                        <td>{searchHistory.timezone}</td>
                        <td>{searchHistory.country_code}</td>
                        <td>{searchHistory.temp}</td>
                        <td>{searchHistory.snow}</td>
                    </tr>
            )   ) }
            </center>
                </table>
            </div>
            </div>
        );
    }

export default SearchButton;
