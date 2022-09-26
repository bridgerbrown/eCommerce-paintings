import {React, useState, useEffect} from "react";
import '../App.css'
import Item from "./Item";

function Shop() {
    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(`https://api.artic.edu/api/v1/artworks/search?q=painting&query[term][is_public_domain]=true&page=1&limit=12`)
            .then(res => res.json())
            .then(data => {
                setSearch(data.data.map(item => {
                    return {
                        id: item.id,
                        api_link: item.api_link
                    }
                }))
            })
    }, [] )

const paintingComponents = search.map((painting) => {
    return <Item 
            link={painting.api_link}
            id={painting.id}
            key={painting.id}
            />
})

    return(
        <div className="Container">
            <main>
                {paintingComponents}
            </main>
        </div>
    )
}

export default Shop