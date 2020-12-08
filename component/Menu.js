import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className="flex font-bold text-2xl ml-20 ">
            <Link to="/"><h3 className="mr-8 px-2 py-1 text-white font-semibold border-b-2 hover:border-blue-600 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">Home</h3></Link>
            <Link to="/about"><h3 className="mr-8 px-2 py-1 text-white font-semibold border-b-2 hover:border-blue-600 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">About</h3></Link>
            <Link to="/contact"><h3 className="mr-8 px-2 py-1 text-white font-semibold border-b-2 hover:border-blue-600 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">Contact</h3></Link> 
            <Link to="/login"><h3 className="mr-8 px-2 py-1 text-white font-semibold border-b-2 hover:border-blue-600 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">Login</h3></Link>
            <Link to="/signup"><h3 className="mr-8 px-2 py-1 text-white font-semibold border-b-2 hover:border-blue-600 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">Signup</h3></Link>
        
        </div>
    )
}