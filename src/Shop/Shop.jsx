import React from "react";
import '../App.css'
import Item from "./Item";
import Navbar from "../Navbar";

function Shop() {
    return(
        <div className="Container">
            <Navbar />
            <main>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />                
            </main>
        </div>
    )
}

export default Shop