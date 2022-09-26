import { useEffect } from 'react'
import {React, useState} from 'react'

function Item(props) {
    const [paintings, setPaintings] = useState({})
    const [apiConfig, setApiConfig] = useState("")

    useEffect(() => {
        fetch(`${props.link}`)
            .then(res => res.json())
            .then(data => {
                setPaintings(data.data.map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        date: item.date_display,
                        origin: item.place_of_origin,
                        artist: item.artist_title,
                        image_id: item.image_id
                    }
                }))
                setApiConfig(data.config.iiif_url)    
        })
    }, [])


    function getImageUrl() {
        let image = paintings.image_id
        let iiif = apiConfig
        let url_end = "/full/843,/0/default.jpg"
        let url = iiif + "/" + image + url_end
        return url
    }


    return(
            <div className='Item'>
                <img src={getImageUrl()} alt={paintings.title} />
                <div className='Item-Details'>
                    <h4>{paintings.title}</h4>
                    <p>{paintings.artist}</p>
                    <div className='Item-Btns'>
                        <button className='InfoBtn'>Info</button>
                        <button className='AddCartBtn'>Add to cart</button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Item