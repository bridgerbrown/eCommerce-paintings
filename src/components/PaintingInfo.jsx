import React from "react";
import '../App.css'
import { useParams } from 'react-router-dom'
import { PaintingsData } from '../PaintingsData'

function PaintingInfo(props) {
    const { id } = useParams()
    let { paintings } = props

    return(
        <div className='SelectedItem'>
            <img src={paintings.image} alt={paintings.title} />
            <div className='SelectedItemDetails'>
                <div className="SelectedItemText">
                    <h4>{paintings.title}</h4>
                    <p>{paintings.artist}</p>
                    <h3>$1,000,000</h3>
                    <p>Origin: {paintings.origin}</p>
                    <p>Date: {paintings.date}</p>
                </div>
                <button className='AddCartBtn'>Add to cart</button>

            </div>
        </div>
    )
}

export default PaintingsData(PaintingInfo)