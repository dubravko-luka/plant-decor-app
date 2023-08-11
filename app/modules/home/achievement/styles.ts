import { StyleSheet } from "react-native";
import { Color } from "../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    // 
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
  },
  imageContainer: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  infoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  name: {
    fontWeight: '700',
    color: Color.greenMain
  },
});

export default styles;