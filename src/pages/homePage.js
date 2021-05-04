import {VideoCard} from '../components/videoCard'
import {data} from '../dataApi/data'

export const Home = () => {
    return(<div>
        <div>
            <img className="overlay-img" 
            src="https://images.unsplash.com/photo-1586021280718-53fbadcb65a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
            style={{width: "80%"}}
            />
        </div>
        <h1>List of Videos</h1>
        {data.map((item) => (
            <VideoCard {...item} />
        ))}
    </div>)
}


