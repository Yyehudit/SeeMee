import CameraComponent from '@/components/Camera';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View >
      <Text style={styles.titleContainer}>Hello World</Text>
      <CameraComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontSize: 24,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
