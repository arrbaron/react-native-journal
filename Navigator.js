import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Fab, Icon } from 'native-base';

import Post from './components/posts/Post';
import Posts from './components/posts/Posts';
import NewPost from './components/posts/NewPost';
import navStyles from './styles/navStyles';

class Home extends Component {
  static navigationOptions = {
    ...navStyles,
    title: 'Home'
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
        <Fab
          style={styles.newPost}
          onPress={this.goToNewPost}
        >
          <Icon name="add" />
        </Fab>
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
    backgroundColor: 'cornflowerblue'
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
