import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className="flex font-bold text-2xl ml-20 ">
            <Link to="/"><h3 className="mr-8 px-2 hover:bg-gray-200">Home</h3></Link>
            <Link to="/about"><h3 className="mr-8 px-2 hover:bg-gray-200">About</h3></Link>
            <Link to="/contact"><h3 className="mr-8 px-2 hover:bg-gray-200">Contact</h3></Link> 
            <Link to="/login"><h3 className="mr-8 px-2 hover:bg-gray-200">Login</h3></Link>
            <Link to="/signup"><h3 className="mr-8 px-2 hover:bg-gray-200">Signup</h3></Link>
        
        </div>
    )
}