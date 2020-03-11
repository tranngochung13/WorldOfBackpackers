import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {DATA} from '../../utils/friend';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Cancel extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  renderItemArray = ({item}) => {    
    return (
        <View>
            <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
                <View style={{flex: 1}}>
                    <Image style={{width: 35, height: 35}} source={require('../../asset/image/Profile.png')} />
                </View>
                <View style={{flex: 7, flexDirection: 'column'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(true);
                  }}>
                    <Text style={styles.text}> {item.title} </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 0.5}}>
                    <Icon name="ios-list" size={30} color="#F8A634" />
                </View>
            </View>
            <Modal
              animationType="fade"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <View>
                  <View style={styles.horizontal}>
                    <ActivityIndicator size="large" color="pink" />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text>Connecting with your partner</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
        </View>
    );
  };

  renderItem = ({item}) => {
    const arrays = item.arrays;
    return (
        <View>
          <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
            <Text style={styles.text}> {item.title} </Text>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={arrays}
              renderItem={this.renderItemArray}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
    );
  };
  render() {
    const test = DATA.data;
    return (
      <View style={styles.container}>
        <FlatList
          data={test}
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
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
});
