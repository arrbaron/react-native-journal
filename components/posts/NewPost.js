import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PostForm from './PostForm';
import Loading from '../Loading';

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }


  newPost = ({ title, body }) => {
    const { newPost, navigation } = this.props;
    this.setState({ loading: true });
    newPost({
      variables: {
        title,
        body
      }
    })
    .then(() => {
      navigation.goBack();
    })
    .catch(err => {
      this.setState({ loading: false });
      console.log(err);
    });
  }
  
  render() {
    return (
      <View>
        {this.state.loading ? (
          <Loading />
        ) : (
          <PostForm onSubmit={this.newPost} />
        )}
      </View>
    );
  }
}

const newPost = gql`
  mutation newPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
    }
  }
`;

export default graphql(newPost, {
  name: 'newPost',
  options: {
    refetchQueries: ['postsQuery']
  }
})(NewPost);

