import { StyleSheet } from 'react-native';
import pxToDp from '../../config/pxToDp';

export default StyleSheet.create({
  inputContainer: {
    height: pxToDp(100),
    paddingTop: pxToDp(20),
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#ddd',
  },
  input: {
    textAlign: 'center',
    height: pxToDp(80),
    width: pxToDp(600),
    marginTop: pxToDp(30),
    marginBottom: pxToDp(30),
    color: '#000',
    fontSize: pxToDp(30),
    borderBottomColor: '#000',
    borderBottomWidth: pxToDp(0.5),
  },
});
