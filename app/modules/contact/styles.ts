import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 10,
  },
  buttonCall: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(185, 28, 28)',
    borderRadius: 20,
    width: 235,
    marginTop: 30
  },
  callText: {
    display: 'flex',
    fontSize: 14,
    color: '#fff',
    fontWeight: '700'
  },
});

export default styles