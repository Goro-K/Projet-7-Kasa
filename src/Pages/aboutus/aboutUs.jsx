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
            <div className="collapse-container">
                {Infos.map(info => (
                    <Collapse
                    key = {info.title} 
                    title = {info.title}
                    detail = {info.detail}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default AboutUs