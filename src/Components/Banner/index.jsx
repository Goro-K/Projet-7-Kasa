import './Banner.css'
import { useLocation } from 'react-router-dom'

function Banner() {
    const { pathname } = useLocation()
    return(
        <section className='banner'>
            {pathname === "/Home" ? 
            <div className='banner-img-home'>
                <span className='banner-span'>Chez vous, partout et ailleurs</span>
            </div> : <div className='banner-img-aboutus'></div>} 

        </section>
    )
}

export default Banner