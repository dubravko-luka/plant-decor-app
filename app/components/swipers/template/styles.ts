import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  image: {
    width,
    flex: 1,
  },
});

export default styles