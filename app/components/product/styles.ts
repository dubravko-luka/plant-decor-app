import { StyleSheet } from "react-native";
import { Color } from "../../styles";

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
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
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '700',
    color: Color.greenMain
  },
});

export default styles