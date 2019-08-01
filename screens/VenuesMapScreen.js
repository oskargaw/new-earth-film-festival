import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { venues } from '../assets/texts/venues';

class VenuesMapScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerForceInset: { top: 'never', bottom: 'never' },
    headerStyle: {
      backgroundColor: '#C1CD28',
    },
    headerTitleStyle: {
      fontSize: 18,
      fontWeight: '200',
    },
  });

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.0646501,
          longitude: 19.9449799,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {venues.map(venue => (
          <MapView.Marker
            key={venue.name}
            coordinate={venue.coords}
            title={venue.name}
            description={venue.description}
          />
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VenuesMapScreen;
