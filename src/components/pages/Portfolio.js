import React from 'react';
export default function Portfolio({apps}) {
  const cardStyle = {
    width: '',
    height: 'auto'
  }
  console.log(apps);
  const appList = apps.map(app =>  <div key={app.key} className="card bg-dark text-white col-sm-12 col-md-6" style= {cardStyle}>
    
  <a href={app.url} >
<img src={require(`../../assets/images/${app.pic}.png`)} className="card-img" alt={app.title}></img>
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
