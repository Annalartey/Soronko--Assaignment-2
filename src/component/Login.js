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
    <div  >

      { 
        LoggedIn
          ?
          <>
            <h3>WELCOME, AMBITIOUS ANNA.</h3>
            <h4>Did you know? You are exactly what the world needs to survive.</h4>
            <br></br>
            <div>
            <button onClick={handleLogout}>Log out</button>
            </div>
            <LogHome/>
           
          </>
            :
          <>
            <form >
              <label >EMAIL ADDRESS:</label>
              <input type="email" name='email' onChange={handleEmailInput} />
              <br></br>
              <label >PASSWORD:</label>
              <input type="password" name='password' onChange={(event) => handlePasswordInput(event)} />
              <br></br>
              <button onClick={handleLogin}>log In</button>
              <br></br>
              <h3 >Havn't signed up yet?</h3>
              <button className="button">Sign Up</button>
            </form>
            </>
      }
    </div>
  );
}

export default Login;
