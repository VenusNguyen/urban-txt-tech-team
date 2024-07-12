import { StyleSheet, ScrollView } from 'react-native';
import Post from '@/components/Post';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Post></Post>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
},
});
