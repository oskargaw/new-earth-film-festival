import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Icon, Button, Container, Header, Left, Body } from 'native-base';

class AboutUs extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const aboutUsOptions = [
      { name: 'O festiwalu' },
      { name: 'Jury konkursu głównego NEIFF 2018' },
      { name: 'Organizatorzy festiwalu' },
      { name: 'Skład komisji selekcyjnej' },
      { name: 'Honorowy gospodarz festiwalu' },
      { name: 'Alive Today Foundation' },
      { name: 'Kontakt' },
    ];

    return (
      <ScrollView style={{ flex: 1 }}>
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
              <Text style={{ fontSize: 18, color: 'white' }}>O nas</Text>
            </Body>
          </Header>
          <List>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('About_Festival');
                }}
              >
                <ListItem
                  roundAvatar
                  key={aboutUsOptions[0].name}
                  title={aboutUsOptions[0].name}
                  containerStyle={styles.listItemStyle}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Jury');
                }}
              >
                <ListItem
                  roundAvatar
                  key={aboutUsOptions[1].name}
                  title={aboutUsOptions[1].name}
                  containerStyle={styles.listItemStyle}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Organizers');
                }}
              >
                <ListItem
                  roundAvatar
                  key={aboutUsOptions[2].name}
                  title={aboutUsOptions[2].name}
                  containerStyle={styles.listItemStyle}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SelectingCommission');
                }}
              >
                <ListItem
                  roundAvatar
                  key={aboutUsOptions[3].name}
                  title={aboutUsOptions[3].name}
                  containerStyle={styles.listItemStyle}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('AboutHonoraryHost');
                }}
              >
                <ListItem
                  roundAvatar
                  key={aboutUsOptions[4].name}
                  title={aboutUsOptions[4].name}
                  containerStyle={styles.listItemStyle}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('AliveTodayFoundation');
                }}
              >
                <ListItem
                  roundAvatar
                  key={aboutUsOptions[5].name}
                  title={aboutUsOptions[5].name}
                  containerStyle={styles.listItemStyle}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Contact_Us');
                }}
              >
                <ListItem
                  roundAvatar
                  key={aboutUsOptions[6].name}
                  title={aboutUsOptions[6].name}
                  containerStyle={styles.listItemStyle}
                />
              </TouchableOpacity>
            </View>
          </List>
        </Container>
      </ScrollView>
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

export default AboutUs;
