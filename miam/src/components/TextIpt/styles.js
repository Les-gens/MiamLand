import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export default StyleSheet.create({
  input:{
    borderBottomWidth: 1,
    borderBottomColor: colors.grey5,
    color: colors.textWhite,
    fontSize: 16
  },
  input_focused:{
    borderBottomWidth: 1,
    borderBottomColor: colors.textWhite,
    color: colors.textWhite,
    fontSize: 16
  }
})