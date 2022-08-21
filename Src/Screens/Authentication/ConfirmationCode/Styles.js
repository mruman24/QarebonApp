import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: Colors.White,
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
  logoHead: {
    width: hp(12),
    height: hp(12),
    alignSelf: 'center',
    marginTop: hp(5)
  },
  titleHead: {
    fontSize: hp(1.5),
    alignSelf: 'center',
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#3B8259",
    marginTop: hp(2)
  },
  titleHeadDes: {
    fontSize: hp(1.6),
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#5E5D5D",
    marginTop: hp(1)
  },
  confirmationBox: {
    marginTop: hp(2),
    width: widthScreen / 1.13,
    alignSelf: 'center',
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderTopColor: "#9DC4AE",
    borderBottomColor: "#9DC4AE",
    justifyContent: 'center',
    alignItems: 'center'
  },
  doneStyle: {
    marginTop: hp(3),
    alignSelf: 'center',
    width: hp(6),
    height: hp(6)
  },
  boxHeadText: {
    fontSize: hp(1.8),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#0B2918",
    marginTop: hp(2)
  },
  buttonContainer: {
    marginTop: hp(2),
    alignSelf: 'center',
    width: hp(30),
    height: hp(6),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5F9275',
    marginBottom: hp(3)
  },
  buttonText: {
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White
  },
  confirmBottomWrapper: {
    textAlign: 'center',
    marginTop: hp(2),
    fontSize: hp(1.3),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
  }
});
export default styles;