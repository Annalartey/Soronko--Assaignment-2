import React, { useState } from 'react';
import Home from './Home'

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
                        <Home />

                    </>
                    :
                    <>

                        <form >
                            <label>First Name:</label>
                            <input type="text" name='first name' value={firstname} onChange={handleFirstNameInput}/>
                            <br></br>

                            <label>Last Name:</label>
                            <input type="text" name='last name' value={lastname} onChange={handleLastNameInput}/>
                            <br></br>

                            <label>Email Adress:</label>
                            <input type="email" name='email' value={email} onChange={handleEmailInput}/>
                            <br></br>

                            <label>Password:</label>
                            <input type="password" name='password' value={password} onChange={(event) => handlePasswordInput(event) }/>
                            <br></br>

                            <label>Confirm Password:</label>
                            <input type="password" name='password' value={confirmpassword} onChange={(event) => handleConfirmPasswordInput(event)}/>
                            <br></br>

                            <label>
                                <button onClick={handleSignedUp}>Sign up</button>
                                <br></br>
                                <h3>Signed up already?</h3>
                                <button>Log In</button>
                            </label>
                        </form>
                    </>
            }
        </div>
    )
}

export default Signup;  