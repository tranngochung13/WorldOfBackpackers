import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  TouchableWithoutFeedback,
} from 'react-native';
import {DATA} from '../../utils/contans';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {onShowModalDetail} from '../../navigation';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAllContent: false,
    };
  }
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    Navigation.pop(null);
    return true;
  };

  onPressItem = item => {
    onShowModalDetail(item);
  };

  onShowAllContent = () => {
    this.setState({
      isShowAllContent: !this.state.isShowAllContent,
    });
  };
  

  renderItem = ({item}) => {
    const ShowAllContent = this.state.isShowAllContent ? (
      <Text style={{textAlign: 'right'}}>collapse</Text>
    ) : (
      <Text style={{textAlign: 'right'}}>See more</Text>
    );

    let star = [];

    for (let i = 0; i < item.OverallStarRating; i++) {
      star.push(<Icon name="ios-star" size={30} color="#F8A634" />);
    }

    for (let i = 0; i < 5 - item.OverallStarRating; i++) {
      star.push(<Icon name="ios-star" size={30} color="#000000" />);
    }

    return (
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.onPressItem(item)}>
          <Image style={styles.imageThumbnail} source={{uri: item.imageUrl}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.onPressItem(item)}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.address}>{item.address.en}</Text>
        </View>
          <View>
          <Text style={{flexDirection: 'row'}}>{star}</Text>
            <Text
              numberOfLines={this.state.isShowAllContent ? item.subtitle.en.length : 1}
              style={styles.description}>
                {item.subtitle.en}
            </Text>
            <TouchableWithoutFeedback onPress={this.onShowAllContent}>
              {ShowAllContent}
            </TouchableWithoutFeedback>
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
          // onEndThread => load data
          // onRefresh
        />
      </View>
    );
  }
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

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // registerHandle: (data) => dispatch(addUser(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
