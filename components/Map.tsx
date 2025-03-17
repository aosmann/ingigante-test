import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// Define the prop types
interface LocationType {
  lat: number;
  lng: number;
}

interface MapProps {
  location: LocationType;
}

const Map: React.FC<MapProps> = ({ location }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCNhsU6R9HsP40Xu9QTwvWKCeWAZdpSRfM", // replace with env variable for production
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: location?.lat || 0,
    lng: location?.lng || 0,
  };

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    map.setCenter(center);
    map.setZoom(15);
    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  if (!location?.lat || !location?.lng) {
    return <p className="text-gray-500">Location data unavailable</p>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={center}
        icon={{
          url: "https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png",
          anchor: new google.maps.Point(16, 32),
        }}
      />
    </GoogleMap>
  ) : (
    <p className="text-gray-500">Loading map...</p>
  );
};

export default React.memo(Map);
