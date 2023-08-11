import { Dimensions, StyleSheet } from "react-native"

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  scrollView: {
    flex: 1
  },
  header: {
    zIndex: 1,
    padding: 10,
    width: screenWidth,
    borderBottomWidth: 0.2,
    borderBottomColor: '#acacac',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -24,
  },
})

export default styles