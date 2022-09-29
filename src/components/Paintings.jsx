import React from "react";
import '../App.css'
import { Outlet } from "react-router-dom"

function Paintings() {
    return(
        <div className="Container">
            <Outlet />
        </div>
    )
}

export default Paintings