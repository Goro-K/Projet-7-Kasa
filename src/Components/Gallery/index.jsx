import { useEffect, useState } from 'react'
import './Gallery.css'
import Card from '../Card/index'

const url = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"

function Gallery() {
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)
    const [locationList, setLocationList] = useState([])

    useEffect(() => {
        async function fetchGallery() {
            setDataLoading(true)
            try {
                const response = await fetch(url)
                const { locationList } = await response.json()
                setLocationList(locationList)
            } catch(error) {
                console.log(`La géneration des données de l'api ne s'est pas effectuée : ${error}`)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchGallery()
    }, [])

    if(error) {     // si la constante error est true (donc on passe par le catch)
        return <span> La géneration des données de l'api ne s'est pas effectuée </span>
    }

    return(
        <section className='gallery-card'>
            {locationList.map(location => (
                <Card 
                    key={location.id}
                    cover={location.cover}
                    title={location.title}
                />
            )
        )}
        </section>
    )
}

export default Gallery


