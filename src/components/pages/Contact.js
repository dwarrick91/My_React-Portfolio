import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
    
      <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"></input>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Email</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
  
</div>
<div class="mb-3">
  <label for="formGroupExampleInput3" class="form-label">Message</label>
  <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Another input placeholder"></input>
  
</div>
 <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  
    </div>
  );
}
