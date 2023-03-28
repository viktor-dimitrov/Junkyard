
import { Routes, Route } from "react-router-dom";


import { AuthProvider } from "./contexts/AuthContext";
import { LikeProvider } from "./contexts/LikeContext";
import { CarProvider } from "./contexts/CarContext";


import CatalogSmall from "./components/Catalogs/CatalogSmall";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import EditCar from "./components/EditCar/EditCar";

import './App.css';










function App() {





  return (
    <>


      < AuthProvider >

        < CarProvider >

          < Header />

          <div className="wrapper ">

            < Routes >

              < Route path="/login" element={< Login />} />
              < Route path="/register" element={< Register />} />
              < Route path="/logout" element={< Logout />} />

              < Route path="/" element={< Home />} />
              < Route path="/catalog" element={< CatalogSmall />} />
              < Route path="/create" element={< Create />} />

              < Route path="/details/:carId" element={< LikeProvider> < Details /> </LikeProvider>} />
              < Route path="/details/:carId/edit" element={< EditCar />} />



            </Routes>



          </div>
          < Footer />

        </CarProvider>

      </AuthProvider>



    </>
  );
}

export default App;
