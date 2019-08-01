import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Expo from 'expo';
import StickyListScreeningsScheduleDay4 from '../components/StickyListScreeningsScheduleDay4';
import { Container } from 'native-base';

class ScreeningsScheduleDay4Screen extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <StickyListScreeningsScheduleDay4 />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreeningsScheduleDay4Screen;
