import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {DATA} from '../../utils/event';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Event extends Component {
  constructor(props) {
    super(props);
  }
  renderItem = ({item}) => {
    return (
        <View>
            <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
                <View style={{flex: 1}}>
                    <Image style={{width: 35, height: 35}} source={require('../../asset/image/Profile.png')} />
                </View>
                <View style={{flex: 7, flexDirection: 'column'}}>
                    <Text>
                        Go to
                        <Text style={styles.text}> {item.destination} </Text>
                        to see 
                        <Text style={styles.text}> {item.scenery} </Text>
                        {item.category}
                    </Text>
                </View>
                <View style={{flex: 0.5}}>
                    <Icon name="ios-list" size={30} color="#F8A634" />
                </View>
            </View>
        </View>
    );
  };
  render() {    
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold'
    },
});
