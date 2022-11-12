import './Banner.css'
import { useLocation } from 'react-router-dom'

function Banner({classAboutUs, classSpanAboutUs}) {
    const { pathname } = useLocation()
    return(
        <section className="banner">
            <div className={pathname === "/home" ? "banner-img-home" : classAboutUs }>
                <span className={pathname === "/home" ? "banner-span" : classSpanAboutUs }>Chez vous, partout et ailleurs</span>
            </div>

        </section>
    )
}

export default Banner