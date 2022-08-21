import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundWrapper: {
    width: widthScreen,
    height: heightScreen,
    justifyContent: "center",
    alignItems: 'center'
  },
  mainLogo: {
    width: 45,
    height: 52
  }
});
export default styles;