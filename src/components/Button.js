import React, {Component} from 'react';
import {View, StyleSheet, TouchableNativeFeedback, Text} from 'react-native';

export default class Button extends Component {
  render() {
    const {submit, labelSubmit, styleButton} = this.props;
    return (
      <TouchableNativeFeedback
        onPress={submit ? submit : ''}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={ styles.styleButton ? styles.styleButton1 : ''}>
          <Text style={styles.fontSizeText}>
            {labelSubmit ? labelSubmit : ''}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  styleButton: {
    flex: 1,
    fontWeight: 'bold',
    borderColor: 'pink',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 55,
    borderRadius: 15,
    backgroundColor: '#E91E63',
    margin: 10,
  },
  styleButton1: {
    flex: 1,
    fontWeight: 'bold',
    borderColor: 'pink',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 55,
    borderRadius: 15,
    backgroundColor: 'white',
    margin: 10,
  },
});
