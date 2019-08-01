import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Text, ListItem, Body, Badge } from 'native-base';

class StickyListScreeningsScheduleDay5 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'Hevre', header: true },
        {
          name: 'Blok filmowy L',
          header: false,
          time: '15:00',
          eventType: 'Filmy długometrażowe, 97 min',
          description:
            'Filmy wyświetlane w kolejności: Flow Of Life (54min 4 s), FOREST (42 min 45s)',
        },
        {
          name: 'Mexico Pelagico',
          header: false,
          time: '17:00',
          eventType: 'Film długometrażowy, 74 min',
          description:
            'Mexico Pelagico - Film długometrażowy, 74 min, Meksyk, pokaz specjalny',
        },
        { name: 'Kino pod baranami', header: true },
        {
          name: 'Mexico Pelagico',
          header: false,
          time: '16:00',
          eventType: 'Film długometrażowy, 74 min',
          description:
            'Mexico Pelagico - Film długometrażowy, 74 min, Meksyk, pokaz specjalny',
        },
        {
          name: 'FOREST',
          header: false,
          time: '16:00',
          eventType: 'Film długometrażowy, 43 min',
          description:
            'FOREST - Film długometrażowy, 43 min, Wielka Brytania, pokaz specjalny',
        },
        {
          name: 'SMOG WARS',
          header: false,
          time: '18:00',
          eventType: 'Film długometrażowy, 90 min',
          description:
            'SMOG WARS - Film długometrażowy, 90 min, Polska, pokaz specjalny',
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

export default StickyListScreeningsScheduleDay5;
