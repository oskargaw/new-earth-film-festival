import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Text, ListItem, Body, Badge } from 'native-base';

class StickyListScheduleDay3 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'NEIFF STATION Sala Kryształowa', header: true },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Ale Meksyk"',
          header: false,
          time: '10:00 - 11:00',
          eventType: 'Warsztaty dla dzieci 4 - 7\nbrak miejsc',
          description:
            'Dzieci odkrywają barwny Meksyk poprzez kolorowe poncha, sombrera i tradycyjne zabawki. Śpiewamy skoczną piosenkę „La Guadelupana” i poznajemy muzykę Meksyku. Dowiadujemy się, jakie rośliny hodują Meksykanie, jak rośnie agawa i jak wiele rzeczy się z niej produkuje. Kosztujemy napoju z hibiskusa, który bardzo lubią tamtejsze dzieci. Prowadząca: Magda Moll-Musiał',
        },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Między nami Indianami"',
          header: false,
          time: '11:15 - 12:15',
          eventType: 'Warsztaty dla dzieci 4 - 7\nbrak miejsc',
          description:
            'Czy wszyscy Indianie wyglądają tak samo? Czy mają takie same zwyczaje? Kim jest szaman i jak wygląda? Jak zostaje się wodzem wioski? Dlaczego Indianie nazywają się Indianami? Na te i inne pytania dzieci znajdą odpowiedź podczas warsztatów. Dzieci poznają różne grupy Indian Ameryki Południowej i Środkowej oraz ich ciekawe zwyczaje. Zatańczą indiański taniec i przyozdobią się prawdziwym indiańskim tatuażem. Prowadząca: Magda Moll-Musiał',
        },
        {
          name:
            'NEIFF kids - warsztaty podróżnicze "Przyprawy z festiwalowej manufaktury"',
          header: false,
          time: '12:30 - 13:30',
          eventType: 'Warsztaty dla dzieci 4 - 7\nbrak miejsc',
          description:
            'Dzieci dowiadują się, jak rosną znane i mniej znane przyprawy. Mogą zobaczyć i dotknąć różne rodzaje soli, o różnych kolorach i różnym pochodzeniu. Poznają historię wybranych przypraw oraz ich właściwości. Punktem kulminacyjnym jest przygotowanie przez dzieci aromatycznej przyprawy do pierników, którą dzieci własnoręcznie młócą. Zapach na długo pozostaje w przedszkolu! Prowadząca: Magda Moll-Musiał',
        },
        {
          name:
            'NEIFF warsztaty TURBO TORBY - Recycling - jak zrobić użyteczne rzeczy ze starych materiałów',
          header: false,
          time: '14:00 - 16:00',
          eventType: 'Warsztaty dla osób dorosłych\nwstęp wolny',
          description:
            'Prowadzenie: Joanna Styrylska',
        },

        { name: 'Hevre', header: true },
        {
          name: 'NEIFF warsztaty - Sugar Skulls',
          header: false,
          time: '10:00 - 13:00',
          eventType: 'Warsztaty dla dorosłych\nwstęp wolny',
          description:
            'Wraz z Ambasadą Meksyku i Fundacją "Kultura Meksykańska"- gospodarzem tegorocznego Festiwalu - zapraszamy na warsztaty tworzenia cukrowych czaszek, charakterystycznych dla meksykańskiego Dnia Zmarłych! Prowadzenie: Delia Arriaga',
        },

        { name: 'Uniwersytet Ekonomiczny', header: true },
        {
          name:
            'NEIFF wykłady - gatunki - To bee or not to be. Katarzyna Jagiełło',
          header: false,
          time: '10:00 - 12:00',
          eventType: 'Wykład\nwstęp wolny',
          description:
            'Czy przyszłość jest możliwa bez pszczół? Na to i inne pytania odpowie Katarzyna Jagiełło z Greenpeace. Prowadząca: Katarzyna Jagiełło',
        },
        {
          name:
            'NEIFF wykłady - klimat - Międzypokoleniowa odpowiedzialność w kontekście zmian klimatycznych',
          header: false,
          time: '14:00 - 16:00',
          eventType: 'Wykład\nwstęp wolny',
          description: 'prowadząca: Hanna Schudy',
        },
        {
          name: 'NEIFF wykłady - klimat - Czy Ziemia się zagotuje?',
          header: false,
          time: '16:00 - 19:00',
          eventType: 'Wykład\nwstęp wolny',
          description:
            'Odchodzenie od węgla, a zmiany klimatyczne. Prowadzący: Radosław Gawlik(Eko Unia)',
        },

        { name: 'ARTETEKA WBP.', header: true },
        {
          name:
            'NEIFF FOTO PLUS - Cannon warsztaty filmowe - dzień 2 - plan filmowy',
          header: false,
          time: '12:00 - 18:00',
          eventType: 'Warsztaty\ngrupa wiekowa: 17+\nwstęp wolny',
          description:
            'Jak pracować na planie zdjęciowym. Jak wygląda komunikacja między reżyserem , aktorem i operatorem kamery. Prowadzenie: Jarosław Banaszek - reżyser, Piotr Trela - operator, Paweł Izdebski - aktor',
        },

        { name: 'Kino Kijów', header: true },
        {
          name: 'NEIFF dyskusja - pokaz filmu Smog Wars',
          header: false,
          time: '14:00 - 16:00',
          eventType: 'Dyskusja\nwstęp wolny',
          description:
            'Pokaz filmu Smog Wars i panel dyskusyjny z producentem filmu oraz dziennikarzem portalu ekologicznego reo.pl Prowadzenie: Jonathan L.Ramsey - producent filmu, Paweł Sito - dziennikarz reo.pl. Wydarzenie dla 30 osób.',
        },

        { name: 'Krakowski Park Technologiczny', header: true },
        {
          name: 'NEIFF FILMATHON',
          header: false,
          time: '00:00 - 23:59',
          eventType: 'Konkurs dla osób pełnoletnich\nwstęp płatny',
          description:
            'Główną ideą FILMATHON jest rozwijanie nowych talentów i zachęcanie filmowców do tworzenia innowacyjnych i świeżych projektów filmowych - podczas Filmathonu druzyny stworzą film w 50 godzin, korzystając z najnowszego zaplecza technologicznego. Druga doba trwania konkursu',
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

export default StickyListScheduleDay3;
