import './Card.css'
import PropTypes from 'prop-types'

function Card({cover,title}) {
    return(
        <div className="card">
            <img src={cover} alt={title} height="340" className='card-image' />
            <span className='card-title'>{title}</span>
        </div>
    )
}

Card.propTypes = {  //Props de type string => requis
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}


export default Card