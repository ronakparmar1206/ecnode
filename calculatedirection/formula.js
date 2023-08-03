const degreesToRadians = (degrees) => degrees * (Math.PI / 180);
const radiansToDegrees = (radians) => radians * (180 / Math.PI);
export const calculateInitialBearing = (lat1, lon1, lat2, lon2) => {
    console.log(lat1, lon1, lat2, lon2, 'lat1, lon1, lat2, lon2')
    const φ1 = degreesToRadians(lat1);
    const φ2 = degreesToRadians(lat2);
    const Δλ = degreesToRadians(lon2 - lon1);

    let initialBearing = Math.atan2(Math.sin(Δλ) * Math.cos(φ2), Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ));
    initialBearing = (radiansToDegrees(initialBearing) + 360) % 360;

    return initialBearing;
};
export const getCardinalDirection = (bearing) => {
    const cardinals = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
    const index = Math.round(bearing / 45);
    return cardinals[index];
};

// Example usage:
// const currentLat = 37.7749; // San Francisco, CA
// const currentLon = -122.4194;
// const newLat = 34.0522; // Los Angeles, CA
// const newLon = -118.2437;

// const initialBearing = calculateInitialBearing(currentLat, currentLon, newLat, newLon);
// const direction = getCardinalDirection(initialBearing);
// console.log(`The item moved in the direction of ${direction}.`);
