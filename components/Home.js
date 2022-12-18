import { useEffect, useState } from "react"
import Map from "./Map"

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [mapData, setMapData] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        const req = await fetch('api/get_data')
        const res = await req.json()

        setLoading(false)
        setMapData(res)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && <Map data={mapData}/>}
        </div>
    )
}

export default Home