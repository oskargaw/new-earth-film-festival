import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import GridView from 'react-native-super-grid';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Body,
  Right,
} from 'native-base';
import { venues } from '../assets/texts/venues';

class VenuesListScreen extends Component {
  static navigationOptions = {
    header: null,
    drawerIcon: (
      <Image
        source={require('../assets/images/icons/drawer/venues.png')}
        style={{ height: 24, width: 24, borderRadius: 75 }}
      />
    ),
  };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#C1CD28' }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Text style={{ fontSize: 18, color: 'white' }}>Miejsca</Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Venues_Map')}
            >
              <Icon name="map" />
            </Button>
          </Right>
        </Header>

        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}
        >
          <GridView
            itemDimension={170}
            items={venues}
            spacing={1.5}
            style={styles.gridView}
            renderItem={venue => (
              <View style={styles.itemContainer}>
                <ImageBackground source={venue.image} style={styles.imageStyle}>
                  <View style={styles.imageOverlay}>
                    <Text style={styles.itemName}>{venue.name}</Text>
                  </View>
                </ImageBackground>
              </View>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    height: 170,
  },
  imageStyle: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(14, 5, 5, 0.25)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default VenuesListScreen;
