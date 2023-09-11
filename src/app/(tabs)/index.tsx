import { StyleSheet } from 'react-native';
import PostListItem from '../../components/PostListItem';
import { Text, View } from '../../components/Themed';
import posts from "../../../assets/data/posts.json"
import { FlatList } from 'react-native';


export default function HomeScreen() {
  const post = posts[0];
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
