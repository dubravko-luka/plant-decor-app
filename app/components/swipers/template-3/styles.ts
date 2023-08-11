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
  // 
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
  closeButton: {
    elevation: 5,
  },
});

export default styles