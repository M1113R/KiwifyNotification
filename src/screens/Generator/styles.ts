import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.PRIMARY,
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.COLORS.WHITE,
  },
  messageRodape: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.COLORS.WHITE,
  },
  containerForm: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
    borderRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: theme.COLORS.TEXT_TITLE,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: theme.COLORS.TEXT,
  },
  button: {
    backgroundColor: theme.COLORS.BUTTON,
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.COLORS.BUTTON_TEXT,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: theme.COLORS.TEXT,
  },
  togglePasswordButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  togglePasswordButtonText: {
    color: theme.COLORS.TEXT,
    fontSize: 14,
  },
});
