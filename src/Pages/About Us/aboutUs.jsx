import Banner from '../../Components/Banner/index'
import Collapse from '../../Components/Collapse/index'
import Infos from '../../info.json'

function aboutUs() {
    return (
        <div>
            <Banner />
            {Infos.map(info => (
                <Collapse 
                title = {info.title}
                detail = {info.detail}
                />
            ))
            }
        </div>
    )
}

export default aboutUs