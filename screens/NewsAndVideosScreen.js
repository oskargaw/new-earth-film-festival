import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { Card } from 'react-native-elements';
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

const { width } = Dimensions.get('window');

class NewsAndVideosScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    news: [],
  };

  async componentWillMount() {
    let response = await axios.get('http://neiff.org/news.json');
    let reversedResponse = response.data.News.reverse();
    console.log(response.data.News);
    this.setState({ news: reversedResponse });
  }

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
            <Text style={{ fontSize: 18, color: 'white' }}>
              Wiadomości
            </Text>
          </Body>
        </Header>
        <ScrollView>
          <Content
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            {this.state.news.map(item => (
              <Card
                key={item.name}
                title={item.name}
                image={{ uri: item.image }}
                containerStyle={{ width: width - 6 }}
              >
                <Button
                  block
                  style={styles.buttonStyle}
                  onPress={() =>
                    this.props.navigation.navigate('SelectedNews', {
                      name: item.name,
                      image: item.image,
                      descriptionShort: item.descriptionShort,
                      descriptionFull: item.descriptionFull,
                      time: item.time,
                    })
                  }
                >
                  <Text style={styles.buttonTextStyle}>Dowiedz się więcej</Text>
                </Button>
              </Card>
            ))}
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#2a2a2a',
  },
  buttonTextStyle: {
    color: 'white',
  },
});

export default NewsAndVideosScreen;
