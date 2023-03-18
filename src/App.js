
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as carService from './services/carService';
import * as userService from './services/userService';


import './App.css';


import CatalogSmall from "./components/Catalogs/CatalogSmall";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { getUserData } from './services/util';







function App() {

  const [cars, setCars] = useState([]);
  const[logedUser, setLoged] = useState({
    isLoged: false,
    userInfo: ''
  });

  useEffect( () => {
      carService.getAll()
      .then(cars => {
     
          setCars(cars);
      })
       .catch(err => {
          console.log(err.message)
      })
  },[]);

  const navigate = useNavigate();


  const logHandler = () => {
    const userData = getUserData();

    if (userData){
      setLoged( state => (
        {isLoged: true,
        userInfo: userData}));
        navigate('/catalog')
    } else {
      setLoged(state => (
        {isLoged: false,
        userInfo: ''}))
    }
  }

  const onLogout = async (e) => {
    e.preventDefault();
    await userService.logout();
    logHandler();
    navigate('/');

  }

  


 
 
  const onSubmitCreateCar = async (inputData) => {
    const newCar = await carService.createCar(inputData)
    setCars( cars => [...cars, newCar]);
    navigate('/catalog');

  }



  return (
<>


    < Header logedUser={logedUser} onLogout={onLogout} />

    <div className="wrapper ">
    
      < Routes >
        < Route path="/" element={< Home /> } />
        < Route path="/login" element={ < Login logHandler={logHandler} /> } />
        < Route path="/register" element={ < Register logHandler={logHandler}/> } />
        < Route path="/catalog" element={ < CatalogSmall cars={cars}  />} />
        < Route path="/create" element={ < Create onSubmitCreateCar={onSubmitCreateCar} /> } />
        < Route path="/details/:carId" element={ < Details />} />
        {/* < Route path="/logout" element={ < Logout logHandler={logHandler} /> }  /> */}
        
      </Routes>
   
     
    
    </div>
    < Footer />
   
    </>
  );
}

export default App;
