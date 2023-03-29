import { useCarContext } from "../../contexts/CarContext"
import CardLarge from "../Cards/CardLarge"
import CatalogLagre from "../Catalogs/CatalogLarge"
import LineLarge from "../Lines/LineLarge"



export default function Home () {

    const {cars} = useCarContext();


    return (

        <>
       
       < LineLarge title={'Welocme to JunkYard'} />

       <CatalogLagre cars={cars} />


        

        </>

    )
}