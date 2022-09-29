import {React, useState, useEffect} from 'react'

const PaintingsData = props => {

    const [search, setSearch] = useState([])
    const [paintings, setPaintings] = useState({})
    const [apiConfig, setApiConfig] = useState("")

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

    useEffect(() => {
        fetch(`${search.api_link}`)
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
    }, [search])

    return(
        <div>{props.children}</div>
    )
}
