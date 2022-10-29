import Vector from '../../Image/Vector.png'
import './Collapse.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Collapse({title, detail}) {

    const [isActive, setIsActive] = useState(false);

    return(
        <div className='collapse-container'>
            <div className="collapse">
                <div className='collapse-head' onClick={() => setIsActive(!isActive)}>
                    <h4 className="collapse-title">{title}</h4>
                    {isActive ? <img src={Vector} className= {'collapse-vector-active'} alt="" /> 
                    : <img src={Vector} className= {'collapse-vector-inactive '}/>
                    }
                </div>
                {isActive && <div className='collapse-content'>{detail}</div>}
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired
}

export default Collapse

// 'collapse-vector-inactive collapse-vector-active'