import React from 'react'

function Contact() {
    return (
        <div>
           <h3>Get In Touch</h3>
            <p>We would love to hear from you.</p>
            <form>
                <label>Name:</label>
                <input type="text" name='fullname' />
                <br></br>
                <label>Email Adress:</label>
                <input type="email" name='email' />
                <br></br>
                <label>Message:</label>
                <input type="text" name='msg' />
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact