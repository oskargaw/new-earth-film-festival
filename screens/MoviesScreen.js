import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import GridView from 'react-native-super-grid';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Body,
} from 'native-base';
import axios from 'axios';

class MoviesScreen extends Component {
  state = {
    movies: [],
  };

  async componentWillMount() {
    try {
      let response = await axios.get('http://neiff.org/appfile.json');
      console.log(response.data.Movies);
      this.setState({ movies: response.data.Movies });
      return;
    } catch (error) {
      alert(
        'Ups! Coś poszło nie tak, sprawdź czy masz włączone połączenie internetowe.',
      );
      console.log(error.toString());
    }
  }

  static navigationOptions = {
    header: null,
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
            <Text style={{ fontSize: 18, color: 'white' }}>Filmy</Text>
          </Body>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <GridView
            itemDimension={170}
            items={this.state.movies}
            spacing={0}
            style={styles.gridView}
            renderItem={item => (
              <TouchableWithoutFeedback
                onPress={() =>
                  this.props.navigation.navigate('Selected_Movie', {
                    name: item.name,
                    image: item.image,
                    description: item.description,
                    director: item.director,
                    projections: item.projections,
                  })
                }
              >
                <View style={styles.itemContainer}>
                  <ImageBackground
                    source={{ uri: item.image }}
                    style={styles.imageBackground}
                  >
                    <View style={styles.imageOverlay}>
                      <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
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
  itemName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageBackground: {
    flex: 1,
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(14, 5, 5, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MoviesScreen;
