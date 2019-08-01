import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Body,
} from 'native-base';

import { partnersAndSponsors } from '../assets/texts/partnersAndSponsors';

const { width } = Dimensions.get('window');

class PartnersAndSponsorsScreen extends Component {
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
              Partnerzy i Sponsorzy
            </Text>
          </Body>
        </Header>

        <Content contentContainerStyle={styles.containerStyle}>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textStyle}>Gospodarz honorowy festiwalu</Text>
              {partnersAndSponsors.honoraryHost.map(host => (
                <Image
                  key={host.thumbnail}
                  source={host.thumbnail}
                  style={styles.imageStyle}
                />
              ))}
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textStyle}>Patroni honorowi projektu</Text>
              {partnersAndSponsors.honoraryPatrons.map(patron => (
                <Image
                  key={patron.thumbnail}
                  source={patron.thumbnail}
                  style={styles.imageStyle}
                />
              ))}
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textStyle}>Partnerzy festiwalu</Text>
              {partnersAndSponsors.festivalPartners.map(partner => (
                <Image
                  key={partner.thumbnail}
                  source={partner.thumbnail}
                  style={styles.imageStyle}
                />
              ))}
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textStyle}>Sponsorzy nagród</Text>
              {partnersAndSponsors.prizeSponsors.map(sponsor => (
                <Image
                  key={sponsor.thumbnail}
                  source={sponsor.thumbnail}
                  style={styles.imageStyle}
                />
              ))}
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textStyle}>Partner medialny projektu</Text>
              <Image
                key={partnersAndSponsors.projectMediaPartner.thumbnail}
                source={partnersAndSponsors.projectMediaPartner.thumbnail}
                style={styles.imageStyle}
              />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textStyle}>Partnerzy medialni festiwalu</Text>
              {partnersAndSponsors.festivalMediaPartners.map(partner => (
                <Image
                  key={partner.thumbnail}
                  source={partner.thumbnail}
                  style={styles.imageStyle}
                />
              ))}
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textStyle}>Partnerzy pokazów filmowych</Text>
              {partnersAndSponsors.filmScreeningsPartners.map(partner => (
                <Image
                  key={partner.thumbnail}
                  source={partner.thumbnail}
                  style={styles.imageStyle}
                />
              ))}
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    width: width,
    backgroundColor: '#2a2a2a',
    opacity: 0.6,
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 30,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  imageStyle: {
    marginBottom: 60,
  },
});

export default PartnersAndSponsorsScreen;
