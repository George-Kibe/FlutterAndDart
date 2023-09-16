import { StyleSheet } from 'react-native';
import PostListItem from '../../components/PostListItem';
import { Text, View } from '../../components/Themed';
import posts from "../../../assets/data/posts.json"
import { FlatList } from 'react-native';


export default function HomeScreen() {
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
