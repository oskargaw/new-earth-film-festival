import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Linking,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class AliveTodayFoundationScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Alive Today Foundation',
    headerForceInset: { top: 'never', bottom: 'never' },
    headerStyle: {
      backgroundColor: '#C1CD28',
    },
    headerTitleStyle: {
      fontSize: 18,
      fontWeight: '200',
    },
  });
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/aliveTodayFoundation.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            Fundacja ALIVE TODAY jest organizacją non-profit z siedzibą w
            Krakowie, której celem jest wspieranie odbudowy naszej zniszczonej
            planety i edukacja, która pozwoli na stworzenie równowagi między
            człowiekiem a jego środowiskiem naturalnym. Uważamy za niezbędne
            szerzenie świadomości kwestii ochrony środowiska zarówno w Polsce,
            jak i poza granicami kraju.
          </Text>
          <Text style={styles.textStyle}>
            KRS: 0000651571
            {'\n'}
            CIF:1013267300
            {'\n'}
            REGON: 366073975
            {'\n'}
            NIP: 6762518425
            {'\n'}
          </Text>
          <Text style={styles.textStyle}>
            Bank Zachodni WBK
            {'\n'}
            06109016650000000134681696
            {'\n'}
            ALIVE TODAY Foundation, Krakow, Poland.
            {'\n'}
          </Text>
          <Text style={styles.textStyle}>
            Dla transakcji z zagranicy
            {'\n'}
            SWIFT (or BIC) Number is: WBKPPLPP
          </Text>
          <Text
            style={[
              styles.textStyle,
              {
                color: 'blue',
                textAlign: 'center',
                textDecorationLine: 'underline',
              },
            ]}
            onPress={() =>
              Linking.openURL('http://www.alivetodayfoundation.org')
            }
          >
            www.alivetodayfoundation.org
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 20,
    height: height / 3,
    width: width / 1.5,
  },
  textStyle: {
    marginTop: 14,
    marginBottom: 14,
    marginLeft: 14,
    marginRight: 14,
  },
});

export default AliveTodayFoundationScreen;
