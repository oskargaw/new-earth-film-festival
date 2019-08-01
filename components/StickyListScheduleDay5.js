import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Text, ListItem, Body, Badge } from 'native-base';

class StickyListScheduleDay5 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'NEIFF STATION Sala Kryształowa', header: true },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "W krainie wulkanów"',
          header: false,
          time: '10:00 - 11:00',
          eventType: 'Warsztaty dla dzieci 4-7\nbrak miejsc',
          description:
            'Na większą część warsztatów przenosimy się daleko za ocean - do Nikaragui, która jest nazywana Krainą Wulkanów. Dzieci porównują skały wulkaniczne, mogą dotknąć wulkanicznego piasku i błota z wulkanu błotnego. Przeprowadzamy też eksperymenty z wybuchem wulkanu i wylewającą się lawą. Poprzez doświadczenie dzieci odkrywają, jak „działają” wulkany i jak niebezpieczne potrafią być. Prowadząca: Agata Witek',
        },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Ciekawe instrumenty"',
          header: false,
          time: '11:15 - 12:15',
          eventType: 'Warsztaty dla dzieci 4-7\nbrak miejsc',
          description:
            'Dzieci grają na instrumentach z całego świata i doświadczają ich brzmienia, co sprawia im radość. Maluchy przypatrują się, jak zrobione są instrumenty, wspólnie konstruujemy też parę własnych. Odkrywamy, że dźwięk można nie tylko usłyszeć, lecz również poczuć i zobaczyć. Zajęcia świetnie sprawdzają się również w grupach dzieci niepełnosprawnych, afatycznych i autystycznych.m. Prowadząca: Agata Witek',
        },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Dzieci świata"',
          header: false,
          time: '12:30 - 13:30',
          eventType: 'Warsztaty dla dzieci 4-7\nbrak miejsc',
          description:
            'Ktoś „inny” to przede wszystkim ktoś wyjątkowy. Dlatego wraz dziećmi z innych państw przemierzymy świat, poznając ich zwyczaje, sposoby witania się i warunki życia. Jak się ubierają? Co jedzą? Czym bawią się? Czy chodzą do przedszkola? Na te i wiele innych pytań dzieci znajdą odpowiedź w trakcie warsztatu. ! Prowadząca: Agata Witek',
        },

        { name: 'HEVRE', header: true },
        {
          name: 'NEIFF Warsztaty - Sugar Skullsos',
          header: false,
          time: '10:00 - 13:00',
          eventType: 'Warsztaty dla dorosłych\nwstęp wolny',
          description:
            'Wraz z Ambasadą Meksyku i Fundacja "Kultura Meksykańska"- gospodarzem tegorocznego Festiwalu - zapraszamy na warsztaty tworzenia cukrowych czaszek, charakterystycznych dla meksykańskiego Dnia Zmarłych! Prowadzenie: Delia Arriaga',
        },

        {
          name: 'ARTETEKA WBP',
          header: true,
        },
        {
          name:
            'NEIFF FOTO PLUS warsztaty filmowe - dzień 4 - udźwiękowienie i muzyka',
          header: false,
          time: '12:00 - 18:00',
          eventType: 'Warsztaty, Grupa wiekowa: 17+\nwstęp wolny',
          description:
            'Na czym polega montaż i udźwiękowienie filmu. Razem z Piotrem Brzezińskim - dźwiękowcem i Krzysztofem Filusem - kompozytorem stworzymy ścieżkę dzwiękową naszego filmu.',
        },

        {
          name: 'Centrum Kongresowe UR',
          header: true,
        },
        {
          name: 'NEIFF wykłady - klimat - Zmiany klimatu - fakty i mity',
          header: false,
          time: '12:00 - 14:00',
          eventType: 'Wykład, Grupa wiekowa: 17+\nwstęp wolny',
          description:
            'Zachodząca współcześnie zmiana klimatu jest faktem potwierdzonym licznymi pomiarami. Nauka nie ma wątpliwości, że jej przyczyną jest działalność człowieka. Mimo to w mediach wciąż usłyszeć można wiele mitów na ten temat. Podczas spotkania zmierzymy się z najpopularniejszymi z nich i zastanowimy się, jak powstają. Prowadząca: Aleksandra Kardaś',
        },
        {
          name: 'NEIFF wykłady - klimat - Zmiana klimatu dzieje się dziś',
          header: false,
          time: '13:00 - 15:00',
          eventType: 'Wykład, Grupa wiekowa: 17+\nwstęp wolny',
          description:
            'Gdzie w tym globalnym wyzwaniu jest miejsce Polski? W jaki sposób nasz kraj przyczynia się, a jak stara się zmniejszać wpływ na zmianę klimatu? Jak powinniśmy działać my? Prowadząca: Marta Palińska(Greenpeace)',
        },
        {
          name: 'NEIFF projekcja i wykład - Guardians of the Earth',
          header: false,
          time: '15:00 - 17:00',
          eventType: 'Wykład, Grupa wiekowa: 17+\nwstęp wolny',
          description:
            'GUARDIANS OF THE EARTH - reżyser. Filip Antoni Malinowski, 86min - film o  konferencji dotyczącej zmian klimatycznych, mającej na celu ocalenie naszej planety. Prowadzący: Filip Antoni Malinowski, Reo.pl',
        },
        {
          name: 'NEIFF projekcja Winganapu i wykład - Steven Taylor',
          header: false,
          time: '17:00 - 20:00',
          eventType: 'Wykład, Grupa wiekowa: 17+\nwstęp wolny',
          description:
            'Projekcja czilijskiego filmu WINGANAPU w reżyserii Alvaro Nuñez Secchi oraz wykład brytyjskiego naukowca Stevena Taylora - autora książki The Fal. Prowadzący: Steven Taylor',
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

export default StickyListScheduleDay5;
