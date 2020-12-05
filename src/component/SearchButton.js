import React, {useEffect, useState} from 'react'
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
                    let newHistory = [searchResult, ...history]
                    setHistory(newHistory)
                    localStorage.setItem("storedhistory" , JSON.stringify(newHistory))
                })
                   
                
                .catch((err) => {
                    console.log(err.info);
                },
                    []
                );

            setQuery("")
    }

    useEffect(() => {
        let history = localStorage.getItem("storedhistory")
        if (history) {
            setHistory(JSON.parse(history))
        }
        
    }, [])

    return (
            <div className="mt-20 ml-40 mr-40">
                <div>
                <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" value={query} onChange={handleInput} type="text" name='search' placeholder="search" />
                <button className="my-6 px-2 text-center rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white " value={search} onClick={handleSearch}>Search</button>
            </div>
            <div className="text-center my-20">
                <h2 className="font-bold text-4xl">Result</h2>
                   
                    

                {
                    history.map((history) => ( 
                  <table className="text-left my-10 border-2 border-blue-400 w-full text-xl">    
                    
                    <tr>
                        <td>Name</td> 
                        <td>{history.city_name}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>{history.datetime}</td>
                    </tr>
                    <tr>
                        <td>Time Zone</td>
                        <td>{history.timezone}</td>
                    </tr>
                    <tr>
                        <td>Country Code</td>
                        <td>{history.country_code}</td>
                    </tr>
                    <tr>
                        <td>Temperature</td>
                        <td>{history.temp}</td>
                    </tr>
                    <tr>
                        <td>Snow</td> 
                        <td>{history.snow}</td>
                    </tr>
                     </table>
            )   ) }
               
            </div>
            </div>
        );
    }

export default SearchButton;
