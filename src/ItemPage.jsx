import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../src/App.css'

function ItemPage(props) {
    let { paintingInfo } = props
    const mainContainer = document.getElementById("Main-Container")

    function resetShopPage() {
        mainContainer.classList.remove("Info-Page")
        mainContainer.classList.add("Shop-Page");
        props.backFromInfo()
    }

    window.onpopstate = function() {
        resetShopPage()
      }

    



    return(
        <div className='SelectedItem'>
            <img src={paintingInfo.image} alt={paintingInfo.title} />
            <div className='SelectedItemDetails'>
                <div className="SelectedItemText">
                    <h4>{paintingInfo.title}</h4>
                    <p>{paintingInfo.artist}</p>
                    <h3>$1,000,000</h3>
                    <p>Origin: {paintingInfo.origin}</p>
                    <p>Date: {paintingInfo.date}</p>
                </div>
                <button className='AddCartBtn'>Add to cart</button>

            </div>
        </div>
    )
}

export default ItemPage