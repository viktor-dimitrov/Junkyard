
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as carService from './services/carService';


import './App.css';

import CatalogLagre from "./components/Catalogs/CatalogLarge";
import CatalogSmall from "./components/Catalogs/CatalogSmall";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LineLarge from "./components/Lines/LineLarge";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { getUserData } from './services/util';






function App() {

 



  const [cars, setCars] = useState([]);
  const[logedUser, setLoged] = useState({
    isLoged: false,
    userInfo: {}
  });

  const userData = getUserData();

  useEffect( () => {
    setLoged(state => ({isLoged: true, userInfo: userData}))

  },[])

  useEffect( () => {
      carService.getAll()
      .then(cars => {
          setCars(cars);
      })
       .catch(err => {
          console.log(err.message)
      })
  },[]);

 



  console.log(logedUser)

  const logHandler = (userData) => {
    if (userData){
      setLoged(
        {isLoged: true,
        userInfo: userData})
    } else {
      setLoged(
        {isLoged: false,
        userInfo: ''})
    }
  }

  


  const navigate = useNavigate();
 
  const onSubmitCreateCar = async (inputData) => {
    const newCar = await carService.createCar(inputData)
    setCars( cars => [...cars, newCar]);
    navigate('/catalog');

  }



  return (
<>


    < Header logedUser={logedUser} />

    <div className="wrapper ">
    
      < Routes >
        < Route path="/" element={< Home /> } />
        < Route path="/login" element={ < Login /> } />
        < Route path="/register" element={ < Register logHandler={logHandler} navigate={navigate} /> } />
        < Route path="/catalog" element={ < CatalogSmall cars={cars}  />} />
        < Route path="/create" element={ < Create onSubmitCreateCar={onSubmitCreateCar} /> } />
        < Route path="/details/:carId" element={ < Details />} />
        < Route path="/logout" element={}  />
        
      </Routes>
   
     
    
    </div>
    < Footer />
   
    </>
  );
}

export default App;
