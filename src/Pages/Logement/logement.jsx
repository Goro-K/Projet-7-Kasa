import {useParams} from 'react-router-dom'

function Logement() {
    // 👇️ get ID from url
    const params = useParams();
      
    return <h2>userId is 👉️ {params.id}</h2>;
}

export default Logement