
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as carService from './services/carService';

import { AuthProvider } from "./contexts/AuthContext";
import { LikeProvider } from "./contexts/LikeContext";



import CatalogSmall from "./components/Catalogs/CatalogSmall";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";

import './App.css';








function App() {
  const navigate = useNavigate();

  const [cars, setCars] = useState([]);

  useEffect( () => {
      carService.getAll()
      .then(cars => {
     
          setCars(cars);
      })
       .catch(err => {
          console.log(err.message)
      })
  },[]);  
   
  const onSubmitCreateCar = async (inputData) => {
    const newCar = await carService.createCar(inputData)
    setCars( cars => [...cars, newCar]);
    navigate('/catalog');

  }


  return (
<>


< AuthProvider >   

 < Header />

    <div className="wrapper ">
    
      < Routes >
        < Route path="/" element={< Home /> } />
        < Route path="/login" element={ < Login /> } />
        < Route path="/register" element={ < Register /> } />
        < Route path="/catalog" element={ < CatalogSmall cars={cars}  />} />
        < Route path="/create" element={ < Create onSubmitCreateCar={onSubmitCreateCar} /> } />
        < Route path="/logout" element={ < Logout  /> }  />
        < Route path="/details/:carId" element={ < LikeProvider> < Details /> </LikeProvider>} />
        
        
      
      

        
        
      </Routes>
   
     
    
    </div>
    < Footer />

    </AuthProvider>


   
    </>
  );
}

export default App;
