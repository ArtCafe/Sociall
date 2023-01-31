import React from "react";
import { Outlet, Link,  useNavigate } from "react-router-dom";
import pasta from "../../img/pasta.jpg";
import { logout } from "../../redux/features/auth/authSlice";
import {  useSelector } from 'react-redux'
import { checkIsAuth} from '../../redux/features/auth/authSlice'
import { useDispatch } from "react-redux";
import 'w3-css/w3.css';



function Navbar() {
  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)

const dispatch = useDispatch();
 

const {user} = useSelector((state) => state.auth)

const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login')
    alert.success("Logged out successfully");
  };
if(!user){
 return(
  <>
   <nav>
    <div className="w3-top">
    <div className="w3-bar w3-theme-d2 w3-left-align w3-large w3-grey">
     <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" ><i className="fa fa-bars"></i></a>
     <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
      <i className="fa fa-home w3-margin-right"></i>Home</Link>
     <Link to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >login<i className="fa fa-globe"></i></Link>
     <Link to="/register"
      className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
       register<i className="fa fa-user"></i></Link>
     
     <div className="w3-dropdown-hover w3-hide-small">
       <button className="w3-button w3-padding-large" >Notifications<i className="fa fa-bell"></i><span className="w3-badge w3-right w3-small w3-green">3</span></button>     
       <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{width:300}} >
         <a href="#" className="w3-bar-item w3-button">One new friend request</a>
         <a href="#" className="w3-bar-item w3-button">John Doe posted on your wall</a>
         <a href="#" className="w3-bar-item w3-button">Jane likes your post</a>
       </div>
     </div>
    
     <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
      
     </a>
    </div>
   </div>

<div  className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
<a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
<a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
<a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
<a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
</div>
</nav>
<Outlet />
   </>

 )
}
  return (
    <>
    <nav>
    <div className="w3-top">
    <div className="w3-bar w3-theme-d2 w3-left-align w3-large w3-grey">
     <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" ><i className="fa fa-bars"></i></a>
     <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
      <i className="fa fa-home w3-margin-right"></i>Home</Link>
     <Link to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >login<i className="fa fa-globe"></i></Link>
     <Link to="/register"
      className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
       register<i className="fa fa-user"></i></Link>
      { isAuth ? 
        <button onClick={logoutHandler}
      className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >
        esire<i className="fa fa-user"></i></button> : <h2></h2>
}
     <div className="w3-dropdown-hover w3-hide-small">
       <button className="w3-button w3-padding-large" >Notifications<i className="fa fa-bell"></i><span className="w3-badge w3-right w3-small w3-green">3</span></button>     
       <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{width:300}} >
         <a href="#" className="w3-bar-item w3-button">One new friend request</a>
         <a href="#" className="w3-bar-item w3-button">John Doe posted on your wall</a>
         <a href="#" className="w3-bar-item w3-button">Jane likes your post</a>
       </div>
     </div>
    
     <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
      
       {isAuth ? <a>{user.username}</a>: <h2></h2>}
      
    {/*<img src={pasta} className="w3-circle w3-green" alt="Avatar" style={{height:23, width:23 }}/>*/}  
     </a>
    </div>
   </div>

<div  className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
<a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
<a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
<a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
<a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
</div>
</nav>
<Outlet />
   </>
  );
}

export default Navbar;


