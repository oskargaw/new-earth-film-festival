import React, { Component } from 'react';
import { FlatList, View, Linking } from 'react-native';
import { Text, ListItem, Body, Badge } from 'native-base';

class StickyListScheduleDay2 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'NEIFF STATION Sala Kryształowa', header: true },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Morskie opowieści"',
          header: false,
          time: '10:00 - 11:00',
          eventType: 'Warsztaty dla dzieci 4 - 7\nbrak miejsc',
          description:
            'Jak zbudowany jest statek? Czy dziś grasują piraci? Co to jest sygnał S.O.S? Jak nadać wiadomość Alfabetem Morse’a? Jak wygląda podwodne życie? Czy rafa koralowa jest bezpieczna? W trakcie warsztatu poprzez zabawy, rekwizyty i zdjęcia, dzieci znajdują odpowiedzi na te i inne pytania. Szczególną atrakcją zajęć jest mierzenie kostiumów nurkowych oraz test odwagi – zmierzenie się w cztery oczy z kolczastą rybą – rozdymką i zębem rekina. Prowadząca: Magda Moll-Musiał',
        },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Na plantacji kawy"',
          header: false,
          time: '11:15 - 12:15',
          eventType: 'Warsztaty dla dzieci 4 - 7\nbrak miejsc',
          description:
            'Skąd bierze się kawa? Co się z nią dzieje, zanim znajdzie się w kubeczku? Czy kawa rośnie na drzewach? Dzieci poznają krótką historię kawy oraz ciekawostki z nią związane. Mają również możliwość zobaczyć plantacje kawy i przymierzyć stroje plantatorów, dotknąć i powąchać różnych rodzajów kaw. Warsztat zawiera dużo zabaw ruchowych inspirowanych pracami na plantacji. Podopieczni w bezpieczny sposób wypalają kawę. Prowadząca: Magda Moll-Musiał',
        },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Pustynie świata"',
          header: false,
          time: '12:30 - 13:30',
          eventType: 'Warsztaty dla dzieci 4 - 7\nbrak miejsc',
          description:
            'Wyruszamy w podróż na pustynię, by zobaczyć jak bardzo tętni ona życiem. Poznajemy rozmaite formy pustyń oraz różnych pustynnych mieszkańców. Za pomocą eksperymentu sprawdzimy, jak powstają wydmy i czym jest burza piaskowa. Dzieci mogą dotknąć pustynnych roślin i porównać piaski z kilkunastu pustyń. Prowadząca: Magda Moll-Musiał',
        },
        {
          name:
            'NEIFF warsztaty TURBO TORBY - Recycling - jak zrobić użyteczne rzeczy ze starych materiałów',
          header: false,
          time: '14:00 - 16:00',
          eventType: 'Warsztaty dla dorosłych\nwstęp wolny',
          description: 'Prowadzenie: Joanna Styrylska',
        },

        { name: 'NEIFF STATION - Stary Dworzec Główny', header: true },
        {
          name:
            'NEIFF nauka - Robimy powietrze i inne akcje proekologiczne w Krakowie',
          header: false,
          time: '12:00 - 13:00',
          eventType: 'Warsztaty\nwstęp wolny',
          description:
            'Razem z akcją Tlen dla Krakowa i Zespołem Parków Krajobrazowych będziemy sadzić i rozdawać do sadzenia drzewa. Drzewa rozdamy mieszkańcom Krakowa w zamian za deklarację przesłania filmiku o tym jak każdy z nich zasadził powierzone mu drzewo. Prowadzenie: Zespół Parków Krajobrazowych - dyr.Marcin Guzik; Łukasz Gibała',
        },

        { name: 'Arteteka WBP', header: true },
        {
          name:
            'NEIFF FOTO PLUS - SONY warsztaty filmowe - dzień 1 - scenariusz',
          header: false,
          time: '12:00 - 18:00',
          eventType: 'Warsztaty\nGrupa wiekowa: 17+\nwstęp wolny',
          description:
            'Jak napisać scenariusz. Tworzenie scenariusza do krótkiego filmu o temacie ekologicznym. Współpraca z reżyserem na etapie czytania scenariusza. Prowadzenie: Andrzej Duda - scenarzysta, Jarosław Banaszek - reżyser',
        },

        { name: 'Krakowski Park Technologiczny', header: true },
        {
          name: 'NEIFF FILMATHON - 50 H',
          header: false,
          time: '17:00 - 23:59',
          eventType: 'Konkurs dla osób pełnoletnich\nwstęp płatny\nzapisy przez neiff.org',
          description:
            'Główną ideą FILMATHON jest rozwijanie nowych talentów i zachęcanie filmowców do tworzenia innowacyjnych i świeżych projektów filmowych - podczas Filmathonu druzyny stworzą film w 50 godzin, korzystając z najnowszego zaplecza technologicznego. Start konkursu.',
        },

        { name: 'Stara Zajezdnia Kraków by Desilva', header: true },
        {
          name: 'Sounds of New Earth - koncert Motion Trio i goście',
          header: false,
          time: '20:00 - 21:30',
          eventType: 'Koncert\nwstęp biletowany\nbilety na neiff.org',
          description:
            'Koncert muzyki filmowej i etnicznej w wykonaniu Motion Trio w składzie Janusz Wojtarowicz - szef muzyczny projektu, akordeon, Marcin Gałażyn - akordeon, Paweł Baranek - akordeon, Szymon Nidzworski - saksofony i instrumenty dęte drewniane, Tomas Celis Sanchez - instrumenty perkusyjne, Zbigniew Paleta - skrzypce.',
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

export default StickyListScheduleDay2;
