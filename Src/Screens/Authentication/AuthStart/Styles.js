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
  mainContentConatiner: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
  },
  logoHead: {
    width: hp(12),
    height: hp(12),
    alignSelf: 'center'
  },
  titleHead: {
    fontSize: hp(2.2),
    alignSelf: 'center',
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#3B8259",
    marginTop: hp(1.5)
  },
  titleHeadDes: {
    fontSize: hp(1.3),
    alignSelf: 'center',
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#828784",
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
  buttonContainer: {
    marginTop: hp(2),
    alignSelf: 'center',
    width: hp(30),
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
  }
});
export default styles;