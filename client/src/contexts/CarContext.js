import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as carService from '../services/carService';

export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {

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
      const onSubmitDeleteCar = async (carId) => {
                await carService.deleteCar(carId);
                setCars(cars => cars.filter(car => car._id !== carId))
                 navigate('/catalog');
      }


      const context = {
        cars,
        onSubmitCreateCar,
        onSubmitDeleteCar
      }




    return  <>
    < CarContext.Provider  value={context}>

    {children}
    
    </CarContext.Provider>

    </>

    
}