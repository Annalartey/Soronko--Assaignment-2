import React from 'react'
import cloud from './cloud.png'

function Contact() {
    return (
        <div className="">
           <h3 className="text-4xl text-center text-gray-700 font-bold mt-10">Get In Touch</h3>
            <p className="text-2xl text-gray-700 px-5 text-center">We would love to hear from you.</p>
            <div className="flex w-full ml-10 mr-10">
                <form className=" bg-white shadow-md rounded px-5 py-8 pt-8 w-80 mt-10 text-xl w-1/2">
                <label className=" block font-bold  pb-2">Name:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='fullname' />
                <br></br>
                <label className=" block font-bold  pb-2">Email Adress:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="email" name='email' />
                <br></br>
                <label className=" block font-bold  pb-2">Message:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='msg' />
                <br></br>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
            <div className="w-1/2">
            <img className="animate-bounce" src={cloud} alt="moving cloud"></img>
            </div>
            </div>
        </div>
    )
}

export default Contact