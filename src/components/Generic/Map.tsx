import { CircularProgress } from '@mui/material'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const Map = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-id',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY ?? 'NEED_GOOGLE_API_KEY'
  })

  return (
    <>
      {isLoaded
        ? <GoogleMap
          center={{
            lat: -3.745,
            lng: -38.523
          }}
          mapContainerStyle={{
            width: '100%',
            height: '100%',
            borderRadius: '16px'
          }}
          zoom={10}
        ></GoogleMap>
        : <CircularProgress />
      }
    </>
  )
}

export default Map
