import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/index";
import { LogOut } from 'lucide-react';
import "../../styles/logout.css"

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()); 
      console.log("Sesión cerrada exitosamente");
      window.location.href = "/"; 
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
         >
     <LogOut className="iconLogout" size={24} />
     <span className="icon-Logout">Logout</span>
    </button>
    
 
  );
};

export default Logout;
