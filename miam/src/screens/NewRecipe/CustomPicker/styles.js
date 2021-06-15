import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text_input: {
    borderBottomColor: colors.grey3,
    borderBottomWidth: 1,
    borderRadius: 10,
    height: 55,
    color: colors.textWhite,
  },
  input_container: {
    width: '80%',
    marginTop: 10,
  },
  containerPicker: {
    alignItems: "center",
    flex:1,
  }
})