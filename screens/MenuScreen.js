import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import GridView from 'react-native-super-grid';
import { Content } from 'native-base';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import * as firebase from 'firebase';
import { firebaseConfig } from '../config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const viewImages = {
  background: require('../assets/images/logoNeiffDrawer.jpg'),
};

class MenuScreen extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image
        source={require('../assets/images/icons/drawer/menu.png')}
        style={{ height: 24, width: 24, borderRadius: 75 }}
      />
    ),
  };

  render() {
    const items = [
      {
        name: 'Filmy',
        image: require('../assets/images/menu/Movies.jpeg'),
        icon: require('../assets/images/icons/Movies.png'),
        moveTo: 'Filmy',
      },
      {
        name: 'Miejsca',
        image: require('../assets/images/menu/Venues.jpg'),
        icon: require('../assets/images/icons/Venues.png'),
        moveTo: 'Miejsca',
      },
      {
        name: 'Program',
        image: require('../assets/images/menu/Program.jpeg'),
        icon: require('../assets/images/icons/Program.png'),
        moveTo: 'Program',
      },
      {
        name: 'Bilety',
        image: require('../assets/images/menu/Tickets.jpeg'),
        icon: require('../assets/images/icons/Tickets.png'),
        moveTo: 'Bilety',
      },
      {
        name: 'Login',
        image: require('../assets/images/menu/Login.jpeg'),
        icon: require('../assets/images/icons/Login.png'),
        moveTo: 'Login',
      },
      {
        name: 'Wiadomości',
        image: require('../assets/images/menu/News.jpg'),
        icon: require('../assets/images/icons/News.png'),
        moveTo: 'Wiadomości',
      },
      {
        name: 'Partnerzy & Sponsorzy',
        image: require('../assets/images/menu/Sponsors.jpeg'),
        icon: require('../assets/images/icons/Sponsors.png'),
        moveTo: 'Partnerzy & Sponsorzy',
      },
      {
        name: 'O nas',
        image: require('../assets/images/menu/AboutUs.jpeg'),
        icon: require('../assets/images/icons/AboutUs.png'),
        moveTo: 'O nas',
      },
    ];

    return (
      <ReactNativeParallaxHeader
        headerMinHeight={50}
        headerMaxHeight={150}
        extraScrollHeight={20}
        navbarColor={'#C1CD28'}
        title={''}
        titleStyle={styles.titleStyle}
        backgroundImage={viewImages.background}
        backgroundImageScale={1.2}
        renderNavBar={this.renderNavBar}
        renderContent={() => (
          <Content
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <GridView
              itemDimension={170}
              items={items}
              spacing={3}
              style={styles.gridView}
              renderItem={item => (
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.props.navigation.navigate(`${item.moveTo}`)
                  }
                >
                  <View style={styles.itemContainer}>
                    <ImageBackground
                      source={item.image}
                      borderRadius={5}
                      style={styles.imageBackground}
                    >
                      <View style={styles.imageOverlay}>
                        <Image source={item.icon} style={styles.iconStyle} />
                        <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </Content>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 3,
    marginBottom: 3,
    flex: 1,
  },
  itemContainer: {
    height: 170,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  imageBackground: {
    flex: 1,
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(14, 5, 5, 0.6)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    marginBottom: 5,
    height: 32,
    width: 32,
  },
});

export default MenuScreen;
