import React from "react";
import { NavLink } from "react-router-dom";
import 'w3-css/w3.css';

function Acordinfo () {
  return (

    <>
<div className="w3-card w3-round">
    <div className="w3-white" >

      
        <NavLink to='/profile' className="w3-button w3-block w3-theme-l1 w3-left-align" > 
        Updateprofile
          </NavLink>
      <div id="Demo1" className="w3-hide w3-container">
        <p>Some text..</p>
      </div>

      <NavLink to='/video' className="w3-button w3-block w3-theme-l1 w3-left-align">
          My Video</NavLink>
      <div id="Demo2" className="w3-hide w3-container">
        <p>Some other text..</p>
      </div>
      <NavLink to='/foto' className="w3-button w3-block w3-theme-l1 w3-left-align ">
         My Photos
          </NavLink>
      <button  className="w3-button w3-block w3-theme-l1 w3-left-align">
        <i className="fa fa-users fa-fw w3-margin-right"></i> My </button>
     
       <button  className="w3-button w3-block w3-theme-l1 w3-left-align">
        <i className="fa fa-users fa-fw w3-margin-right"></i> My </button>

      <button  className="w3-button w3-block w3-theme-l1 w3-left-align">
        <i className="fa fa-users fa-fw w3-margin-right"></i> My</button>

      <div id="Demo3" className="w3-hide w3-container">
      <div className="w3-row-padding">

     <br/>
       <div className="w3-half">
         <img style={{width:100}} className="w3-margin-bottom"/>
       </div>

       <div className="w3-half">
         <img  style={{width:100}} className="w3-margin-bottom"/>
       </div>

       <div class="w3-half">
         <img  style={{width:100}} className="w3-margin-bottom"/>
       </div>

       <div className="w3-half">
         <img style={{width:100}} className="w3-margin-bottom"/>
       </div>

       <div class="w3-half">
         <img   style={{width:100}}  className="w3-margin-bottom"/>
       </div>

       <div className="w3-half">
         <img  style={{width:100}} className="w3-margin-bottom"/>
       </div>

     </div>
      </div>
    </div>      
    </div>   
  <br/>
 </>
  );
}

export default  Acordinfo;
