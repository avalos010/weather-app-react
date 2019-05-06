var lat = null;
var lon = null;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        lat = latitude;
        lon = longitude;
    }, () => alert('Please Allow Location'))
    
}


export {lat,lon};
