import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
};

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <
            div style = {
                { height: '100vh', width: '100%' }
            } >
            <
            <GoogleMapReact 
              bootstrapURLKeys = {{ key: ?? }}
              defaultCenter = {this.props.center }
              defaultZoom = {this.props.zoom }
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded = {({ map, maps }) => handleApiLoaded(map, maps)} 
            >
              <AnyReactComponent 
                lat = {59.955413}
                lng = {30.337844}
                text = "My Marker"
              />
            </GoogleMapReact> 
            </div>
        );
    }
}

export default SimpleMap;
