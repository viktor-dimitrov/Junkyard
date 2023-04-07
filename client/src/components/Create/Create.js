

import { carList } from '../../utils/constants/carList';
import { useState } from 'react';
import { useCarContext } from '../../contexts/CarContext';
import LineLarge from "../Lines/LineLarge";
import styles from './Create.module.css';

export default function Create() {

    const { onSubmitCreateCar } = useCarContext();

    const [carBrand, setCarBrand] = useState({});


    const [carInputs, setCarInputs] = useState({
        model: '',
        year: '',
        fuel: '',
        engine: '',
        color: '',
        imageUrl: '',
        mileage: '',
    })

    const currYear = new Date().getFullYear();

    const onChangeBrand = (e) => {
        let selectedCar = carList.find(c => c.brand === (e.target.value));
        setCarBrand(selectedCar);
    }

    const onChangeCarInputs = (e) => {
        setCarInputs(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitCreateCar({ ...carInputs, brand: carBrand.brand });
    }

    return (
        <>
            < LineLarge title={'Post Car'} />
            <div className={styles['create']}>
                <form onSubmit={onSubmit} >
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="brand">Brand</label>
                                    <select id="brand" name="brand" value={carBrand.brand} onChange={onChangeBrand} required >
                                        {/* <option defaultValue={''} ></option> */}
                                        {carList.sort((a, b) => a.brand.localeCompare(b.brand)).map(x => <option key={x.brand} defaultValue={x.brand}>{x.brand}</option>)}
                                    </select>
                                </td>

                                <td>
                                    <label htmlFor="model">Model</label>
                                    <select id="model" name="model" value={carInputs.model} onChange={onChangeCarInputs} required >
                                        <option defaultValue={''} ></option>
                                        {carBrand.models?.map((x, i) => <option key={i} defaultValue={x}>{x}</option>)}
                                    </select>
                                </td>

                                <td>
                                    <label htmlFor="year">Year</label>
                                    <select id="year" name="year" value={carInputs.year} onChange={onChangeCarInputs} required >
                                        <option defaultValue={''} ></option>
                                        {carList.map((x, i) => <option key={i} defaultValue={currYear - i}>{currYear - i}</option>)}
                                    </select>
                                </td>

                            </tr>


                            <tr>
                                <td>
                                    <label htmlFor="engine">Engine</label>
                                    <input id="engine" name="engine" type="text" value={carInputs.engine} onChange={onChangeCarInputs} required />
                                </td>

                                <td>
                                    <label htmlFor="fuel">Fuel</label>
                                    <select id="fuel" name="fuel" value={carInputs.fuel} onChange={onChangeCarInputs} required>
                                        <option defaultValue=""></option>
                                        <option defaultValue="Gasoline">Gasoline</option>
                                        <option defaultValue="Diesel">Diesel</option>
                                        <option defaultValue="Ethanol">Ethanol</option>
                                        <option defaultValue="Electric">Electric</option>
                                        <option defaultValue="Hydrogen">Hydrogen</option>
                                        <option defaultValue="LPG">LPG</option>
                                        <option defaultValue="CNG">CNG</option>
                                        <option defaultValue="Hybrid(Electric/Gasoline)">Hybrid(Electric/Gasoline)</option>
                                        <option defaultValue="Hybrid(Electric/Diesel)">Hybrid(Electric/Diesel)</option>
                                        <option defaultValue="Others">Others</option>

                                    </select>
                                </td>

                                <td>
                                    <label htmlFor="color">Color</label>
                                    <input id="color" name="color" type="text" value={carInputs.color} onChange={onChangeCarInputs} required />
                                </td>
                            </tr>

                            <tr>

                                <td>
                                    <label htmlFor="mileage">Mileage</label>
                                    <input id="mileage" name="mileage" type="number" value={carInputs.mileage} onChange={onChangeCarInputs} required />
                                </td>

                                <td>
                                    <label htmlFor="image">Image</label>
                                    <input className={styles['image']} name="imageUrl" type="text" value={carInputs.imageUrl} onChange={onChangeCarInputs} required />
                                </td>
                            </tr>

                            <tr className={styles['submit']}  >
                                <td >
                                    <p>
                                        <input type="submit" value={'Create'} />
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