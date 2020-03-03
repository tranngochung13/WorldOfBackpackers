import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAllContent: false,
    };
  }

  onShowAllContent = () => {
    this.setState({
      isShowAllContent: !this.state.isShowAllContent,
    });
  };
  

  render() {
    const {description, submit, imageUrl, title, address, star, showAllContent} = this.props;
    

    return (
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={styles.item}
          onPress={submit ? submit : ''}>
          <Image style={styles.imageThumbnail} source={{uri: imageUrl}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.onPressItem(item)}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    flex: 1,
  },
  title: {
    marginLeft: 15,
    fontSize: 30,
    marginTop: -75,
    color: 'white',
  },
  address: {
    marginLeft: 15,
    fontSize: 20,
    marginTop: -40,
    color: 'white',
  },
  imageThumbnail: {
    flex: 1,
    height: 200,
  },
});

