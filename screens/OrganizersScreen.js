import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Modal from 'react-native-modal';
import { organizers } from '../assets/texts/organizers';

const { height } = Dimensions.get('window');

class OrganizersScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Organizatorzy',
    headerForceInset: { top: 'never', bottom: 'never' },
    headerStyle: {
      backgroundColor: '#C1CD28',
    },
    headerTitleStyle: {
      fontSize: 18,
      fontWeight: '200',
    },
  });

  state = {
    visibleModal: null,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <ScrollView>
      <View style={styles.modalContent}>
        <Image
          source={
            organizers[
              this.state.visibleModal !== null ? this.state.visibleModal - 1 : 1
            ].thumbnail
          }
          style={styles.modalImageStyle}
        />
        <Text style={styles.modalPersonNameStyle}>
          {`${
            organizers[
              this.state.visibleModal !== null ? this.state.visibleModal - 1 : 1
            ].name.first
          } ${
            organizers[
              this.state.visibleModal !== null ? this.state.visibleModal - 1 : 1
            ].name.last
          }`}
        </Text>
        <Text>
          {
            organizers[
              this.state.visibleModal !== null ? this.state.visibleModal - 1 : 1
            ].biography
          }
        </Text>
        {this._renderButton('Zamknij', () =>
          this.setState({ visibleModal: null }),
        )}
      </View>
    </ScrollView>
  );

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <List>
            {organizers.map(person => (
              <View key={person.key}>
                <TouchableOpacity
                  onPress={() => this.setState({ visibleModal: person.key })}
                >
                  <ListItem
                    roundAvatar
                    title={`${person.name.first} ${person.name.last}`}
                    subtitle={person.office}
                    avatar={person.thumbnail}
                    containerStyle={styles.listItemStyle}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </List>
          <Modal
            isVisible={this.state.visibleModal !== null ? true : false}
            animationIn={'zoomInDown'}
            animationOut={'zoomOutUp'}
            animationInTiming={250}
            animationOutTiming={300}
            onBackButtonPress={() => this.setState({ visibleModal: null })}
          >
            {this._renderModalContent()}
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listItemStyle: {
    height: height / 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalImageStyle: {
    height: 200,
    width: 200,
    borderRadius: 7,
    marginTop: 20,
  },
  modalPersonNameStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default OrganizersScreen;
