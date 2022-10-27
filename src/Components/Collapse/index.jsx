import Info from '../../info.json'
import Vector from '../../Image/Vector.png'
import './Collapse.css'
import {useState, useEffect} from 'react'


function Collapse() {
    const [dropDown, dropActive] = useState(false)
    useEffect(() => {
        
    })

    return(
        <div className='collapse-container'>
            {Info.map(info => (
            <div className="collapse">
                <h4 className="collapse-title">{info.title}</h4>
                <img src={Vector} className={'collapse-vector-inactive collapse-vector-active'} alt="" />
            </div>)
        )}
        </div>
    )
}

export default Collapse

// 'collapse-vector-inactive collapse-vector-active'