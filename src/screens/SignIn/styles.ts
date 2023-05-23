import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.background,
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    textAlign: 'center',
    color: theme.color.heading,
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    textAlign: 'center',
    color: theme.color.heading,
    fontSize: 15,
    marginBottom: 64, 
  }
});
