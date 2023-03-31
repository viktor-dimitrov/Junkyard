import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getOne } from "../../services/carService";
import LineLarge from "../Lines/LineLarge";
import { carList } from "../../constants/carList";
import { useCarContext } from "../../contexts/CarContext";




export default function EditCar() {
    const { onSubmitEditCar } = useCarContext();
    const { carId } = useParams();

    const [carBrand, setCarBrand] = useState({});
    const [carInputs, setCarInputs] = useState({
        brand: '',
        model: '',
        year: '',
        fuel: '',
        engine: '',
        color: '',
        imageUrl: '',
        mileage: '',
    });

    useEffect(() => {
        getOne(carId)
            .then(result => {
                setCarBrand(carList.find(c => c.brand === (result.brand)))
                setCarInputs(result)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [carId]);


    const currYear = new Date().getFullYear();

    const onChangeBrand = (e) => {
        let selectedCar = carList.find(c => c.brand === (e.target.value));
        setCarBrand(selectedCar);
        setCarInputs(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onChangeCarInputs = (e) => {
        setCarInputs(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitEditCar(carInputs._id, carInputs);
    }






    return (
        <>
            < LineLarge title={'Edit Car'} />
            <div className="create">
                <form onSubmit={onSubmit} >
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="brand">Brand</label>
                                    <select id="brand" name="brand" value={carInputs.brand} onChange={onChangeBrand} >
                                        {carList.sort((a, b) => a.brand.localeCompare(b.brand)).map(x => <option key={x.brand} defaultValue={x.brand}>{x.brand}</option>)}
                                    </select>
                                </td>

                                <td>
                                    <label htmlFor="model">Model</label>
                                    <select id="model" name="model" value={carInputs.model} onChange={onChangeCarInputs}>
                                        {carBrand.models?.map((x, i) => <option key={i} defaultValue={x}>{x}</option>)}
                                    </select>
                                </td>

                                <td>
                                    <label htmlFor="year">Year</label>
                                    <select id="year" name="year" value={carInputs.year} onChange={onChangeCarInputs}>
                                        {/* <option defaultValue={''} ></option> */}
                                        {carList.map((x, i) => <option key={i} defaultValue={currYear - i}>{currYear - i}</option>)}
                                    </select>
                                </td>

                            </tr>


                            <tr>
                                <td>
                                    <label htmlFor="engine">Engine</label>
                                    <input id="engine" name="engine" type="text" value={carInputs.engine} onChange={onChangeCarInputs} />
                                </td>

                                <td>
                                    <label htmlFor="fuel">Fuel</label>
                                    <select id="fuel" name="fuel" value={carInputs.fuel} onChange={onChangeCarInputs}>
                                        <option defaultValue=""></option>
                                        <option defaultValue="Diesel">Diesel</option>
                                        <option defaultValue="LPG">LPG</option>
                                        <option defaultValue="Gassoline">Gassoline</option>
                                    </select>
                                </td>

                                <td>
                                    <label htmlFor="color">Color</label>
                                    <input id="color" name="color" type="text" value={carInputs.color} onChange={onChangeCarInputs} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="engine">Mileage</label>
                                    <input id="mileage" name="mileage" type="number" value={carInputs.mileage} onChange={onChangeCarInputs} />
                                </td>

                                <td>
                                    <label htmlFor="image">Image</label>
                                    <input id="image" name="imageUrl" type="text" value={carInputs.imageUrl} onChange={onChangeCarInputs} />
                                </td>
                            </tr>

                            <tr >
                                <td>
                                    <p>

                                        <input type="submit" />
                                    </p>

                                </td>
                            </tr>
                        </tbody>
                    </table>

                </form>


            </div>
            < LineLarge />
        </>
    )
}