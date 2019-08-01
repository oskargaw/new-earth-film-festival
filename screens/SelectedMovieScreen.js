import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import * as firebase from 'firebase';
import { LinearGradient } from 'expo';

const database = firebase.database();

const { height, width } = Dimensions.get('window');

let userId = null;
let ratingFromDb = null;

class SelectedMovieScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
    };
  }

  // componentWillMount() {
  //   const { navigation } = this.props;
  //   const name = navigation.getParam('name');

  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       userId = user.uid;
  //       console.log(userId);

  //       let films = database.ref(`users/${userId}/${name}`);
  //       films.on('value', function(snapshot) {
  //         snapshot.forEach(function(childSnapshot) {
  //           ratingFromDb = childSnapshot.val();
  //           // this.setState({ starCount: ratingFromDb });
  //           console.log(ratingFromDb);
  //         });
  //       });
  //     }
  //   });
  // }

  componentDidMount = () => {
    const { navigation } = this.props;
    const name = navigation.getParam('name');

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        userId = user.uid;
        console.log(userId);

        let films = database.ref(`users/${userId}/${name}`);
        films.on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            ratingFromDb = childSnapshot.val();
          });
        });
      }
    });
    {
      this.updateRating(ratingFromDb);
    }
  };

  updateRating(ratingFromDb) {
    this.setState({ starCount: ratingFromDb }, () => {
      console.log(this.state.starCount);
    });
  }

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

  writeUserData(userId, name, rating) {
    database.ref(`users/${userId}/${name}`).set({
      rating,
    });
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    const image = navigation.getParam('image');
    const description = navigation.getParam('description');
    const director = navigation.getParam('director');
    const projections = navigation.getParam('projections');
    const projectionsToString = JSON.stringify(projections, null, 4);
    const projectionsWithoutCurlyBraces = projectionsToString.substring(
      1,
      projectionsToString.length - 1,
    );

    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: image }} style={styles.imageStyle}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.85)']}
            style={{ height: height / 3.5, justifyContent: 'flex-end' }}
          >
            <View style={{ marginHorizontal: 10, marginBottom: 8 }}>
              <View style={styles.titleContainerStyle}>
                <Text style={styles.titleStyle}>{name}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginVertical: 25,
                  alignItems: 'center',
                }}
              >
                <StarRating
                  disabled={false}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={rating => {
                    this.onStarRatingPress(rating);
                    this.writeUserData(userId, name, rating);
                  }}
                  fullStarColor={'gold'}
                />
                <View style={{ marginLeft: 35 }}>
                  <Text style={{ color: 'white' }}>{`${
                    this.state.starCount
                  } / 5`}</Text>
                </View>
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
              reż. {director}
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
              }}
            >
              {description}
            </Text>
          </View>
          <View style={styles.headerTextStyleContainer}>
            <Text
              style={[
                styles.headerTextStyle,
                {
                  marginTop: 10,
                  marginLeft: 16,
                  fontSize: 18,
                },
              ]}
            >
              SEANSE:
              {'\n'}
              {projectionsWithoutCurlyBraces}
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

export default SelectedMovieScreen;
