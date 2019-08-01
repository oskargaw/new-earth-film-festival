import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Text, ListItem, Body, Badge } from 'native-base';

class StickyListScheduleDay4 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: 'Centrum Kongresowe UR',
          header: true,
        },
        {
          name:
            'NEIFF wykłady - żywność - Globalnie i lokalnie czyli opowieść o eko-sprawiedliwości i dlaczego wszyscy musimy być eko.',
          header: false,
          time: '10:00 - 12:00',
          eventType: 'Wykład\ngrupa wiekowa: 17+\nwstęp wolny',
          description:
            'Na początku grudnia zjedzie się do Katowic tysiące delegatów z całego świata aby na szczycie klimatycznym COP 24 ustalić reguły według których będzie wdrażane klimatyczne Porozumienie Paryskie, podpisane przez 195 krajów świata. Globalizacja gospodarcza, w oparciu o system oparty na stałym wzroście, coraz większej konsumpcji, powszechnym spalaniu paliw kopalnych i coraz bardziej energochłonnym i uprzemysłowionym rolnictwie,  jest zagrożeniem dla nas wszystkich. Gdzie leżą największe zagrożenia, czy wszyscy są równie dotknięci i winni? Skąd płyną dobre wieści? Co my jako jednostki możemy/musimy robić, aby wziąć udział we wspólnej walce o lepsze jutro? Prowadzenie: Ewa Sufin-Jacquemart(Fundacja Strefa Zieleni)',
        },

        { name: 'HEVRE', header: true },
        {
          name: 'NEIFF Warsztaty - Sugar Skulls',
          header: false,
          time: '10:00 - 13:00',
          eventType: 'Warsztaty\ngrupa wiekowa 18+\nwstęp wolny',
          description:
            'Wraz z Ambasadą Meksyku i Fundacją "Kultura Meksykańska"- gospodarzem tegorocznego Festiwalu - zapraszamy na warsztaty tworzenia cukrowych czaszek, charakterystycznych dla meksykańskiego Dnia Zmarłych! Prowadzenie: Delia Arriaga',
        },

        { name: ' ARTETEKA WBP', header: true },
        {
          name:
            'NEIFF FOTO PLUS warsztaty filmowe - dzień 3 - montaż filmu i korekcja barwna',
          header: false,
          time: '12:00 - 18:00',
          eventType: 'Warsztaty\ngrupa wiekowa: 17+\nwstęp wolny',
          description:
            'Montaż filmu. Na czym polega. Jak zbudować dramaturgię. Technologia - media i nośniki, obróbka barwna materiału. Prowadzenie: Jarosław Banaszek - reżyser, Tadeusz Talar - montażysta, Tomasz Poznański - kolorysta',
        },

        { name: ' Kino Kijów', header: true },
        {
          name: 'NEIFF Warsztaty filmowe z Ewą Ewart',
          header: false,
          time: '15:00 - 21:00',
          eventType: 'Warsztaty\ngrupa wiekowa: 17+\nwstęp biletowany\nbilety na neiff.org',
          description:
            'Ewa Ewart zaprezentuje swój film i wspólnie z Robertem Ciodykiem odpowiedzialnym za montaż i Szymonem Nidzworskim kompozytorem muzyki do filmu - opowie o jego realizacji, pokaże kulisy powstawania projektu',
        },

        {
          name: 'Krakowski Park Technologiczny',
          header: true,
        },
        {
          name: 'NEIFF FILMATHON',
          header: false,
          time: '00:00 - 19:00',
          eventType: 'Konkurs dla osób pełnoletnich\nwstęp płatny',
          description:
            'Główną ideą FILMATHON jest rozwijanie nowych talentów i zachęcanie filmowców do tworzenia innowacyjnych i świeżych projektów filmowych - podczas Filmathonu drużyny stworzą film w 50 godzin, korzystając z najnowszego zaplecza technologicznego. Ostatnie godziny konkursu',
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

export default StickyListScheduleDay4;
