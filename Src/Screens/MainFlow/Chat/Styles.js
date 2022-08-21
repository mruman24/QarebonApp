import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Metrics from '../../../Styles/Metrices';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  fullContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  mainHeadConatiner: {
    backgroundColor: Colors.darkGreen
  },
  scrollContent: {
    marginBottom: hp(4)
  },
  headerContainer: {
    width: widthScreen,
    backgroundColor: '#548E6D'
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
  bottomWrapper: {
    width: widthScreen,
    backgroundColor: '#D4D4D4'
  },
  bottomWrapperInner: {
    marginTop: hp(2),
    marginBottom: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sendStyle: {
    width: hp(4),
    height: hp(4),
    marginTop: hp(0.5)
  },
  pickerStyle: {
    width: hp(2),
    height: hp(4),
    marginTop: hp(0.5),
    marginLeft: hp(1)
  },
  emailWrapper: {
    borderWidth: 1.5,
    borderColor: "#CDD4D9",
    backgroundColor: Colors.White,
    borderRadius: 25,
    height: hp(5),
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    width: hp(33),
    marginLeft: hp(1)
    // marginTop: hp(0.5),
    // marginBottom: hp(0.5)
  },
  emailInput: {
    marginLeft: hp(1.5),
    flex: 1,
    fontSize: hp(1.5),
    color: "rgba(0,0,0,0.44)",
    fontWeight: '500',
    textAlign: 'right'
  },
});
export default styles;