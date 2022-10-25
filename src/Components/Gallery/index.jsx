import './Gallery.css'
import Card from '../Card/index'
import Logement from '../../logements.json'

function Gallery() {
    console.log(Logement)

    return(
        <section className='gallery-card'>
            {Logement.map(location => (
                <Card 
                    key={location.id}
                    id={location.id}
                    cover={location.cover}
                    title={location.title}
                />
            )
        )}
        </section>
    )
}

export default Gallery


