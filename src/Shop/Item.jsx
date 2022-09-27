import { useEffect } from 'react'
import {React, useState} from 'react'
import { Link } from "react-router-dom"

function Item(props) {
    const [paintings, setPaintings] = useState({})
    const [apiConfig, setApiConfig] = useState("")

    useEffect(() => {
        fetch(`${props.link}`)
        .then(res => res.json())
        .then(data => {
            let image = paintings.image_id
            let iiif = apiConfig
            let url_end = "/full/843,/0/default.jpg"
            let url = iiif + "/" + image + url_end

            setPaintings( paintings => ({
                    id: data.data.id,
                    title: data.data.title,
                    date: data.data.date_display,
                    origin: data.data.place_of_origin,
                    artist: data.data.artist_title,
                    image_id: data.data.image_id,
                    image: url
                })
            )
            setApiConfig(data.config.iiif_url)
        })
    }, [paintings])

    function loading() {
        if(apiConfig){
            document.getElementById("Loaded").style.display = "none"
        } else {
            document.getElementById("Loaded").style.display = "flex"
        }
    }
    loading()

    function moreInfoPage() {
        const mainContainer = document.getElementById("Main-Container")
        mainContainer.classList.remove("Shop-Page")
        mainContainer.classList.add("Info-Page")
        props.moreInfo(paintings)
    }

    function resetShop(){
        setPaintings({})
        setApiConfig("")
        props.backFromInfo()
    }

    const itemElement = 
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

                <Link
                    to={`/shop/${paintings.id}`}
                    key={paintings.id}
                >
                    <button className='InfoBtn' onClick={moreInfoPage}>More Info</button>
                </Link>
                    
            </div>
        </div>
    


    return(
        <div>
            {paintings.image_id && itemElement}
        </div>
    )
}

export default Item