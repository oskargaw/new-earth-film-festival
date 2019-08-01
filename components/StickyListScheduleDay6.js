import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Text, ListItem, Body, Badge } from 'native-base';

class StickyListScheduleDay6 extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'Centrum wiedzy o Ekologii', header: true },
        {
          name: 'Wycieczka do parku krajobrazowego w Ciężkowicach',
          header: false,
          time: '09:00 - 20:00',
          eventType: 'Zajęcia dla zaproszonych gości.',
          description:
            'Zaproszeni Goście pojadą na wycieczkę do Parku Krajobrazowego w Ciężkowicach gdzie w ciągu najbliższych 3 lat powstanie największe Centrum Wiedzy o Ekologii w Polsce. Na miejscu wspólnie z Zarządem Gminy Ciężkowice zaplanowano atrakcje w muzeum przyrody i parku krajobrazowym.',
        },

        { name: 'Instytut Cervantesa', header: true },
        {
          name:
            'Zero Waste - Zaproś dżdżownice do swojego domu czyli wermikompostowanie dla początkujących.',
          header: false,
          time: '09:00 - 10:00',
          eventType: 'Wykład\nwstęp wolny',
          description:
            'Czy kompost śmierdzi? Czym jest czarne złoto? Czy dżdżownice rozpełzną się po mieszkaniu? Co wolno, a czego nie wolno wrzucać do kompostownika? Jakie problemy pojawiają się najczęściej i jak im zaradzić? Na te inne pytanie znajdziecie odpowiedź w trakcie wykładu o kompostowaniu dla początkujących, który poprowadzi biolożka, Agnieszka Sadowska-Konczal. Wykład poprowadzi Agnieszka Sadowska - Konczal – autorka bloga www.ekologika.edu.pl, współzałożycielka Polskiego Stowarzyszenia Zero Waste, koordynatorka akcji #zwłasnymkubkiem.Absolwentka biologii, doktorantka, edukatorka, trenerka.Pasjonatka ekologicznego stylu życia, miłośniczka kotów i górskich wędrówek.',
        },
        {
          name:
            'Zero Waste - Jak nie marnować żywności: czyli jak polepszyć życie swoje, znajomych, a przy okazji i planety.',
          header: false,
          time: '10:00 - 11:00',
          eventType: 'Wykład\nwstęp wolny',
          description:
            'W dzisiejszych czasach nie zdajemy lub nie chcemy zdawać sobie sprawy jak wyrzucając i marnując jedzenie skazujemy planetę na powolną śmierć. Dzięki wskazówkom, którymi możemy kierować się w naszym życiu zobaczycie, że "mniej odpadów żywnościowych to lepsze życie". Wykład poprowadzi: Przemysław Jędrzejewski.Absolwent Szkoły Gastronomicznej, członek Polskiego Stowarzyszenia Zero Waste.Pasjonat gotowania oraz Informatyki z 20 letnim doświadczeniem.Od zawsze chętny do pomocy innym.Od ponad 10 lat wegetarianin, dzięki czemu zaczął myśleć nad tym jak traktujemy naszą planetę, co również było zaczątkiem myślenia w stylu Zero Waste.Prywatnie mąż, tata.Miłośnik przede wszystkim kotów oraz wszystkich zwierząt.',
        },
        {
          name:
            'Zero Waste dla początkujących - jak żyć prościej, oszczędniej i bardziej ekologicznie.',
          header: false,
          time: '10:00 - 11:00',
          eventType: 'Wykład\nwstęp wolny',
          description:
            'Podczas prelekcji uczestnicy dowiedzą się jak rozpocząć swoją przygodę z zero waste i wyrzucić śmieci ze swojego życia. Będą to pierwsze kroki, które może zrobić każdy kto chce ograniczyć ilość wytwarzanych przez siebie odpadów z korzyścią dla swojego zdrowia, portfela oraz środowiska naturalnego. Wykłady i warsztaty poprowadzi Sylwia Sikorska, socjolog, obecnie pełnoetatowa mama Mai i Tymona, która od kilku lat stara się wprowadzać minimalizm oraz zasady Zero Waste w swoim domu.Współzałożycielka Polskiego Stowarzyszenia Zero Waste i autorka kanału "W drodze do Zero Waste" na YT(www.youtube.com / wdrodzedozerowaste)',
        },
        {
          name:
            'Zero Waste - Pieluchowanie wielorazowe - rozsądny wybór czy kupa problemów?',
          header: false,
          time: '11:00 - 12:00',
          eventType: 'Wykład\nwstęp wolny',
          description:
            'W czasie spotkania porozmawiamy o zaletach i wadach pieluchowania wielorazowego. Będzie można dowiedzieć się jak wyglądają współczesne systemy pieluch wielorazowych dla dzieci. Pokażemy jak ich używać, jak o nie dbać i jak się do nich przekonać :)',
        },
        {
          name:
            'KLĄTWA OBFITOŚCI - pokaz filmu w wersji hiszpańskiej - spotkanie z Ewą Ewart',
          header: false,
          time: '16:00 - 18:00',
          eventType: 'Pokaz filmu\nwstęp wolny',
          description:
            'Film Ewy Ewart po hiszpańsku i dla hiszpańskiej widowni zgromadzonej w Instytucie Cervantesa',
        },

        { name: 'NEIFF STATION Sala Kryształowa', header: true },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Ale Meksyk"',
          header: false,
          time: '10:00 - 11:00',
          eventType: 'Warsztaty dla dzieci 4-7\nwstęp wolny',
          description:
            'Dzieci odkrywają barwny Meksyk poprzez kolorowe poncha, sombrera i tradycyjne zabawki. Śpiewamy skoczną piosenkę „La Guadelupana” i poznajemy muzykę Meksyku. Dowiadujemy się, jakie rośliny hodują Meksykanie, jak rośnie agawa i jak wiele rzeczy się z niej produkuje. Kosztujemy napoju z hibiskusa, który bardzo lubią tamtejsze dzieci. Prowadzący: Marcin Musiał',
        },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Na plantacji kawy"',
          header: false,
          time: '11:15 - 12:15',
          eventType: 'Warsztaty dla dzieci 4-7\nwstęp wolny',
          description:
            'Skąd bierze się kawa? Co się z nią dzieje, zanim znajdzie się w kubeczku? Czy kawa rośnie na drzewach? Dzieci poznają krótką historię kawy oraz ciekawostki z nią związane. Mają również możliwość zobaczyć plantacje kawy i przymierzyć stroje plantatorów, dotknąć i powąchać różnych rodzajów kaw. Warsztat zawiera dużo zabaw ruchowych inspirowanych pracami na plantacji. Podopieczni w bezpieczny sposób wypalają kawę. Prowadzący: Marcin Musiał',
        },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Ciekawe instrumenty"',
          header: false,
          time: '12:30 - 13:30',
          eventType: 'Warsztaty dla dzieci 4-7\nwstęp wolny',
          description:
            'Dzieci grają na instrumentach z całego świata i doświadczają ich brzmienia, co sprawia im radość. Maluchy przypatrują się, jak zrobione są instrumenty, wspólnie konstruujemy też parę własnych. Odkrywamy, że dźwięk można nie tylko usłyszeć, lecz również poczuć i zobaczyć. Zajęcia świetnie sprawdzają się również w grupach dzieci niepełnosprawnych, afatycznych i autystycznych. Prowadzący: Marcin Musiał',
        },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "Ale Meksyk" ',
          header: false,
          time: '13:45 - 14:45',
          eventType: 'Warsztaty dla dzieci 4-7\nwstęp wolny',
          description:
            'Dzieci odkrywają barwny Meksyk poprzez kolorowe poncha, sombrera i tradycyjne zabawki. Śpiewamy skoczną piosenkę „La Guadelupana” i poznajemy muzykę Meksyku. Dowiadujemy się, jakie rośliny hodują Meksykanie, jak rośnie agawa i jak wiele rzeczy się z niej produkuje. Kosztujemy napoju z hibiskusa, który bardzo lubią tamtejsze dzieci. Prowadzący: Marcin Musiał',
        },
        {
          name:
            'NEIFF kids - warsztaty podróżnicze "Przyprawy z festiwalowej manufaktury"',
          header: false,
          time: '15:00 - 16:00',
          eventType: 'Warsztaty dla dzieci 4-7\nwstęp wolny',
          description:
            'Dzieci dowiadują się, jak rosną znane i mniej znane przyprawy. Mogą zobaczyć i dotknąć różne rodzaje soli, o różnych kolorach i różnym pochodzeniu. Poznają historię wybranych przypraw oraz ich właściwości. Punktem kulminacyjnym jest przygotowanie przez dzieci aromatycznej przyprawy do pierników, którą dzieci własnoręcznie młócą. Zapach na długo pozostaje w przedszkolu! Prowadzący: Marcin Musiał',
        },
        {
          name: 'NEIFF kids - warsztaty podróżnicze "W krainie wulkanów"',
          header: false,
          time: '16:15 - 17:00',
          eventType: 'Warsztaty dla dzieci 4-7\nwstęp wolny',
          description:
            'Na większą część warsztatów przenosimy się daleko za ocean - do Nikaragui, która jest nazywana Krainą Wulkanów. Dzieci porównują skały wulkaniczne, mogą dotknąć wulkanicznego piasku i błota z wulkanu błotnego. Przeprowadzamy też eksperymenty z wybuchem wulkanu i wylewającą się lawą. Poprzez doświadczenie dzieci odkrywają, jak „działają” wulkany i jak niebezpieczne potrafią być.',
        },

        { name: 'HEVRE', header: true },
        {
          name: 'NEIFF Warsztaty - Ojos de Dios',
          header: false,
          time: '10:00 - 13:00',
          eventType: 'Warsztaty dla dorosłych\nwstęp wolny',
          description:
            'Wraz z Ambasadą Meksyku i Fundacja "Kultura Meksykańska" - gospodarzem tegorocznego Festiwalu - zapraszamy na warsztaty tworzenia indiańskich amuletów "Oko Boga" - "Ojos de Dios".',
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

export default StickyListScheduleDay6;
