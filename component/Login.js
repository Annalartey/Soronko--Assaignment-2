import React, { useState} from 'react';
import LogHome from './LogHome';




function Login() {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [LoggedIn, setLoggedIn ] = useState(false);


  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordInput = (event) => {
    setPassword(event.target.value)
  };

  function handleLogin(event) {
    event.preventDefault();
    if (email === "anna.t.lartey@gmail.com" && password === "anatiola") {
      setLoggedIn(true)
    }
  }


  function handleLogout(event){
    event.preventDefault();
    setLoggedIn(false)
  }
  

  return (
    <div className="mr-20 ml-20 " > >

      { 
        LoggedIn
          ?
          <>
            <h3>WELCOME, AMBITIOUS ANNA.</h3>
            <h4>Did you know? You are exactly what the world needs to survive.</h4>
            <br></br>
            <div className='ml-96'>
            <button className="bg-white px-2 ml-96 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white" onClick={handleLogout}>Log out</button>
            </div>
            <LogHome/>
           
          </>
            :
          <>
            <form className=" bg-white shadow-md rounded px-5 py-8 pt-8 w-80 mt-10">
              <label  className="text-sm block font-bold  pb-2">EMAIL ADDRESS:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="email" name='email' value={email} onChange={handleEmailInput} />
              <br></br>
              <label className="text-sm block font-bold  pb-2 mt-8">PASSWORD:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="password" name='password' value={password} onChange={(event) => handlePasswordInput(event)} />
              <br></br>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" onClick={handleLogin}>log In</button>
              <br></br>
              <h3 className="mt-8">Havn't signed up yet?</h3>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
            </form>
            </>
      }
    </div>
  );
}

export default Login;
