import React from 'react'
import five from './five.jpg'

function About() {
    return (
        <div>
            <div className="mr-40 ml-40 text-center">

                <h2 className="mt-32 mb-10 font-bold text-4xl text-gray-700">About My Weather App</h2>
                <hr></hr>


                <div className="w-full h-96  rounded-3xl transform shadow-lg bg-gradient-to-br from-blue-100 to-light-blue-300 -rotate-2 sm:-rotate-2">
            <div className="px-4 py-4 h-96 text-gray-500 -mb-20 transform rotate-2">
                <p className="text-3xl leading-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div> 
            <div className="bg-gray-100 w-full h-96 -mt-96 rounded-3xl"></div>
        </div>
            
            
            <div>
                {<img className="h-40% w-50% object-cover object center my-20" src={five} alt="cloud"/>}
            </div>     


           
        </div>
    )
}
export default About;