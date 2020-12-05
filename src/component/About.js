import React from 'react'
import five from './five.jpg'

function About() {
    return (
        <div className="mr-40 ml-40 text-center">
            <h2 className="mt-32 mb-6 font-bold text-4xl">About My Weather App</h2>
            <hr></hr>
            <p className="text-4xl leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr></hr>
            <div>
            {<img className="h-40% w-50% object-cover object center my-20" src={five} alt="cloud"/>}
            </div>
        </div>
    )
}
export default About;