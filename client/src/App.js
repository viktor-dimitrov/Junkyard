
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { LikeProvider } from "./contexts/LikeContext";
import { CarProvider } from "./contexts/CarContext";

import { RouteGuard } from "./components/common/Guards/RouteGuard";
import CatalogSmall from "./components/Catalogs/CatalogSmall";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import EditCar from "./components/EditCar/EditCar";
import Profile from "./components/Profile/Profile";
import FavoriteList from "./components/FavoriteList/FavoriteList";


import './App.css';





function App() {

  return (
    <>
      < AuthProvider >
        < CarProvider >
          < LikeProvider>

            < Header />
            <div className="wrapper ">
              < Routes >

                < Route path="/login" element={< Login />} />
                < Route path="/register" element={< Register />} />
                < Route path="/" element={< Home />} />
                < Route path="/catalog" element={< CatalogSmall />} />
                < Route path="/details/:carId" element={< Details />} />

                < Route element={< RouteGuard />} >
                  < Route path="/create" element={< Create />} />
                  < Route path="/details/:carId/edit" element={< EditCar />} />
                  < Route path="/profile/:userId/*" element={< Profile />} />
                  < Route path="/favorite/:userId" element={< FavoriteList />} />
                </Route>

              </Routes>
            </div>
            < Footer />
          </LikeProvider>
        </CarProvider>
      </AuthProvider>
    </>
  );
}

export default App;
