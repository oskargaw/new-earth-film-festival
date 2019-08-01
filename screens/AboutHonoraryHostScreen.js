import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const { height, width } = Dimensions.get('window');

class AboutHonoraryHostScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'O honorowym gospodarzu',
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
          <Text style={styles.header}>Języki Meksyku</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/languagesOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            Zdecydowana większość Meksykanów mówi dziś po hiszpańsku. Języka
            hiszpańskiego używa 92,7 procent populacji Meksyku. Około 6 procent
            ludności mówi po hiszpańsku, a także w językach rdzennych, jak np.
            majskim, nahuatl oraz innych językach regionalnych. Rodzime
            meksykańskie słowa upowszechniły się w innych językach, w tym m.in.
            w języku angielskim. Na przykład słowa „czekolada”, „kojot”, i
            „awokado” pochodzą z języka nahuatl.
          </Text>
          <Text style={styles.header}>Religie Meksyku</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/religionsOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            Około 82% Meksykanów uważa się za Katolików, mimo że wielu z nich
            włączyło do swojej wiary elementy latynoamerykańskie lub azteckie.
            Wśród wyznań chrześcijańskich są tu również prezbiterianie,
            świadkowie Jehowy, adwentyści dnia siódmego, mormoni, luteranie,
            metodyści, baptyści i anglikanie. Istnieją także niewielkie
            społeczności muzułmanów, żydów i buddystów.
          </Text>
          <Text style={styles.header}>Wartości mieszkańców Meksyku</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/valuesOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            Rodzina jest jednym z najważniejszych elementów społeczeństwa
            meksykańskiego. Szczególnie poza miastami rodziny są zwykle duże, a
            Meksykanie są bardzo świadomi swoich obowiązków wobec najbliższych
            członków rodziny i dalszej rodziny, np. kuzynostwa, a nawet bliskich
            przyjaciół. Organizowanie przyjęć w domach stanowi ważną część życia
            w Meksyku, a gościnność – element wartości i obyczajów kraju.
            Komórki rodzinne są zwykle duże, z tradycyjną rolą kobiet i znacznym
            zaangażowaniem członków z zewnątrz, którzy pomagają sobie nawzajem w
            codziennym życiu. Związki między członkami rodziny są silne.
            Rodziców darzy się dużym szacunkiem – podobnie jak rodzinę w ogóle –
            dlatego zwłaszcza u dorastającej młodzieży zdarzają się konflikty
            między indywidualnymi pragnieniami i potrzebami a pragnieniami i
            potrzebami rodziny. Wielką uroczystością w rodzinie meksykańskiej
            jest tzw. Quinceañera. Są to obchody 15. urodzin młodej damy.
            Symbolizują podróż dziewczyny od dzieciństwa do kobiecości. Na
            uroczystości pojawia się wyszukana sukienka dla druhny, jedzenie,
            tańce, przyjaciele i rodziny. Przed imprezą często odbywa się msza w
            kościele dziewczyny. Podczas uroczystości towarzyszą jej druhny
            (damas) i szambelanowie (chambelánes).
          </Text>
          <Text style={styles.header}>Kuchnia meksykańska</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/foodOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            Jedzenie w Meksyku różni się znacznie w zależności od regionu,
            ponieważ każde miasto ma własne tradycje kulinarne. Tortille i inne
            potrawy z kukurydzy powszechne są wszędzie, podobnie jak pieprz,
            pomidory i fasola. Podstawą jest również ryż. Wiele produktów
            spożywczych pochodzących z Meksyku jest popularnych na całym
            świecie, w tym m.in. awokado, czekolada i dynie. Meksyk słynie ze
            swojej tequili, wytwarzanej z agawy kaktusowej, która doskonale
            nadaje się do klimatu środkowego Meksyku. Napoje gazowane są w
            Meksyku bardzo popularne, ponieważ kraj ten ma dobrze rozwinięty
            przemysł produkcji napojów.
          </Text>
          <Text style={styles.header}>Sztuka Meksyku</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/artOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            Garncarstwo, haftowana odzież bawełniana, wełniane szale oraz odzież
            wierzchnia z motywami wielokątów, a także kolorowe kosze i dywaniki
            to tylko niektóre z typowych przedmiotów związanych z meksykańską
            sztuką ludową. Ponadtysiącletnie tradycje trwają nadal w
            złotnictwie, mozaikach, tkaninach, garncarstwie i wyplataniu koszy.
            Kraj kojarzony jest ze stylem muzyki ludowej tzw. mariachi, który
            powstał w południowej części stanu Jalisco w XIX wieku. Grupy
            muzyków grają na skrzypcach, gitarach, basach, vihuelach (gitarach
            pięciostrunowych) oraz trąbkach, w zdobionych srebrnymi ćwiekami
            strojach charro i wyszukanych czapkach. „La Cucaracha” to znany
            standard muzyczny grup mariachi. Dwoje najsłynniejszych
            meksykańskich artystów to Frida Kahlo i Diego Rivera. Ich obrazy
            przepełnione są żywymi kolorami i obrazami życia w Meksyku. Rivera
            był pionierem Muralizmu, ruchu, w którym wystawna sztuka naścienna
            miała służyć edukacji ludzi.
          </Text>
          <Text style={styles.header}>Odzież meksykańska</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/clothesOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            W miastach Meksyku moda podlega wpływom trendów międzynarodowych,
            dlatego typowe miejskie stroje meksykańskie są podobne do noszonych
            w Europie i Stanach Zjednoczonych. Tradycyjna meksykańska odzież to
            m.in. sukienki bez rękawów, zwane huipil. Pierwotnie te bawełniane
            sukienki były bardzo proste, z kolorowymi dodatkami. Jednak dziś
            tradycyjne meksykańskie ubiory damskie zazwyczaj mają liczne ozdobne
            hafty, często zawierające obrazy i wzory, którym przypisuje się
            znaczenia symboliczne. Wyróżniającym się artykułem tradycyjnej
            odzieży męskiej jest duża narzuta kocowa zwana sarape. Podstawą
            garderoby są również wysokie buty. Strój charro, który początkowo
            nosili meksykańscy kowboje, kojarzy się przede wszystkim z muzykami
            mariachi. Garnitur ten jest również dopuszczalnym zamiennikiem
            smokingu podczas oficjalnych imprez w Meksyku. Strój charro zawiera
            sombrero, czyli kapelusz z szerokim rondem, który daje dużo cienia.
          </Text>
          <Text style={styles.header}>Święta i uroczystości</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/holidaysOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            Święto Matki Bożej z Guadalupe, obchodzone 12 grudnia, jest wielkim
            meksykańskim świętem. Najświętsza Maria Panna, która jest patronką
            kraju, objawiła się Indianinowi w pierwszych latach panowania
            hiszpańskiego. Zaraz po tym święcie następuje Posadas,
            dziewięciodniowa uroczystość, podczas której odtwarza się podróż
            Maryi i Józefa do Betlejem w poszukiwaniu miejsca na nocleg. Rodziny
            chodzą od drzwi do drzwi, niosąc świece i śpiewając, prosząc o
            schronienie, dopóki gospodarze nie otworzą, w którym to momencie
            zaczyna się świętowanie. Dzień zmarłych (Día de los Muertos),
            obchodzony 2 listopada, jest dniem pamięci i czci dla zmarłych. W
            wielu społecznościach na terenie całego Meksyku obchodzi się również
            karnawał, który symbolizuje okres przed Wielkim Postem. Dzień
            Niepodległości, upamiętniający odseparowanie kraju od Hiszpanii w
            roku 1810, obchodzi się 16 września. Cinco de Mayo, czyli rocznicę
            meksykańskiego zwycięstwa militarnego nad Francuzami w roku 1862,
            bardziej powszechnie obchodzi się w Stanach Zjednoczonych (jako
            promocję piwa) niż w Meksyku.
          </Text>
          <Text style={styles.header}>Przyroda</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/natureOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            MEKSYK jest jednym z najbardziej różnorodnych krajów świata, bogatym
            w ekosystemy i gatunki. Jeden z tych ekosystemów – tropikalny las
            liściasty – niegdyś rozciągał się od północnego Meksyku wzdłuż
            wybrzeża Pacyfiku aż po Amerykę Środkową. Do dziś przetrwało mniej
            niż 15% jego powierzchni, a tylko 5% podlega ochronie prawnej.
            Najważniejsze przyczyny wielkiej różnorodności biologicznej Meksyku
            to jego topografia, różnorodność klimatyczna oraz złożona historia
            geologiczna, biologiczna i kulturowa. Wszystkie te istotne czynniki
            przyczyniły się do powstania swoistej mozaiki warunków
            środowiskowych, które umożliwiły ewolucję wielu różnych siedlisk i
            form życia. Złożona topografia kraju, wraz z przebiegającymi
            równoleżnikowo zmianami, tworzy ogromną liczbę wariantów
            środowiskowych. Różnice wysokości powodują zmiany klimatyczne w
            wielu innych wymiarach, jak np. intensywność promieniowania
            słonecznego, wilgotność powietrza, dobowe wahania temperatury i
            dostępna ilość tlenu.
          </Text>
          <Text style={styles.header}>Kino w Meksyku</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/cinemaOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            W 2016 r. wyprodukowano 162 filmy fabularne. Jest to drugi najwyższy
            wynik od 1958 r. Większość filmów (58%) finansowanych jest ze
            środków publicznych. Produkcja prywatna rośnie już trzeci rok z
            rzędu i sięga 32%. Nakręcenie filmu w Meksyku kosztuje średnio 19,8
            miliona peso (nieco ponad milion dolarów). Koszt ten był niższy o 6%
            w roku 2016 w porównaniu do roku poprzedniego. Kobiety mają coraz
            większy udział w kinie meksykańskim. Rok 2016 był rekordowy dla
            reżyserek. 37 spośród 162 filmów wyprodukowanych w 2016 r., czyli
            23%, zostało wyreżyserowanych przez kobiety. Dziesięć lat temu
            kobiety tworzyły tylko 8 filmów. Dla gatunku dokumentalnego
            najlepszym rokiem był rok 2016 z 66 produkcjami. Jest to najwyższy
            wynik odkąd prowadzi się te statystyki, czyli od roku 2010.
          </Text>
          <Text style={styles.header}>Kultura prekolumbijska</Text>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/images/honoraryHost/precolumbianCultureOfMexico.jpg')}
            />
          </View>
          <Text style={styles.textStyle}>
            Pojawienie się pierwszych społeczeństw zbiega się z tym, co
            archeolodzy nazywają okresem przedklasycznym. Świadectwa z tego
            okresu obejmują zachodnie terytorium Meksyku, wyżynę środkową,
            wybrzeże Zatoki Meksykańskiej, region Oaxaca oraz południowy wschód
            w stronę Ameryki Środkowej, czyli prawie całą Mezoamerykę. Pod tym
            jeszcze neolitycznym podłożem widać konkretną cywilizację – znaną
            pod nazwą Olmeków – która rozwinęła się na wybrzeżu Zatoki
            Meksykańskiej, na styku dzisiejszych stanów Veracruz i Tabasco.
            Cywilizacja Olmeków pojawiła się 1500 lat p.n.e. Słynie z
            monumentalnych kamiennych tzw. głów olmeckich, i jest postrzegana
            jako cywilizacja-matka Meksyku.
          </Text>
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
  imageStyle: {
    marginTop: 20,
    height: height / 3,
    width: width / 1.5,
  },
  textStyle: {
    fontSize: 13,
    color: 'white',
    marginTop: 14,
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

export default AboutHonoraryHostScreen;
