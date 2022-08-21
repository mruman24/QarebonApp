import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  mainHeadConatiner: {
    backgroundColor: Colors.darkGreen
  },
  headerContainer: {
    width: widthScreen,
    backgroundColor: '#5F9275'
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: hp(2.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White
  },
  backIcon: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(1.3)
  },
  gap: {
    width: hp(3.5)
  },
  buttonContainer: {
    marginTop: hp(2.5),
    alignSelf: 'center',
    width: widthScreen / 1.12,
    height: hp(6),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5F9275'
  },
  buttonText: {
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White
  },
  logoHead: {
    width: hp(12),
    height: hp(12),
    alignSelf: 'center',
    marginTop: hp(8)
  },
  titleHead: {
    fontSize: hp(1.5),
    alignSelf: 'center',
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#3B8259",
    marginTop: hp(2)
  },
});
export default styles;