import {useParams} from 'react-router-dom'
import Lodgings from '../../logements.json'
import Error from '../Error/index'

function Lodging() {
    // get ID from url
    const params = useParams();
    const LodgingId = Lodgings.map(lodging => lodging.id)

    const lodgingPage = (Lodgings.filter((lodging) => lodging.id === params.id))

    return (
        <div>
            {LodgingId.includes(params.id) ?
                lodgingPage.map(lodging => (
                    <div>
                        <div className='slideshow'>
                        </div>
                        <div> 
                            <h2>{lodging.title}</h2>
                        </div>
                    </div>

                ))
            : <Error /> }   
        </div> 
    )    
}

export default Lodging