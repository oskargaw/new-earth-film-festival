import React from 'react';
import { StyleSheet, View, Platform, Image, ScrollView } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator,
} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';
import AboutFestivalScreen from './screens/AboutFestivalScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import MenuScreen from './screens/MenuScreen';
import MoviesScreen from './screens/MoviesScreen';
import OrganizersScreen from './screens/OrganizersScreen';
import ScheduleDay1Screen from './screens/ScheduleDay1Screen';
import ScheduleDay2Screen from './screens/ScheduleDay2Screen';
import ScheduleDay3Screen from './screens/ScheduleDay3Screen';
import ScheduleDay4Screen from './screens/ScheduleDay4Screen';
import ScheduleDay5Screen from './screens/ScheduleDay5Screen';
import ScheduleDay6Screen from './screens/ScheduleDay6Screen';
import ScheduleDay7Screen from './screens/ScheduleDay7Screen';
import SelectedMovieScreen from './screens/SelectedMovieScreen';
import VenuesListScreen from './screens/VenuesListScreen';
import LoginScreen from './screens/LoginScreen';
import VenuesMapScreen from './screens/VenuesMapScreen';
import JuryScreen from './screens/JuryScreen';
import SelectingCommissionScreen from './screens/SelectingCommissionScreen';
import AboutHonoraryHostScreen from './screens/AboutHonoraryHostScreen';
import AliveTodayFoundationScreen from './screens/AliveTodayFoundationScreen';
import TicketsScreen from './screens/TicketsScreen';
import PartnersAndSponsorsScreen from './screens/PartnersAndSponsorsScreen';
import NewsAndVideosScreen from './screens/NewsAndVideosScreen';
import SelectedNewsScreen from './screens/SelectedNewsScreen';
import ScreeningsScheduleDay1Screen from './screens/ScreeningsScheduleDay1Screen';
import ScreeningsScheduleDay2Screen from './screens/ScreeningsScheduleDay2Screen';
import ScreeningsScheduleDay3Screen from './screens/ScreeningsScheduleDay3Screen';
import ScreeningsScheduleDay4Screen from './screens/ScreeningsScheduleDay4Screen';
import ScreeningsScheduleDay5Screen from './screens/ScreeningsScheduleDay5Screen';

const CustomDrawerComponent = props => (
  <View>
    <View style={{ alignItems: 'center' }}>
      <Image
        style={styles.drawerImage}
        source={require('./assets/images/logoNeiffDrawer.jpg')}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);

export default class App extends React.Component {
  render() {
    const MainNavigator = createDrawerNavigator(
      {
        Menu: { screen: MenuScreen },
        Miejsca: {
          screen: createStackNavigator(
            {
              Venues_List: { screen: VenuesListScreen },
              Venues_Map: { screen: VenuesMapScreen },
            },
            { initialRouteName: 'Venues_List', backBehavior: 'initialRoute' },
          ),
          navigationOptions: {
            drawerIcon: () => (
              <Image
                source={require('./assets/images/icons/drawer/venues.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          },
        },
        Filmy: {
          screen: createStackNavigator(
            {
              Movies_Screen: { screen: MoviesScreen },
              Selected_Movie: { screen: SelectedMovieScreen },
            },
            { initialRouteName: 'Movies_Screen' },
          ),
          navigationOptions: {
            drawerIcon: () => (
              <Image
                source={require('./assets/images/icons/drawer/movies.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          },
        },
        Program: {
          screen: createMaterialTopTabNavigator(
            {
              Pokazy: {
                screen: createMaterialTopTabNavigator(
                  {
                    '16\nWT': { screen: ScreeningsScheduleDay1Screen },
                    '17\nŚR': { screen: ScreeningsScheduleDay2Screen },
                    '18\nCZ': { screen: ScreeningsScheduleDay3Screen },
                    '19\nPT': { screen: ScreeningsScheduleDay4Screen },
                    '20\nSB': { screen: ScreeningsScheduleDay5Screen },
                  },
                  {
                    tabBarOptions: {
                      lazy: true,
                      scrollEnabled: true,
                      style: { backgroundColor: '#545454' },
                    },
                    tabBarPosition: 'top',
                    shifting: false,
                    activeTintColor: '#ffff00',
                    inactiveTintColor: '#ffffff',
                  },
                ),
              },
              Warsztaty: {
                screen: createMaterialTopTabNavigator(
                  {
                    '15\nPN': { screen: ScheduleDay1Screen },
                    '16\nWT': { screen: ScheduleDay2Screen },
                    '17\nŚR': { screen: ScheduleDay3Screen },
                    '18\nCZ': { screen: ScheduleDay4Screen },
                    '19\nPT': { screen: ScheduleDay5Screen },
                    '20\nSB': { screen: ScheduleDay6Screen },
                    '21\nND': { screen: ScheduleDay7Screen },
                  },
                  {
                    tabBarOptions: {
                      lazy: true,
                      scrollEnabled: true,
                      style: { backgroundColor: '#545454' },
                    },
                    tabBarPosition: 'top',
                    shifting: false,
                    activeTintColor: '#ffff00',
                    inactiveTintColor: '#ffffff',
                  },
                ),
              },
            },
            {
              tabBarOptions: {
                lazy: true,
                scrollEnabled: false,
                style: { backgroundColor: '#2a2a2a' },
              },
              tabBarPosition: 'top',
              shifting: false,
              activeTintColor: '#ffff00',
              inactiveTintColor: '#ffffff',
            },
            { initialRouteName: 'Screenings' },
          ),
          navigationOptions: {
            drawerIcon: () => (
              <Image
                source={require('./assets/images/icons/drawer/schedule.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          },
        },
        Bilety: {
          screen: TicketsScreen,
          navigationOptions: {
            drawerIcon: () => (
              <Image
                source={require('./assets/images/icons/drawer/tickets.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          },
        },
        Wiadomości: {
          screen: createStackNavigator(
            {
              NewsAndVideos: { screen: NewsAndVideosScreen },
              SelectedNews: { screen: SelectedNewsScreen },
            },
            { initialRouteName: 'NewsAndVideos' },
          ),
          navigationOptions: {
            drawerIcon: () => (
              <Image
                source={require('./assets/images/icons/drawer/news.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          },
        },
        'Partnerzy & Sponsorzy': {
          screen: PartnersAndSponsorsScreen,
          navigationOptions: {
            drawerIcon: () => (
              <Image
                source={require('./assets/images/icons/drawer/sponsors.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          },
        },
        'O nas': {
          screen: createStackNavigator(
            {
              About_Us: { screen: AboutUsScreen },
              About_Festival: { screen: AboutFestivalScreen },
              Organizers: { screen: OrganizersScreen },
              Jury: { screen: JuryScreen },
              SelectingCommission: { screen: SelectingCommissionScreen },
              AboutHonoraryHost: { screen: AboutHonoraryHostScreen },
              AliveTodayFoundation: { screen: AliveTodayFoundationScreen },
              Contact_Us: { screen: ContactUsScreen },
            },
            { initialRouteName: 'About_Us' },
          ),
          navigationOptions: {
            drawerIcon: () => (
              <Image
                source={require('./assets/images/icons/drawer/about.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          },
        },
        Login: {
          screen: LoginScreen,
          navigationOptions: {
            drawerIcon: () => (
              <Image
                source={require('./assets/images/icons/drawer/login.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          },
        },
      },
      {
        initialRouteName: 'Menu',
        contentComponent: CustomDrawerComponent,
        shifting: false,
        activeTintColor: '#ffff00',
        inactiveTintColor: '#ffffff',
        barStyle: { backgroundColor: '#694fad' },
        backBehavior: 'initialRoute',
      },
    );
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
  drawerImage: {
    height: 150,
    width: 285,
  },
});
