import { useState } from "react";

import { carList } from "../../utils/constants/carList";

import styles from './Search.module.css';


export default function Search({ searchHandler }) {


    const [carBrand, setCarBrand] = useState({});


    const [carInputs, setCarInputs] = useState({
        brand: '',
        model: '',
        year: '',
        fuel: '',
    }) 

    const currYear = new Date().getFullYear();

    const onChangeBrand = (e) => {
        let selectedCar = carList.find(c => c.brand === (e.target.value));
        setCarBrand(selectedCar);
    
            setCarInputs( state => ({ ...state, model: '' }) );
     
    }

    const onChangeCarInputs = (e) => {
        setCarInputs(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        searchHandler({...carInputs, brand: carBrand?.brand})
    }


    return (
        
            <div className={styles['search']}>
                <form onSubmit={onSubmit} >
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="brand">Brand</label>
                                    <select id="brand" name="brand" value={carBrand.brand} onChange={onChangeBrand} >
                                        {/* <option defaultValue={''} ></option> */}
                                        {carList.sort((a, b) => a.brand.localeCompare(b.brand)).map(x => <option key={x.brand} defaultValue={x.brand}>{x.brand}</option>)}
                                    </select>
                                </td>

                                <td>
                                    <label htmlFor="model">Model</label>
                                    <select id="model" name="model" value={carInputs.model} onChange={onChangeCarInputs}>
                                        <option defaultValue={''} ></option>
                                        {carBrand.models?.map((x, i) => <option key={i} defaultValue={x}>{x}</option>)}
                                    </select>
                                </td>

                                <td >
                                    <label htmlFor="year">Year</label>
                                    <select className={styles['year']}  id="year" name="year" value={carInputs.year} onChange={onChangeCarInputs}>
                                        <option defaultValue={''} ></option>
                                        {carList.map((x, i) => <option key={i} defaultValue={currYear - i}>{currYear - i}</option>)}
                                    </select>
                                </td>

                                <td>
                                    <label htmlFor="fuel">Fuel</label>
                                    <select id="fuel" name="fuel" value={carInputs.fuel} onChange={onChangeCarInputs}>
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
                               
                                    <input type="submit" value={'Search'} />
                                
                            </td>


                            </tr>


                        </tbody>
                    </table>
                </form>
            </div>

    )
}