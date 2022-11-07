import Banner from '../../Components/Banner/index'
import Collapse from '../../Components/Collapse/index'
import Infos from '../../info.json'
import './AboutUs.css'
function aboutUs() {
    return (
        <div>
            <Banner 
            classAboutUs="banner-img-aboutus"
            classSpanAboutUs="span-aboutus"
            />
            <div className='collapse-container'>
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

export default aboutUs