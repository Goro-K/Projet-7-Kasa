import './Slideshow.css'
import Vector from '../../image/Vector.png'
import { useState } from 'react'

function Slideshow(pictures) {

    let [count, setCount] = useState(0)
    const picturesArray = pictures.pictures

    return (
        <div className='slideshow'>
            {picturesArray.length > 1 ? <img src={Vector} className='left-button' onClick={() => setCount(count - 1)} /> : null } 
            
            <img src={picturesArray[count]} className="slide-img" />
            {count >= picturesArray.length ? setCount(0) :
             count < 0 ? setCount(picturesArray.length - 1) 
             : null 
            }

            {picturesArray.length > 1 ? <img src={Vector} className='right-button' onClick={() => setCount(count + 1)} /> : null}
            {picturesArray.length > 1 ? <span className='slide-number'>{`${count + 1}/${picturesArray.length}`}</span> : null }
        </div>
    )
}

export default Slideshow
