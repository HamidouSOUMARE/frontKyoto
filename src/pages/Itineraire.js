import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px'
};

const kyotoCenter = { lat: 35.0116, lng: 135.7681 };

const restaurants = [
  { id: 1, name: "Restaurant A", position: { lat: 35.0117, lng: 135.7682 } },
  // Ajoutez d'autres restaurants
];

const logements = [
  { id: 2, name: "Logement A", position: { lat: 35.0118, lng: 135.7683 } },
  // Ajoutez d'autres logements
];

function Itineraire() {
  const [displayedMarkers, setDisplayedMarkers] = useState('restaurants');

  return (
    <div>
      <button onClick={() => setDisplayedMarkers('restaurants')}>Restaurants</button>
      <button onClick={() => setDisplayedMarkers('logements')}>Logements</button>

      <LoadScript googleMapsApiKey="AIzaSyCCCIo_77OO4Z_B84Rdugx7XmciRSE7PB4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={kyotoCenter}
          zoom={10}
        >
          {(displayedMarkers === 'restaurants' ? restaurants : logements).map(place => (
            <Marker key={place.id} position={place.position} title={place.name} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Itineraire;
