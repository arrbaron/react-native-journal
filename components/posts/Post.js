import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Loading from '../Loading';
import navStyles from '../..//styles/navStyles';

class Post extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      ...navStyles,
      title: navigation.state.params.title
    }
  };
  
  render() {
    const { Post, loading } = this.props;
    if (loading) return <Loading />
    return (
      <View>
        <Text>{this.props.Post.title}</Text>
        <Text>{this.props.Post.body}</Text>
      </View>
    );
  }
}

const postQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id,
      title,
      body
    }
  }
`;

export default graphql(postQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(Post);
