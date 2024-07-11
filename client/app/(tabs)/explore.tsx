import { StyleSheet, View } from 'react-native';
import Post from '@/components/Post';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Post></Post>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
},
});
