import Banner from '../../Components/Banner/index'
import Lodgings from '../../logements.json'
import Card from '../../Components/Card/index'
import './Home.css'
function Home() {
    return (
        <div>
            <Banner />
            <div className='gallery-card'>
            {Lodgings.map(lodging => (
                <Card 
                    key={lodging.id}
                    id={lodging.id}
                    cover={lodging.cover}
                    title={lodging.title}
                />)
            )}
            </div>
        </div>

    )
}

export default Home;
