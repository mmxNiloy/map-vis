import { useLoadScript, Marker, GoogleMap } from '@react-google-maps/api'

const Map = ({data}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDt9IIsFpS3H9Efjgkoh87zD3onXnTDWVw'
    })

    if(!isLoaded) return <div>Loading...</div>
    return (
        <MyMap/>
    )
}

const MyMap = () => {
    return <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerStyle={{width: '70%', height: '70vh'}}></GoogleMap>
}

export default Map