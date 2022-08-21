import { StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  mainWrapper: {
    flex: 0.5,
    justifyContent: 'flex-end'
  },
  mainContentWrapper: {
    flex: 0.25,
  },
  bottomContent: {
    flex: 0.25
  },
  imageStyling: {
    width: widthScreen,
    alignSelf: 'center',
    height: hp(30)
  },
  mainContentData: {
    width: widthScreen / 1.3,
    alignSelf: 'center',
    marginTop: hp(5)
  },
  titleName: {
    fontSize: hp(2),
    color: Colors.fullDarkGreen,
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    textAlign: 'left'
  },
  titleDes: {
    fontSize: hp(1.3),
    color: Colors.textColor,
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    textAlign: 'left',
    width: hp(30),
    marginTop: hp(1)
  },
  nextButton: {
    alignSelf: 'center',
    width: hp(8),
    height: hp(8)
  },
  nextButton1: {
    alignSelf: 'center',
    width: hp(9),
    height: hp(8)
  },
  skipText: {
    alignSelf: 'center',
    marginTop: hp(1.5),
    fontSize: hp(1.8),
    color: Colors.darkPurple,
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
  }
});
export default styles;
