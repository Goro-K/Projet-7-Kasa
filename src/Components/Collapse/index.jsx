import Vector from '../../image/Vector.png'
import './Collapse.css'
import { useState } from 'react'

function Collapse({title, detail, objectDetail, classLodging}) {

    const [isActive, setIsActive] = useState(false);

    return(
            <div className={`${classLodging} collapse`}>
                <div className='collapse-head' onClick={() => setIsActive(!isActive)} >
                    <h4 className="collapse-title ">{title}</h4>
                    {isActive ? <img src={Vector} className= {'collapse-vector-active'} alt="" /> 
                    : <img src={Vector} className= {'collapse-vector-inactive '} alt=""/>
                    }
                </div>
                {isActive && <div className='collapse-content'>{detail} {objectDetail} </div>}
            </div>
    )
}

export default Collapse

// 'collapse-vector-inactive collapse-vector-active'