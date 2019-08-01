import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  Linking,
} from 'react-native';

const { height, width } = Dimensions.get('window');

class ContactUsScreen extends Component {
  state = {
    email: '',
    message: '',
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Kontakt',
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
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder={'Twój email'}
            placeholderTextColor={'rgba(0, 0, 0, 0.8)'}
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <View>
          <Text
            style={{ textAlign: 'left', marginTop: 30, fontWeight: 'bold' }}
          >
            Wiadomość
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.input}
            placeholder={''}
            placeholderTextColor={'rgba(0, 0, 0, 0.8)'}
            onChangeText={message => this.setState({ message })}
          />
        </View>
        <Button
          style={{ marginTop: 30 }}
          title="Wyślij!"
          onPress={() =>
            Linking.openURL(
              `mailto:festival@neiff.org?subject=${this.state.email}&body=${
                this.state.message
              }`,
            )
          }
        />
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: width - 32,
    height: 45,
    marginTop: 14,
  },
});

export default ContactUsScreen;
