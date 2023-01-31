import React, {useEffect} from "react";
import Navbar from "../components/navbar/navbar";
import LeftsideHome from "../components/Home/LeftsideHome";
import Midleside from "../components/pageContainer/midleColumn/Midleside";
import RightSideHome from "../components/Home/RightsideHome";
import { useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import { checkIsAuth} from '../redux/features/auth/authSlice'
import 'w3-css/w3.css';


function Home () {
 
  const idp = "home"
  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const navigate = useNavigate()

  useEffect(() => {
   
      if (!isAuth) navigate('/login')
  }, [status, isAuth, navigate])

  
  return (

  
    <>
    <Navbar/>
    <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80}}>
    <div className="w3-row">
   <LeftsideHome />
   <Midleside idp={idp}/>
  
   </div>
   <br/>
  
    </div>
 </>
 
  );
}

export default Home;
