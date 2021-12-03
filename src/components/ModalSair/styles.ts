import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },

  container: {
    flex: 1,
    marginTop: 550,
  },

  bar: {
    width: 40,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  button: {
    width: '45%',
    height: 56,
    borderRadius: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonCancel: {
    backgroundColor: theme.colors.heading,
  },

  buttonSair: {
    backgroundColor: theme.colors.primary,
  },

  text: {
    flex: 1,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    textAlign: 'center',
  },

  textCancel: {
    color: 'black',
  },

  textSair: {
    color: theme.colors.heading,
  },

  headerQuestion: {
    display: 'flex',
    justifyContent: 'center',
    marginVertical: 22,
  },

  title: {
    fontFamily: theme.fonts.title700,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  titleQuestion: {
    color: theme.colors.heading,
  },

  play: {
    color: theme.colors.primary,
  },
});
