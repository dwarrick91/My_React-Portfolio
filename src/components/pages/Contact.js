import React, { useState } from 'react';
import '../../styles/Contact.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errMessage, setErrMessage] = useState('')

  const handleInputChange = (event) => {
    const {target} = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue)
    }
    if (inputType === 'email') {
      setEmail(inputValue)
    }
    if (inputType === 'message') {
      setMessage(inputValue)
    }
  }

  const handleBlur = (event) => {
   const {target} = event;
    const inputType = target.name

    if (inputType === "name" && !name) {
      setErrMessage('Please provide a name!')
    }
    if (inputType === "email" && !email) {
      setErrMessage('Please provide a valid email address!')
    }
    if (inputType === "message" && !message) {
      setErrMessage('Please provide a message!')
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (!name || !message) {
      setErrMessage("Please provide your name and a message!")
    }
// set name, message and email back to empty string
    setName("")
    setMessage("")
    setEmail("")
  }

  
  return (
    <div>
      <h1>Contact Me</h1>
    
      <form>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input type="text" value={name} onChange={handleInputChange} onBlur={handleBlur} name='name' required className="form-control contactInput" id="exampleFormControlInput1" placeholder="Name" ></input>
  </div>
  
  <div className="form-group">
    <label htmlFor="exampleFormControlInput2">Email address</label>
    <input type="email" value={email} required name="email" onChange={handleInputChange} onBlur={handleBlur}
    className="form-control contactInput" id="exampleFormControlInput1" placeholder="name@example.com" ></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control contactInput" id="exampleFormControlTextarea1" rows="8" name="message" value={message} onChange={handleInputChange} onBlur={handleBlur}></textarea>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
</form>
{errMessage && (
  <p style={{color: 'red'}}>{errMessage}</p>
)}
</div>
  );
}
