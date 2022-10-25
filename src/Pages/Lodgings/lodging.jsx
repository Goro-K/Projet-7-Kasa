import {useParams} from 'react-router-dom'
import Lodgings from '../../logements.json'
import Error from '../../Components/Error/index'

function Lodging() {
    // 👇️ get ID from url
    const params = useParams();
    const LodgingId = Lodgings.map(lodging => lodging.id)
    return (LodgingId.includes(params.id) ? <h2>userId is 👉️ {params.id}</h2> : <Error />)
}

export default Lodging