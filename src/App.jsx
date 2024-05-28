import GoogleMapReact from 'google-map-react';
import './App.css'
import { googleAPIkey } from './assets/googleAPIkey';
import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div style={{color: 'red', fontSize: 30}}><FaMapMarkerAlt></FaMapMarkerAlt></div>;

function App() {
  const defaultProps = {
    center: {
      lat: 22.3752,
      lng: 91.8349
    },
    zoom: 12
  };

  return (
    <>
     <div style={{ height: '500px', width: '500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleAPIkey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </>
  )
}

export default App
