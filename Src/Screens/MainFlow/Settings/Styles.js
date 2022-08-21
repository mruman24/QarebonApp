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
  scrollContent: {
    marginBottom: hp(4),
    marginTop: hp(3)
  },
  headerContainer: {
    width: widthScreen,
    backgroundColor: '#548E6D'
  },
  headerText: {
    fontSize: hp(2.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White,
    textAlign: 'center',
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  settingContainer: {
    backgroundColor: "#F5F5F5",
    marginTop: hp(2)
  },
  settingInnerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(2),
    marginBottom: hp(2),
    justifyContent: 'space-between'
  },
  settingText: {
    fontSize: hp(2.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#3F4040",
    textAlign: 'left',
  },
  settingTextDes: {
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "rgba(63,64,64,0.49)",
    textAlign: 'left',
  },
  settingTextDes1: {
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#548E6D",
    textAlign: 'left',
  },
  settingTextDes2: {
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#383561",
    textAlign: 'left',
  },
  imageCircle: {
    width: hp(3),
    height: hp(3)
  },
  imageArrow: {
    width: hp(2),
    height: hp(3)
  },
});
export default styles;