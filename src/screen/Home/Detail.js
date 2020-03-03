import React, {Component} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {DATA} from '../../utils/contans';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  renderItem = ({item}) => {
    return (
      <>
        <Image style={styles.imageThumbnail1} source={{uri: item.imageUrl}} />
      </>
    );
  };

  navigationButtonPressed = ({buttonId}) => {
    const {componentId} = this.props;
    if (buttonId === 'close') {
      Navigation.dismissModal(componentId);
    }
  };

  render() {
    const {
      address,
      subtitle,
      imageUrl,
      OverallStarRating,
    } = this.props.data;

    let star = [];

    for (let i = 0; i < OverallStarRating; i++) {
      star.push(<Icon name="ios-star" size={30} color="#F8A634" />);
    }

    for (let i = 0; i < 5 - OverallStarRating; i++) {
      star.push(<Icon name="ios-star" size={30} color="#000000" />);
    }

    return (
      <View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.header}>
              <Image style={styles.imageThumbnail} source={{uri: imageUrl}} />
            </View>
            <View style={{marginHorizontal: 10}}>
              <FlatList
                data={DATA}
                renderItem={this.renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                // onEndThread => load data
                // onRefresh
              />
              <Text style={styles.title1}>{address.en}</Text>
              <Text>{star}</Text>
              <Text>{subtitle.en}</Text>
              <Text style={styles.title1}>Similar</Text>
              <FlatList
                data={DATA}
                renderItem={this.renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                // onEndThread => load data
                // onRefresh
              />
            </View>
          </ScrollView>
        </View>
        
        <View style={styles.footer}>
          <TouchableWithoutFeedback>
            <Text> Invite other </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    padding: 10,
    paddingBottom: 50,
  },
  footer: {
    position:'absolute',
    bottom:0,
    width:420,
    height:50,   /* Height of the footer */
    backgroundColor: '#6cf',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
 },
  header: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    marginTop: 275,
    fontSize: 20,
  },
  imageThumbnail: {
    height: 300,
  },
  imageThumbnail1: {
    height: 91,
    width: 120,
    margin: 5,
  },
  title1: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
