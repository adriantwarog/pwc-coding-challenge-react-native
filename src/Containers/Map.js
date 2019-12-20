import React, {Fragment, Component} from 'react';
import { StyleSheet, } from 'react-native';
import { inject, observer } from 'mobx-react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

@inject("store")
@observer
class Map extends Component {
  render() {
    // Deconstruct the departures from the store for use in the component
    const { departures } = this.props.store
    return (
      <Fragment>
          <MapView
            // Attach the referenced component directly into the store
            ref={mapview => this.props.store.mapview = mapview}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
          >
            {departures.map((departure,index) => (
              <Marker
                key={index}
                coordinate={{ latitude: departure.latitude, longitude: departure.longitude }}
                title={departure.name}
                description={`Departs: ${(new Date(departure.departureTime).toLocaleString('en-AU', { hour12: true }))}`}
              />
            ))}
          </MapView>
      </Fragment>
    )
  }
}

// Ensures the map element fills space of its parent view
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


export default Map;
