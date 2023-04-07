import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as carService from '../services/carService';

export const CarContext = createContext();

export const CarProvider = ({
    children
}) => {

    const navigate = useNavigate();

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(cars => {
                setCars(cars);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, []);

    const onSubmitCreateCar = async (inputData) => {
        const newCar = await carService.createCar(inputData)
        setCars(cars => [...cars, newCar]);
        navigate('/catalog');

    }
    const onSubmitDeleteCar = async (carId) => {
        await carService.deleteCar(carId);
        setCars(cars => cars.filter(car => car._id !== carId))
        navigate('/catalog');
    }

    const onSubmitEditCar = async (carId, body) => {
        const result = await carService.editCar(carId, body);
        setCars(cars => cars.map(car => car._id === carId ? result : car))
        navigate(`/details/${carId}`);
    }

    const context = {
        cars,
        onSubmitCreateCar,
        onSubmitDeleteCar,
        onSubmitEditCar,
    }

    return <>
        < CarContext.Provider value={context}>
            {children}
        </CarContext.Provider>

    </>

}

export const useCarContext = () => {
    const context = useContext(CarContext)
    return context
}