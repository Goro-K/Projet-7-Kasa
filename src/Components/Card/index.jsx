import './Card.css'
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


export default Card