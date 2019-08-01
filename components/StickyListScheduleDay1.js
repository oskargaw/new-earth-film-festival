import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Text, ListItem, Body, Badge } from 'native-base';

class StickyListScheduleDay1 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: 'NEIFF Station Kraków',
          header: true,
        },
        {
          name: 'Konferencja prasowa',
          header: false,
          time: '12:00',
          eventType: 'Konferencja',
          description:
            'Otwarcie festiwalu i prezentacja gości, jurorów, wydarzeń. Gość specjalny Ewa Ewart',
        },

        {
          name: 'Galeria Instytutu Cervantesa',
          header: true,
        },
        {
          name: 'Pejzaż Smogowy - wernisaż wystawy',
          header: false,
          time: '16:00 - 17:00',
          eventType: 'Wernisaż\nwstęp wolny',
          description:
            'Uroczyste otwarcie wystawy malarstwa w Galerii Instytutu Cervantesa',
        },

        { name: 'Kino Kijów.Centrum', header: true },
        {
          name: 'Gala otwarcia',
          header: false,
          time: '19:00 - 21:30',
          eventType: 'Gala otwarcia\nwstęp wolny',
          description:
            'Uroczyste otwarcie festiwalu New Earth International Film Festival wraz z projekcją filmu w reż. Ewy Ewart "Klątwa obfitości".',
        },
      ],
      stickyHeaderIndices: [],
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

export default StickyListScheduleDay1;
