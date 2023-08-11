import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 20,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '700'
  },
  value: {
    fontSize: 16
  }
})

export default styles