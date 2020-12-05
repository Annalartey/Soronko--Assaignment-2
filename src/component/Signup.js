import React, { useState } from 'react';
import LogHome from './LogHome'

function Signup() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('')
  const [SignedUp, setSignedUp ] = useState(false);



    const handleFirstNameInput = (event) => {
        setFirstName(event.target.value)
      }

    const handleLastNameInput = (event) => {
        setLastName(event.target.value)
      };

      const handleEmailInput = (event) => {
        setEmail(event.target.value)
      };

      const handlePasswordInput = (event) => {
        setPassword(event.target.value)
      };

      const handleConfirmPasswordInput = (event) => {
        setConfirmPassword(event.target.value)
      };



    function handleSignedUp(event) {
        event.preventDefault();
        if (email === "anna.t.lartey@gmail.com" && password === "anatiola" && confirmpassword ==="anatiola") {
          setSignedUp(true)
        }
      }

      function handleLogout(event){
        event.preventDefault();
        setSignedUp(false)
      }



    return (
        <div >

            {
                SignedUp
                    ?
                    <>
                        <br></br>
                        <h3>WELCOME, AMBITIOUS ANNA.</h3>
                        <h4>Did you know? You are exactly what the world need to survive.</h4>
                        <br></br>
                        <button className="" onClick={handleLogout}>Logout</button>
                        <LogHome />

                    </>
                    :
                    <>

                        <form className=" bg-white shadow-md rounded px-64 py-8 pt-8 w-full mt-10">
                            <label className="text-sm block font-bold  pb-2">First Name:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='first name' value={firstname} onChange={handleFirstNameInput}/>
                            <br></br>

                            <label className="text-sm block font-bold  pb-2 mt-8">Last Name:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='last name' value={lastname} onChange={handleLastNameInput}/>
                            <br></br>

                            <label className="text-sm block font-bold  pb-2 mt-8">Email Adress:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="email" name='email' value={email} onChange={handleEmailInput}/>
                            <br></br>

                            <label className="text-sm block font-bold  pb-2 mt-8">Password:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="password" name='password' value={password} onChange={(event) => handlePasswordInput(event) }/>
                            <br></br>

                            <label className="text-sm block font-bold  pb-2 mt-8">Confirm Password:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="password" name='password' value={confirmpassword} onChange={(event) => handleConfirmPasswordInput(event)}/>
                            <br></br>

                            <label>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" onClick={handleSignedUp}>Sign up</button>
                                <br></br>
                                <h3 className="mt-8 text-xl">Already have an account?</h3>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline mt-4">Log In</button>
                            </label>
                        </form>
                    </>
            }
        </div>
    )
}

export default Signup;  