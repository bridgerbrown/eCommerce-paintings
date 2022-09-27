import { useEffect } from 'react'
import {React, useState} from 'react'

function Item(props) {
    const [paintings, setPaintings] = useState({})
    const [apiConfig, setApiConfig] = useState("")


    useEffect(() => {
        fetch(`${props.link}`)
        .then(res => res.json())
        .then(data => {
            setPaintings( paintings => ({
                    id: data.data.id,
                    title: data.data.title,
                    date: data.data.date_display,
                    origin: data.data.place_of_origin,
                    artist: data.data.artist_title,
                    image_id: data.data.image_id,
                    image: ""
                })
            )
            setApiConfig(data.config.iiif_url)
        })
    }, [paintings])

    function getImageUrl() {
        let image = paintings.image_id
        let iiif = apiConfig
        let url_end = "/full/843,/0/default.jpg"
        let url = iiif + "/" + image + url_end
        return url
    }

    function sendImageUrl() {
        const imageUrl = getImageUrl()
        setPaintings(prevState => ({...prevState, image: imageUrl}))
    }

    function loading() {
        if(apiConfig){
            document.getElementById("Loaded").style.display = "none"
        } else {
            document.getElementById("Loaded").style.display = "flex"
        }
        
    }

    loading()

    function sendPaintingInfo() {
        sendImageUrl()
        props.moreInfo(paintings)
    }


    const itemElement = 
        <div className='Item'>
            <img src={getImageUrl()} alt={paintings.title} />
            <div className='Item-Details'>
                <div>
                    <h4>{paintings.title}</h4>
                    <p>{paintings.artist}</p>
                    <h3>$1,000,000</h3>
                </div>
            </div>
            <div className='Item-Btns'>
                <button className='AddCartBtn'>Add to cart</button>
                <button className='InfoBtn' onClick={sendPaintingInfo}>More Info</button>
            </div>
        </div>
    


    return(
        <div>
            {paintings.image_id && itemElement}
        </div>
    )
}

export default Item