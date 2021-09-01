import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: '100%',
    height: 360,
  },

  input: {
    height: 50,
    width: 200,
    borderBottomWidth: 2, 
  },

  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },

  title: {
    color: theme.colors.heading,
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },

  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  }
})