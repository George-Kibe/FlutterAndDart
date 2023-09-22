import { ActivityIndicator, ScrollView, Text } from 'react-native';
import posts from '../../../assets/data/posts.json';
import PostListItem from '../../components/PostListItem';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query MyQuery($id: ID!) {
    post(id:$id) {
      id
      image
      content
      profile {
        image
        id
        name
        position
      }
    }
  }
`;

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();
  const {loading, error, data} = useQuery(query, { variables: { id }});

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ title: "Post" });
  }, []);

  if (loading) return <ActivityIndicator />;
  if (error) {
    console.log("Error: ", error);
    return <Text>Something went wrong...</Text>;
  }

	console.log(data);
  const post = data.post;

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <ScrollView>
      <PostListItem post={post} />
    </ScrollView>
  );
}
