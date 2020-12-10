import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const CustomComponent = ({ text }) => <div><img src={require('../../static/images/marker-icon.png')} /></div>;
 
export default class GoogleMapComponent extends Component {
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
            <div className="map-content">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDTWAxQ7Z4GNC28ljvgSDBAmTiZ-eYiGog' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <CustomComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}