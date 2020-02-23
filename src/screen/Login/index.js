import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  AsyncStorage,
  Image,
} from 'react-native';
import Form from '../../components/Form';
import Submit from '../../components/Button';
import {onChangeIntoMainScreen, onRegister} from '../../navigation';
import {loginUser} from '../../redux/actions/userAction/action';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secure: true,
      username: '',
      password: '',
      dataUser: 'tranngochung13',
      dataPass: '1234',

      usernameError: '',
      passwordError: '',
      checkError: '',

      loading: false,
    };
  }

  onRestart = () => {
    this.setState({usernameError: ''});
    this.setState({passwordError: ''});
  };

  componentDidMount() {
    AsyncStorage.getItem('token').then(data => {
      if (!data || data === '') {
        this.setState({loading: true});
      }
    });
  }

  onLogin = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    this.onRestart();
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data.username === '') {
      this.setState({usernameError: 'You need type username'});
    } else if (data.password === '') {
      this.setState({passwordError: 'You need type password'});
    } else if (data.username === this.state.dataUser && data.password === this.state.dataPass) {
      this.props.loginHandle(data);
    } else {
      this.setState({checkError: 'Your username or password is incorrect'});
    }
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    if (!this.state.loading) {
      return <View />;
    }

    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
              <Image style={{width: 100, height: 100}}
          source={require('../../asset/image/Profile.png')}></Image>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'red'}}>{this.state.checkError}</Text>
            </View>
            
            <Form
              labelName="Username:"
              placeHolder="tranngochung13"
              getData={val => this.onChangeText('username', val)}
              valueError={this.state.usernameError}
            />
            <Form
              labelName="Password:"
              placeHolder="1234"
              getData={val => this.onChangeText('password', val)}
              valueError={this.state.passwordError}
              isSecure={true}
            />

            <View style={styles.buttonSubmit}>
              <Submit style={styles.styleButton} submit={this.onLogin} labelSubmit="Login" />
              <Submit style={styles.styleButton} submit={onRegister} labelSubmit="Register" />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = data => {
  return {
    user: data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginHandle: data => dispatch(loginUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
