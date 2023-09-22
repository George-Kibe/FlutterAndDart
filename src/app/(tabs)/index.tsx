import { ActivityIndicator, StyleSheet } from 'react-native';
import PostListItem from '../../components/PostListItem';
import { Text, View } from '../../components/Themed';
// import posts from "../../../assets/data/posts.json"
import { FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client';

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

export default function HomeScreen() {
  const { loading, error, data } = useQuery(postList);

	if (loading) return <ActivityIndicator />;
  if (error) {
    console.log("Error: ", error);
    return <Text>Something went wrong...</Text>;
  }

	console.log(data.postList);
  const posts = data.postList;
	
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        // keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap:10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
