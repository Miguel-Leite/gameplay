import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    width: 49,
    height: 49,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
});
