import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo';

const { height, width } = Dimensions.get('window');

class SelectedNewsScreen extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
    };
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    const image = navigation.getParam('image');
    const descriptionShort = navigation.getParam('descriptionShort');
    const descriptionFull = navigation.getParam('descriptionFull');
    const time = navigation.getParam('time');

    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: image }} style={styles.imageStyle}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.85)']}
            style={{ height: height / 3.5, justifyContent: 'flex-end' }}
          >
            <View style={{ marginHorizontal: 10, marginBottom: 45 }}>
              <View style={styles.titleContainerStyle}>
                <Text style={styles.titleStyle}>{name}</Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
        <ScrollView>
          <View style={styles.headerTextStyleContainer}>
            <Text
              style={[
                styles.headerTextStyle,
                { marginTop: 10, marginLeft: 16, fontStyle: 'italic' },
              ]}
            >
              {time}
            </Text>
          </View>
          <View style={styles.headerTextStyleContainer}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                marginHorizontal: 15,
                textAlign: 'left',
                marginTop: 25,
                marginBottom: 25,
              }}
            >
              {descriptionShort}
              {'\n'}
              {descriptionFull}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
  },
  imageStyle: {
    height: height / 3.5,
    width: width,
    justifyContent: 'flex-end',
  },
  titleContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  titleStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  textContainerStyleBlack: {
    backgroundColor: '#2a2a2a',
    height: height / 3 / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemStyle: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  listItemTitleStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  ratingStyle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  headerTextStyleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTextStyle: {
    color: 'white',
    fontSize: 14,
    paddingVertical: 8,
  },
});

export default SelectedNewsScreen;
