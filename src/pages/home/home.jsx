import Banner from '../../components/banner/index'
import Lodgings from '../../logements.json'
import Card from '../../components/card/index'
import './Home.css'
function Home() {
    return (
        <div>
            <Banner />
            <ul className="gallery-card">
                {Lodgings.map(lodging => (
                    <li className = "lodging-list" key = {lodging.id}>
                        <Card 
                            id={lodging.id}
                            cover={lodging.cover}
                            title={lodging.title}
                        />
                    </li>)
                )}
            </ul>
        </div>

    )
}

export default Home;
