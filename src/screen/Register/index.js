import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Form from '../../components/Form';
import Submit from '../../components/Button';
import {addUser} from './../../redux/actions/userAction/action';
import {connect} from 'react-redux';
import {onExit} from './../../navigation/index';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secure: true,

      username: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',

      usernameError: '',
      emailError: '',
      phoneNumberError: '',
      passwordError: '',
      confirmPasswordError: '',
    };
  }

  onRestart = () => {
    this.setState({userError: ''});
    this.setState({emailError: ''});
    this.setState({phoneNumberError: ''});
    this.setState({passwordError: ''});
    this.setState({confirmPasswordError: ''});
  };

  onPress = () => {
    const {
      username,
      email,
      phoneNumber,
      password,
      confirmPassword,
    } = this.state;
    const data = {
      username: username,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };

    this.onRestart();

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Validation username
    if (data.username === '') {
      this.setState({usernameError: 'You need type user'});
    }
    // Validation email
    if (data.email === '') {
      this.setState({emailError: 'You need type email'});
    } else if (reg.test(data.email) === false) {
      this.setState({emailError: 'Email wrong'});
    }
    //Validation phone number
    if (data.phoneNumber === '') {
      this.setState({phoneNumberError: 'You need type phone number'});
    } else if (data.phoneNumber.length < 9 || data.phoneNumber.length > 11) {
      this.setState({phoneNumberError: 'Phone number length error'});
    }
    // Validation password
    if (data.password === '') {
      this.setState({passwordError: 'You need type password'});
    }
    // Validation confirm password
    if (confirmPassword === '') {
      this.setState({confirmPasswordError: 'You need type confirm password'});
    } else if (confirmPassword === data.password) {
    } else {
      this.setState({
        confirmPasswordError:
          'Password confirmation does not match the password',
      });
    }
    this.props.registerHandle(data);
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  onExit = () => onExit();

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{width: 100, height: 100}}
                source={require('../../asset/image/Profile.png')}> 
              </Image>
            </View>
            <Form
              labelName="Username:"
              placeHolder="John"
              getData={val => this.onChangeText('username', val)}
              valueError={this.state.usernameError}
            />
            <Form
              labelName="Email:"
              placeHolder="abc@gmail.com"
              getData={val => this.onChangeText('email', val)}
              valueError={this.state.emailError}
            />
            <Form
              labelName="Phone:"
              placeHolder="012345678..."
              getData={val => this.onChangeText('phoneNumber', val)}
              valueError={this.state.phoneNumberError}
            />
            <Form
              labelName="Password:"
              placeHolder="****************"
              getData={val => this.onChangeText('password', val)}
              valueError={this.state.passwordError}
              isSecure={true}
            />
            <Form
              labelName="Confirm password:"
              placeHolder="****************"
              getData={val => this.onChangeText('confirmPassword', val)}
              valueError={this.state.confirmPasswordError}
              isSecure={true}
            />
            <View style={styles.buttonSubmit}>
              <Submit submit={this.onPress} labelSubmit="OK" />
              <Submit submit={this.onExit} labelSubmit="Exit" />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerHandle: data => dispatch(addUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  buttonSubmit: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
  },
});
