import React from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
	width  : '100%',
	height : '400px'
};

const location = {
	lat : 22.8256,
	lng : 91.1014
};

/* const onLoad = (marker) => {
	console.log('marker:', marker);
}; */

function Maps () {
	const [ directionResponse, setDirectionResponse ] = useState(null);

	return (
		<LoadScript googleMapsApiKey="AIzaSyAwsZGEYTjwjbzIw7Z-xVhWYP3PLQJsPls">
			<GoogleMap mapContainerStyle={containerStyle} center={location} zoom={12} />
			{/* <Marker onLoad={onLoad} position={location} /> */}
			<DirectionsService
				options={{
					destination : 'Gulshan 1 Circle Dhaka Bangladesh',
					origin      : 'Banani 11 City Bank Dhaka Bangladesh',
					travelMode  : 'DRIVING'
				}}
				// required
				callback={(res) => {
					if (res !== null) {
						setDirectionResponse(res);
					}
				}}
			/>
			{directionResponse && (
				<DirectionsRenderer
					// required
					options={{
						directions : directionResponse
					}}
				/>
			)}
		</LoadScript>
	);
}

export default React.memo(Maps);
