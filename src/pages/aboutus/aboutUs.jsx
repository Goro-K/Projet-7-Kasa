import Banner from '../../components/banner/index'
import Collapse from '../../components/collapse/index'
import Infos from '../../info.json'
import './AboutUs.css'
function AboutUs() {
    return (
        <div>
            <Banner 
            classAboutUs="banner-img-aboutus"
            classSpanAboutUs="span-aboutus"
            />
            <ul className="collapse-container">
                {Infos.map(info => (
                    <li className="collapse-li" key = {info.title}>
                        <Collapse 
                        title = {info.title}
                        detail = {info.detail}
                        />
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default AboutUs