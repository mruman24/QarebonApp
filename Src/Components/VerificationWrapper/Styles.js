import { StyleSheet, Dimensions } from 'react-native';
import Colors from "../../Styles/Colors";
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: widthScreen / 1.2,
    height: heightScreen / 7,
    alignSelf: 'center',
    marginTop: '15%',
  },
  verificationInput: {
    fontSize: 25,
    fontWeight: '700',
    backgroundColor: Colors.White,
    borderColor: "#5F9275",
    width: widthScreen / 9,
    height: 65,
    borderRadius: 12,
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: "center",
    textAlign: 'center',
    color: "#5F9275"
  }

});
export default styles;