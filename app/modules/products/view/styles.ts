import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 200,
  },
  content: {
    paddingTop: 20,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 10
  },
  tabView: {
    flex: 1,
    paddingBottom: 10
  },
  tabBar: {
    backgroundColor: 'transparent',
    height: 45,
    shadowOpacity: 0,
    elevation: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#acacac',
    shadowColor: 'transparent'
  },
  titleTab: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  tabs: {
    flex: 1,
  },
  description: {
    paddingTop: 10
  },
  itemDescriptionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 0
  },
  itemDescriptionValue: {
    marginBottom: 20
  },
})

export default styles