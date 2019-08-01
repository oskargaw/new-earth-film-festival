import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import * as firebase from 'firebase';
import backgroundImage from '../assets/images/logoNeiff.png';
import Icon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      console.log('blablabla');
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log(user);
      }
    });
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('Hasło musi zawierać więcej niż 6 znaków');
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(this.props.navigation.navigate('Filmy'))
        .catch(() => {
          alert(
            'Ups! Coś poszło nie tak. Czy zakładałeś kiedyś u nas konto? Jeśli tak - zaloguj się, jeśli nie - sprawdź proszę czy masz włączone połączenie internetowe oraz czy email ma właściwy format',
          );
          this.props.navigation.navigate('Login');
        });
      this.props.navigation.navigate('Filmy');
    } catch (error) {
      alert(
        'Ups! Coś poszło nie tak. Czy zakładałeś kiedyś u nas konto? Jeśli tak - zaloguj się, jeśli nie - sprawdź proszę czy masz włączone połączenie internetowe oraz czy email ma właściwy format',
      );
      console.log(error.toString());
    }
  };

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(this.props.navigation.navigate('Filmy'))
        .catch(() => {
          alert(
            'Ups! Coś poszło nie tak. Czy na pewno zakładałeś kiedyś u nas konto? Jeśli nie - zarejestruj się, jeśli tak - sprawdź proszę czy masz włączone połączenie internetowe oraz czy email ma właściwy format',
          );
          this.props.navigation.navigate('Login');
        });
    } catch (error) {
      alert(
        'Ups! Coś poszło nie tak. Czy na pewno zakładałeś kiedyś u nas konto? Jeśli nie - zarestruj się, jeśli tak - sprawdź proszę czy masz włączone połączenie internetowe oraz czy email ma właściwy format',
      );
      console.log(error.toString());
    }
  };

  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundContainer}
      >
        <KeyboardAvoidingView
          style={{ alignItems: 'center' }}
          behavior="padding"
          enabled
        >
          <View style={[styles.inputContainer, { marginTop: height / 2 }]}>
            <Icon
              name={'ios-person-outline'}
              size={28}
              color={'rgba(193, 205, 40, 0.8)'}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={'Email'}
              placeholderTextColor={'rgba(193, 205, 40, 0.8)'}
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginBottom: 8,
              },
            ]}
          >
            <Icon
              name={'ios-lock-outline'}
              size={28}
              color={'rgba(193, 205, 40, 0.8)'}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={'Hasło'}
              secureTextEntry={true}
              placeholderTextColor={'rgba(193, 205, 40, 0.8)'}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          >
            <Text style={styles.text}>Zaloguj</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          >
            <Text style={styles.text}>Zarejestruj</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: width - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    color: 'rgba(193, 205, 40, 0.8)',
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  buttonLogin: {
    width: width - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#C1CD28',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.55)',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
