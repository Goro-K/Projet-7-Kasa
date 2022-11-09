import {useParams, Navigate} from 'react-router-dom'
import Lodgings from '../../logements.json'
import Slideshow from '../../components/slideshow/index'
import Collapse from '../../components/collapse'
import './Lodging.css'
import Star from '../../image/Vector-star.png'
import StarG from '../../image/vector-star-grey.png'

function Lodging() {
    // get ID from url
    const params = useParams();

    const lodging = (Lodgings.find((lodging) => lodging.id === params.id))

    const rating = ["1", "2", "3", "4", "5"]

    return (
        <div>
            { lodging ?
                    <div>
                        <Slideshow pictures={lodging.pictures} key= {lodging.pictures} /> 
                        <div className='lodging-body'>
                            <div className='lodging-head-flex'> 
                                <div className='lodging-1'>
                                    <h2 className='lodging-title'>{lodging.title}</h2>
                                    <p className='lodging-location'>{lodging.location}</p>
                                    <div className='lodging-tag-flex'>
                                        <ul className='lodging-tag'>{lodging.tags.map(tag =>(
                                                <li className="lodging-tag-li" key={tag}>{tag}</li>
                                        ))}</ul>
                                    </div>
                                </div>
                                <div className='lodging-2'>
                                    <div className='info-profil'>
                                        <p className='profil-name'>{lodging.host.name}</p>
                                        <img src={lodging.host.picture} className='profile-picture' 
                                             alt={`${lodging.host.name} - profile pic`} 
                                             key={`${lodging.host.name} - profile pic`}
                                        />
                                    </div>
                                    <ul className='lodging-star'>
                                        {rating.map((star, index) => (
                                            <li key={`star-${index}`}>
                                                <img src={star <= lodging.rating ? Star :  StarG} 
                                                className="star" 
                                                />
                                            </li>   
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='collapse-flex'> 
                                <Collapse
                                key="Description"
                                title="Description"
                                detail={lodging.description}
                                classLodging="collapse-width"
                                />
                                <Collapse
                                key="Equipements"
                                title="Equipements"
                                detail=
                                    {<ul>
                                    {lodging.equipments.map((equipment,index) => (
                                            <li key={`Equipment-${index}`}>{equipment}</li>
                                    ))}
                                    </ul>}
                                classLodging="collapse-width"
                                />
                            </div>
                        </div>
                    </div>
            : <Navigate replace to="/Error" />}   
        </div> 
    )    
}

export default Lodging