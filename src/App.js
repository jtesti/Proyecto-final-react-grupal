import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
// import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { JwtContext } from "./shared/context/JwtContext";
import { useState } from "react";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import NavBar from "./shared/components/Navbar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import Consolas from "./components/Consolas/Consolas";
import MainChat from "./pages/MainChat/MainChat";
import PC from "./components/PC/PC";
import TV from "./components/TV/TV";
import Mobile from "./components/Mobile/Mobile";
import DetailedProduct from "./pages/DetailedProduct/DetailedProduct";
import { Products } from "./components/Products/Products";
import { TechNews } from "./components/TechNews/TechNews";
import DetailedNews from "./pages/DetailedNews/DetailedNews";
import RegisterProducts from "./components/RegisterProducts/RegisterProducts";
import Favoritos from "./pages/Favoritos/Favoritos";
import { AuthProvider } from "./shared/context/auth";
import { ChatProvider } from "./shared/context/chat";
import BotNavBar from "./shared/components/BotNavBar/BotNavBar";
import  Profile  from "./components/Profile/Profile";
import "./shared/components/Navbar/NavBar.scss";
function App() {
  
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <AuthProvider>
        <ChatProvider>
          <div className="App">
            <Router>
              <NavBar />
              <div className="centro">
                <Routes>
                  <Route path="/news" element={<TechNews />} />
                  <Route path="/consolas" element={<Consolas />} />
                  <Route path="/pc" element={<PC />} />
                  <Route path="/tv" element={<TV />} />
                  <Route path="/mobile" element={<Mobile />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/favourites" element={<Favoritos />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/profile/"
                    element={
                      <RequireAuth>
                        <Profile />
                      </RequireAuth>
                    }
                  />

                  <Route
                    path="/consolas/:id"
                    element={
                      <RequireAuth>
                        <DetailedProduct />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="/pc/:id"
                    element={
                      <RequireAuth>
                        <DetailedProduct />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="/tv/:id"
                    element={
                      <RequireAuth>
                        <DetailedProduct />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="/mobile/:id"
                    element={
                      <RequireAuth>
                        <DetailedProduct />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="/products/:id"
                    element={
                      <RequireAuth>
                        <DetailedProduct />
                      </RequireAuth>
                    }
                  />
                  <Route path="/news/:id" element={<DetailedNews />} />
                  <Route
                    path="/publicar"
                    element={
                      <RequireAuth>
                        <RegisterProducts />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="/chat"
                    element={
                      <RequireAuth>
                        <MainChat />
                      </RequireAuth>
                    }
                  />
                </Routes>
              </div>
              <BotNavBar />
            </Router>
          </div>
        </ChatProvider>
      </AuthProvider>
    </JwtContext.Provider>
  );
}

export default App;
