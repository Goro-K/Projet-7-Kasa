import './Gallery.css'
import Card from '../Card/index'
import Lodgings from '../../logements.json'

function Gallery() {
    return(
        <section className='gallery-card'>
            {Lodgings.map(lodging => (
                <Card 
                    key={lodging.id}
                    id={lodging.id}
                    cover={lodging.cover}
                    title={lodging.title}
                />
            )
        )}
        </section>
    )
}

export default Gallery


