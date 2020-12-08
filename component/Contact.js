import React from 'react'

function Contact() {
    return (
        <div className=" border-2 mx-40 py-10">
           <h3 className="text-4xl text-center text-gray-700 font-bold ">Get In Touch</h3>
            <p className="text-2xl text-gray-700 px-5 text-center">We would love to hear from you.</p>
                <div className="flex w-full">
                <form className=" bg-white shadow-md rounded px-5 py-8 pt-8 w-96 mt-10 text-xl ml-10 w-1/2">
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
            <div className="w-1/2 ml-20 mt-10">
            <h1 className="text-xl text-gray-800">Location:</h1>
            <p>Adenta Estate</p>
            <h1 className="text-xl text-gray-800">Phone Number:</h1>
            <p>0544929176</p>
            <h1 className="text-xl text-gray-800">Email Address:</h1>
            <p>anna.t.lartey@gmail.com</p>
            </div>
            </div>
        </div>
    )
}

export default Contact