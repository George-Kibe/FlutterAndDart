import { ActivityIndicator, StyleSheet } from 'react-native';
import PostListItem from '../../components/PostListItem';
import { Text, View } from '../../components/Themed';
// import posts from "../../../assets/data/posts.json"
import { FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const postList = gql`
  query postList {
    postList {
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
const postListPaginated = gql`
  query postListPaginated($first: Int, $after: Int) {
    postPaginatedList(first: $first, after: $after) {
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

export default function HomeScreen() {
  const [hasMore, setHasMore] = useState(true)
  // const { loading, error, data } = useQuery(postList);
  const { loading, error, data, fetchMore } = useQuery(postListPaginated, { 
    variables: { first: 10, after: 0 }
  });

	if (loading) return <ActivityIndicator />;
  if (error) {
    console.log("Error: ", error);
    return <Text>Something went wrong...</Text>;
  }

	// console.log(data.postList);
  // const posts = data.postList;
  const posts = data.postPaginatedList
  const loadMore = async() => {
    if(!hasMore){
      console.warn("Nothing more to load")
      return
    }    
    const response = await fetchMore({ variables: { after: data.postPaginatedList.length}})
    if (response.data.postPaginatedList.length === 0 ) {
      setHasMore(false)
    }
    // console.log("response: ", response.data.postPaginatedList)
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap:10 }}
        onEndReached={loadMore}
        ListFooterComponent={() => (
          <Text
            onPress={loadMore}
            style={{ textAlign: 'center', fontSize: 16, fontWeight: '600' }}
          >
            Load More
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
