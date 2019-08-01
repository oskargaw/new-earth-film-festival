import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const { height, width } = Dimensions.get('window');

class AboutFestivalScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'O festiwalu',
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
        <View style={styles.container}>
          <Text style={styles.header}>
            O New Earth International Film Festival
          </Text>
          <Text style={styles.textStyle}>
            Jednym z organizowanych przez nas projektów jest pierwsza polska
            edycja festiwalu filmów o ochronie środowiska, odbywająca się w
            Krakowie pod nazwą: New Earth International Film Festival -
            Międzynarodowy Festiwal Filmowy „Nowa Ziemia”. Chcemy otworzyć
            widzom drzwi do świadomości współczesnych zagrożeń dla środowiska
            naturalnego.
          </Text>
          <Text style={styles.textStyle}>
            Musimy zacząć na różne sposoby budować świadomość zniszczeń
            wyrządzanych środowisku, a także przekazywać tę świadomość dzieciom
            i młodzieży. Dlatego postanowiliśmy, by w pierwszej edycji festiwalu
            artyści mogli podejmować dowolne tematy dotyczące zagrożeń
            ekologicznych, takich jak: deforestacja, zanieczyszczenie powietrza,
            zanieczyszczenie wody, ochrona zagrożonych gatunków zwierząt i
            roślin, zmiany klimatyczne, wyczerpywanie się zasobów naturalnych,
            marnowanie żywności, wykorzystywanie energii odnawialnych itp.
          </Text>
          <Text style={styles.textStyle}>
            Podczas festiwalu zostaną zaprezentowane filmy krótkometrażowe i
            pełnometrażowe stworzone przez twórców z kraju i zagranicy:
            {'\n'}
            krótki film fabularny
            {'\n'}
            krótki film animowany
            {'\n'}
            krótki film dokumentalny
            {'\n'}
            film dokumentalny pełnometrażowy
            {'\n'}
          </Text>
          <Text style={styles.textStyle}>
            Publiczność festiwalu nominuje filmy do nagród specjalnych. Spośród
            nominowanych produkcji Jury festiwalu wybierze najlepsze, a w ramach
            nagrody specjalnej przyzna nagrodę za najlepszą ścieżkę dźwiękową.
          </Text>
          <Text style={styles.textStyle}>
            5 dni konferencji tematycznych oraz pokazów filmów, wydarzenia
            artystyczne ( muzyka - Sounds of New Earth, sztuka - Pejzaż Smogowy,
            konkurs Filmathon). w ponad 20 lokalizacjach.
          </Text>
          <List>
            <ListItem
              title="Adres: Plac Jana Nowaka Jeziorańskiego 3, 31-154 Kraków"
              titleStyle={styles.titleStyle}
              containerStyle={styles.textContainerStyleBlack}
              titleNumberOfLines={0}
              hideChevron={true}
            />
            <ListItem
              title="Strona: www.neiff.org"
              titleStyle={styles.titleStyle}
              containerStyle={styles.textContainerStyleGreen}
              hideChevron={true}
            />
            <ListItem
              title="Email: festival@neiff.org"
              titleStyle={styles.titleStyle}
              containerStyle={styles.textContainerStyleBlack}
              hideChevron={true}
            />
          </List>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 18,
    marginBottom: 14,
  },
  textStyle: {
    fontSize: 13,
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 14,
    marginRight: 14,
  },
  textContainerStyleGreen: {
    backgroundColor: '#C1CD28',
    height: height / 3 / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainerStyleBlack: {
    backgroundColor: '#2a2a2a',
    height: height / 3 / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AboutFestivalScreen;
