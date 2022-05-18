import React, { useState } from 'react';

const formStyle = {
width: '50%'
}
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
  <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" value={name} onChange={handleInputChange} onBlur={handleBlur} name='name' required class="form-control" id="exampleFormControlInput1" placeholder="Name" style={formStyle}></input>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlInput2">Email address</label>
    <input type="email" value={email} required name="email" onChange={handleInputChange} onBlur={handleBlur}
    class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={formStyle} ></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" style={formStyle} name="message" value={message} onChange={handleInputChange} onBlur={handleBlur}></textarea>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
</form>
{errMessage && (
  <p style={{color: 'red'}}>{errMessage}</p>
)}
</div>
  );
}
