import React from 'react';
import '../../styles/Portfolio.css'
export default function Portfolio({apps}) {
  const cardStyle = {
    
    height: '18rem',
    
  
  }
  const linkStyle = {
    margin: '10px auto',
    width: "90%",
   

  }
  

  const gitImage = {
    position: 'absolute',
    top: "20px",
    right: '50px',
    fontSize: '40px',
    hover: 'black'
  }
  
  console.log(apps);
  const appList = apps.map(app =>  <div key={app.key} className="card bg-dark text-white col-12 col-sm-5 col-md-5 portfolio" >
    <div style={gitImage}><a href={app.git}><i className="bi bi-github"></i></a></div>
  <a href={app.url} style={linkStyle} >
<img src={require(`../../assets/images/${app.pic}.png`)} className="card-img img-responsive " alt={app.title} style= {cardStyle}></img>
</a>
<div className="card-img">

</div>

</div> )
  return (
    <div>
      <h1>Portfolio</h1>
    <div className='row'>
      {appList}
   </div>
     
    
    
    </div>
  );
}
