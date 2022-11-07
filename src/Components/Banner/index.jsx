import './Banner.css'
import { useLocation } from 'react-router-dom'

function Banner({classAboutUs, classSpanAboutUs}) {
    const { pathname } = useLocation()
    return(
        <section className='banner'>
            <div className={`banner-img-home ${classAboutUs}`}>
                <span className={`banner-span ${classSpanAboutUs}`}>Chez vous, partout et ailleurs</span>
            </div>

        </section>
    )
}

export default Banner