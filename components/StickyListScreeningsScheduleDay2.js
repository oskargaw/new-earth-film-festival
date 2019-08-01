import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Text, ListItem, Body, Badge } from 'native-base';

class StickyListScreeningsScheduleDay2 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'Kino Agrafka', header: true },
        {
          name: 'Blok filmowy D',
          header: false,
          time: '11:00',
          eventType: 'Filmy krótkometrażowe\n120 min',
          description:
            'Filmy wyświetlane w kolejności:\n\nRelapse (4 min 46 s), I AM FRAGILE (3 min 11 s), Let It Bee: Keeper of British Black Bees (11 min 18 s), Mr Green (3 min), My Baltic (6 min 48 s), Paradise Nest (8 min 37 s), The First Place The Last Place (7 min 58 s), We live underwater (7 min 4 s), Plastic (6 min 40 s), Development Refugees (8 min 30 s), UseLess (50 min), Beebox (2 min 13 s)',
        },
        {
          name: 'Blok filmowy C',
          header: false,
          time: '13:00',
          eventType: 'Filmy krótkometrażowe\n115 min',
          description:
            'Filmy wyświetlane w kolejności:\n\nStop or Melt! (1 min 30 s), TAVY (3 min 13 s), Give back the silent spring (3 min 16 s), Babylon what then? (4 min), Soluk (Breath) (5 min 7 s), #IneedSomeAir (7 min 31 s), Musi : The Fading River (6 min 48 s), Casita ecologica (10 min), The Bark Beetle of Šumava (10 min 54 s), To Wake - Buddhi (15 min), Free Flow (2018) (45 min), Wonderful World (1 min 46 s)',
        },
        {
          name: 'Blok filmowy B',
          header: false,
          time: '15:00',
          eventType: 'Filmy krótkometrażowe\n104 min',
          description:
            "Filmy wyświetlane w kolejności:\n\nStop killing home! (1 min)\nWake up call (1 min)\nMni Wiconi: Water is Life (2 min 44 s)\nDon't let them kill the olive trees (6 min 16 s)\nPulse (6 min 38 s), Bahía (7 min 14 s), The Rising (13 min 9 s), Desolation Follows (11 min 59 s), Trapped (13 min), Eldest among the Seven (40 min 13 s)",
        },
        {
          name: 'Blok filmowy A',
          header: false,
          time: '17:00',
          eventType: 'Filmy krótkometrażowe\n120 min',
          description:
            'Filmy wyświetlane w kolejności:\n\nManchar The Last of the Lake People (4 min 5 s), Changing Oceans (2 min 50 s), Look (3 min 30 s), Madrid Zero (8 min 20 s), I swear (9 min 56 s), Nature Needs You (9 min 11 s), PLANTAE (10 min 25 s), Desolation Follows (8 min 58 s), Into The Grey (13 min 21 s), Metamorphosis (14 min 46 s), Owsia (Darkened Water) (30 min), Where are the Stars? (3 min 29 s)',
        },
        { name: 'Kino Ars', header: true },
        {
          name: 'Agroecology in Cuba',
          header: false,
          time: '12:00',
          eventType: 'Film pełnometrażowy\n62 min',
          description:
            'Kubańska Agroekologia narodziła się w odpowiedzi na kryzys żywnościowy, oparty na wartości samowystarczalności żywnościowej, edukacji i popularnego międzypokoleniowego i multidyscyplinarnego udziału całej populacji.',
        },
        {
          name: 'Flood',
          header: false,
          time: '12:00',
          eventType: 'Film pełnometrażowy\n57 min',
          description:
            'Woda jest podstawowym, niezbędnym elementem każdej znanej formy życia.',
        },
        {
          name: 'Sea of Life',
          header: false,
          time: '14:00',
          eventType: 'Film pełnometrażowy\n86 min',
          description:
            'Dzięki współpracy ze słynnymi ekspertami w dziedzinie ochrony środowiska i zapierającej dech w piersiach kinematografii, Sea of Life zabiera widzów w niesamowitą podróż przez najbardziej oszałamiające i zagrożone ekosystemy na naszej planecie ukazując trwający postęp, aby je uratować.',
        },
        { name: 'Kino Kijów', header: true },
        {
          name: 'Smog Wars',
          header: false,
          time: '18:30',
          eventType: 'Film pełnometrażowy\n57min',
          description:
            'Po historycznie mglistej zimie na przełomie 2016/2017 roku, ojciec astmatycznego syna z Warszawy szuka odpowiedzi na pytanie, dlaczego zanieczyszczenie powietrza nadal jest poważnym problemem w Polsce - i dlaczego o rozwiązaniu tego problemu łatwiej jest mówić niż coś zrobić.',
        },
        { name: 'Kino Mikro', header: true },
        {
          name: 'Blok filmowy C',
          header: false,
          time: '11:00',
          eventType: 'Filmy krótkometrażowe\n115 min',
          description:
            'Filmy wyświetlane w kolejności:\n\nStop or Melt! (1 min 30 s), TAVY (3 min 13 s), Give back the silent spring (3 min 16 s), Babylon what then? (4 min), Soluk (Breath) (5 min 7 s), #IneedSomeAir (7 min 31 s), Musi : The Fading River (6 min 48 s), Casita ecologica (10 min), The Bark Beetle of Šumava (10 min 54 s), To Wake - Buddhi (15 min), Free Flow (2018) (45 min), Wonderful World (1 min 46 s)',
        },
        {
          name: 'Blok filmowy D',
          header: false,
          time: '13:00',
          eventType: 'Filmy krótkometrażowe\n120 min',
          description:
            'Filmy wyświetlane w kolejności:\n\nRelapse (4 min 46 s), I AM FRAGILE (3 min 11 s), Let It Bee: Keeper of British Black Bees (11 min 18 s), Mr Green (3 min), My Baltic (6 min 48 s), Paradise Nest (8 min 37 s), The First Place The Last Place (7 min 58 s), We live underwater (7 min 4 s), Plastic (6 min 40 s), Development Refugees (8 min 30 s), UseLess (50 min), Beebox (2 min 13 s)',
        },
        {
          name: 'Blok filmowy A',
          header: false,
          time: '15:00',
          eventType: 'Filmy krótkometrażowe\n120 min',
          description:
            'Filmy wyświetlane w kolejności:\n\nManchar The Last of the Lake People (4 min 5 s), Changing Oceans (2 min 50 s), Look (3 min 30 s), Madrid Zero (8 min 20 s), I swear (9 min 56 s), Nature Needs You (9 min 11 s), PLANTAE (10 min 25 s), Desolation Follows (8 min 58 s), Into The Grey (13 min 21 s), Metamorphosis (14 min 46 s), Owsia (Darkened Water) (30 min), Where are the Stars? (3 min 29 s)',
        },
        { name: 'Hevre', header: true },
        {
          name: 'In Our Hands - Seeding Change',
          header: false,
          time: '17:00',
          eventType: 'Film pełnometrażowy\n67 min',
          description:
            'Inspirująca historia kryjąca się za krwią, potem i łzami brytyjskich rolników przejmujących moment Brexit, aby przerosnąć przemysłowy system żywnościowy.',
        },
      ],
    };
  }
  componentWillMount() {
    var arr = [];
    this.state.data.map(obj => {
      if (obj.header) {
        arr.push(this.state.data.indexOf(obj));
      }
    });
    arr.push(0);
    this.setState({
      stickyHeaderIndices: arr,
    });
  }

  _renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem itemDivider style={{ backgroundColor: '#C1CD28' }}>
          <Body style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          </Body>
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body style={{ flex: 1, flexDirection: 'row' }}>
            <View>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {item.name}
              </Text>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 16 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontStyle: 'italic',
                    marginTop: 12,
                  }}
                >
                  {item.eventType}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignSelf: 'center',
                  }}
                >
                  <Badge style={{ backgroundColor: '#2a2a2a' }}>
                    <Text style={{ color: 'white' }}>{item.time}</Text>
                  </Badge>
                </View>
              </View>
              <View style={{ marginTop: 12 }}>
                <Text style={{ fontSize: 12, marginTop: 16, marginBottom: 16 }}>
                  {item.description}
                </Text>
              </View>
            </View>
          </Body>
        </ListItem>
      );
    }
  };
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={item => item.name}
        stickyHeaderIndices={this.state.stickyHeaderIndices}
      />
    );
  }
}

export default StickyListScreeningsScheduleDay2;
