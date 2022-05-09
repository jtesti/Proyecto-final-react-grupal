import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/context/JwtContext";
import { Button } from "primereact/button";

export const ButtonLogout = () => {
  let navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);
  const logOut = () => {
    /* localStorage.removeItem('token'); */
    localStorage.clear();
    setJwt(null);
    navigate("/login");
  };
  return (
    <Button onClick={logOut} className=" p-button-danger" aria-label="Discord">
      <i className="pi pi-sign-out px-2">
        <span className="px-3">Salir</span>
      </i>
      
      
    </Button>
  );
};
