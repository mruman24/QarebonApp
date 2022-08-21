import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0,0.50)',
    // opacity: 0.5,
    position: 'absolute'

  },
  loadingText: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.White
  }
});
export default styles;  