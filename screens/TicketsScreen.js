import React, { Component } from 'react';
import { View, Text, Linking, Dimensions } from 'react-native';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Body,
} from 'native-base';

const { height, width } = Dimensions.get('window');

class TicketsScreen extends Component {
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
            <Text style={{ fontSize: 18, color: 'white' }}>Bilety</Text>
          </Body>
        </Header>

        <Content>
          <View
            style={{
              height: height,
              width: width,
              backgroundColor: '#2a2a2a',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 24,
            }}
          >
            <Text
              style={{
                fontSize: 26,
                textAlign: 'center',
                color: 'white',
                marginHorizontal: 10,
              }}
            >
              Wszystkie bilety możliwe do nabycia na naszej stronie
              internetowej:
            </Text>
            <Text
              style={{
                fontSize: 26,
                color: 'white',
                textAlign: 'center',
                textDecorationLine: 'underline',
                marginTop: 16,
                marginHorizontal: 10,
              }}
              onPress={() => Linking.openURL('http://www.neiff.org')}
            >
              www.neiff.org
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default TicketsScreen;
