import Banner from '../../components/banner/index'
import Lodgings from '../../logements.json'
import Card from '../../components/card/index'
import './Home.css'
function Home() {
    return (
        <div>
            <Banner />
            <div className="gallery-card">
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
