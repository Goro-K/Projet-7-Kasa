import './Slideshow.css'
function Slideshow(picture) {
    return (
        <div className='slide'>
            <img src={picture.picture} alt="" className="slide-img"/>
        </div>
    )
}

export default Slideshow
