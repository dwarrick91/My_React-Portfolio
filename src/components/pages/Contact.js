import React from 'react';

const formStyle = {
width: '50%'
}
export default function Contact() {
  

  
  return (
    <div>
      <h1>Contact Me</h1>
    
      <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" name='name' required class="form-control" id="exampleFormControlInput1" placeholder="Name" style={formStyle}></input>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlInput2">Email address</label>
    <input type="email" required name="email"
    class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={formStyle} ></input>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" style={formStyle}></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>
  );
}
