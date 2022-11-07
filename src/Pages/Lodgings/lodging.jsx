import {useParams} from 'react-router-dom'
import Lodgings from '../../logements.json'
import Error from '../Error/index'
import Slideshow from '../../Components/Slideshow/index'
import Collapse from '../../Components/Collapse'
import './Lodging.css'
import Vector from '../../Image/Vector.png'
import Star from '../../Image/Vector-star.png'
import StarG from '../../Image/vector-star-grey.png'
import { useState } from 'react'

function Lodging() {
    // get ID from url
    const params = useParams();
    const LodgingId = Lodgings.map(lodging => lodging.id)

    const lodgingPage = (Lodgings.filter((lodging) => lodging.id === params.id))

    let [count, setCount] = useState(0)
    const rating = ["1", "2", "3", "4", "5"]
    const r = 0

    return (
        <div>
            {LodgingId.includes(params.id) ?
                lodgingPage.map(lodging => (
                    <div key={lodging.title}>
                        <div className='slideshow'>
                            {lodging.pictures.length > 1 ? <img src={Vector} className='left-button' onClick={() => setCount(count - 1)} /> : null } 
                            {lodging.pictures.map((picture, index) => (
                                    (index === count ? <Slideshow key = {`picture-${index}`} picture={picture} /> 
                                    : count >= lodging.pictures.length ? setCount(0)  // pour crée une boucle si on arrive à la dernière photo
                                    : count < 0 ? setCount(lodging.pictures.length - 1)  // pour crée une boucle si on arrive à la dernière photo (inverse)
                                    : null)
                            ))}
                            {lodging.pictures.length > 1 ? <img src={Vector} className='right-button' onClick={() => setCount(count + 1)} /> : null}
                            {lodging.pictures.length > 1 ? <span className='slide-number'>{`${count + 1}/${lodging.pictures.length}`}</span> : null }
                        </div>
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
                                        <img src={lodging.host.picture} className='profile-picture' alt={`${lodging.host.name} - profile pic`}/>
                                    </div>
                                    <ul className='lodging-star'>
                                        {rating.map((star) => (
                                            star <= lodging.rating ?
                                            <li><img src={Star} className="star"/></li> : 
                                            star - lodging.rating ? 
                                            <li><img src={StarG}  className="star" /></li> : null
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
                                            <li key={`Equiment-${index}`}>{equipment}</li>
                                    ))}
                                    </ul>}
                                classLodging="collapse-width"
                                />
                            </div>
                        </div>
                    </div>
                ))
            : <Error />}   
        </div> 
    )    
}

/*{isActive ? i-- &&
    <Slideshow 
        key = {`picture-${i}`} 
        picture={lodging.pictures[i]}
    /> : null }
*/

export default Lodging