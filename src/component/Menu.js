import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className="flex font-bold text-2xl ml-20 ">
            <Link to="/"><h3 className="mr-8 px-2 rounded hover:bg-gray-100">Home</h3></Link>
            <Link to="/about"><h3 className="mr-8 px-2 rounded hover:bg-gray-100">About</h3></Link>
            <Link to="/contact"><h3 className="mr-8 px-2 rounded hover:bg-gray-100">Contact</h3></Link> 
            <Link to="/login"><h3 className="mr-8 px-2 rounded hover:bg-gray-100">Login</h3></Link>
            <Link to="/signup"><h3 className="mr-8 px-2 rounded hover:bg-gray-100">Signup</h3></Link>
        
        </div>
    )
}