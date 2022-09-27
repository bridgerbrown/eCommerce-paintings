import React from "react";
import '../src/App.css'

function ItemPage(props) {
    let { paintingInfo } = props

    console.log(paintingInfo.image)

    return(
        <div className='SelectedItem'>
            <img src={paintingInfo.image} alt={paintingInfo.title} />
            <div className='Selected-Item-Details'>
                <div>
                    <h4>{paintingInfo.title}</h4>
                    <p>{paintingInfo.artist}</p>
                    <h3>$1,000,000</h3>
                    <p>Origin: {paintingInfo.origin}</p>
                    <p>Date: {paintingInfo.date}</p>
                </div>
            </div>
            <div className='Item-Btns'>
                <button className='AddCartBtn'>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemPage