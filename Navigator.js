import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation';
import Post from './Post';
import Posts from './Posts';
import NewPost from './NewPost';
import navStyles from './styles/navStyles';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    ...navStyles
  };

  goToPost = () => {
    this.props.navigation.navigate('Post');
  };

  goToNewPost = () => {
    this.props.navigation.navigate('NewPost');
  };

  render() {
    return (
      <View style={styles.container}>
        <Posts {...this.props} />
        <TouchableHighlight onPress={this.goToNewPost} style={styles.newPost}>
          <Text style={styles.newPostText}>New Post +</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  newPost: {
    backgroundColor: 'cornflowerblue',
    padding: 20,
  },
  newPostText: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default StackNavigator({
  Home: {
    screen: Home
  },
  Post: {
    screen: Post
  },
  NewPost: {
    screen: NewPost
  }
});
