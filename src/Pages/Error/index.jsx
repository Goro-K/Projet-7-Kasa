import { Link} from 'react-router-dom'
import './Error.css'

function Error() {
    return(
        <div className="error-page">
            <h1 className="error-title">404</h1>
            <div className="error-message">
                <p>Oups ! La page que vous demandez n'existe pas.</p>
            </div>
            <div className="error-link">
                <Link to="/" className="nav-link">Retournez sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default Error