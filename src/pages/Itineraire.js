// import React, { useState, useEffect } from 'react';
// import { getPlacesData } from '../components';
// import MapsComponent from '../components/MapsComponent';

// function App() {
//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const placesData = await getPlacesData();
//       setLocations(placesData);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Lieux d'intérêt</h1>
//       <MapsComponent locations={locations} />
//     </div>
//   );
// }

// export default App;
