const request = require('request')

//geocoding
const place = 'jakarta'
const mapboxGeocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=pk.eyJ1IjoiemVuaHV6YWluaSIsImEiOiJjanlzeXRobTQwMTZ3M2JwMXFsdXFlbDdsIn0.-MWjWymxxtz1_1BbMPmmRg`

request({ url: urlGeocoding, json: true }, (error, Response) => {
    if (error) { //this errorr will only show if there is no internet connection
        console.log('check your internet conection..')
    } else if (Response.body.features.length == 0) { // this error will be shown if our query search of an address, country or etc. is nowhere to be found
        console.log('cek your query to determine the area, we cannot return the information!')
    } else {
        const longitude = Response.body.features[0].center[0];
        const latitude = Response.body.features[0].center[1]
        console.log('longitude => ' + longitude)
        console.log('latitude => ' + latitude)
    }
})