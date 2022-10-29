import './Card.css'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'

function Card({cover,title,id}) {
    return(
            <div className="card">
                <Link to={`/Lodging/${id}`}>
                    <img src={cover} alt={title} className='card-image' />
                    <span className='card-title'>{title}</span>
                </Link>
            </div>
    )
}

Card.propTypes = {  //Props de type string => requis
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}


export default Card