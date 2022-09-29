import React from 'react'
import {PaintingsData} from "../PaintingsData"
import {useNavigate} from 'react-router-dom'


function ListPaintings(props) {
    const { paintings } = props
    const navigate = useNavigate()

    function toPaintingInfoPage() {
        navigate(`/paintings/${paintings.id}`)
    }

    const paintingComponents = paintings.map((painting) => {
        if(painting.thumbnail) {
            return (
                <div className='Item'>
                    <img src={paintings.image} alt={paintings.title} />
                    <div className='Item-Details'>
                        <div>
                            <h4>{paintings.title}</h4>
                            <p>{paintings.artist}</p>
                            <h3>$1,000,000</h3>
                        </div>
                    </div>
                    <div className='Item-Btns'>
                        <button className='AddCartBtn'>Add to cart</button>
                            <button className='InfoBtn' onClick={toPaintingInfoPage}>More Info</button>
                        
                    </div>
                </div>
            )
        }
    })


    return(
        <div>
            {paintings.image_id && paintingComponents}
        </div>
    )
}

export default PaintingsData(ListPaintings)