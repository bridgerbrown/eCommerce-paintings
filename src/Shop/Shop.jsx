import {React, useState, useEffect} from "react";
import '../App.css'
import Item from "./Item";
import ItemPage from "../ItemPage";

function Shop() {
    const [search, setSearch] = useState([])
    const [infoPage, setInfoPage] = useState(false)
    const [paintingInfo, setPaintingInfo] = useState({})

    useEffect(() => {
        fetch(`https://api.artic.edu/api/v1/artworks/search?q=painting&query[term][is_public_domain]=true&page=30&limit=12`)
            .then(res => res.json())
            .then(data => {
                setSearch(data.data.map(item => {
                    return {
                        id: item.id,
                        api_link: item.api_link,
                        thumbnail: item.thumbnail
                    }
                }))
            })
    }, [] )
    

function moreInfo(value) {
    setPaintingInfo(value)
    setInfoPage(true)
    console.log(paintingInfo)
}

const paintingComponents = search.map((painting) => {
    if(painting.thumbnail) {
        return <Item 
                link={painting.api_link}
                id={painting.id}
                key={painting.id}
                moreInfo={moreInfo}
                />
    }
})

    return(
        <div className="Container">
                <div id="Loaded">
                    <h1 className="Loading">Loading...</h1>
                </div>
                
                { search && 
                    <main>{
                        !infoPage ?
                            paintingComponents :
                            <ItemPage 
                                paintingInfo={paintingInfo} 
                            />
                        }
                    </main>
                }
            
        </div>
    )
}

export default Shop