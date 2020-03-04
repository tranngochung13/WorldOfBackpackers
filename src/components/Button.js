import React, {Component} from 'react';
import {View, StyleSheet, TouchableNativeFeedback, Text} from 'react-native';

export default class Button extends Component {
  render() {
    const {submit, labelSubmit, styleButton} = this.props;
    return (
      <TouchableNativeFeedback
        onPress={submit ? submit : ''}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={ styleButton ? styleButton : ''}>
          <Text>
            {labelSubmit ? labelSubmit : ''}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
