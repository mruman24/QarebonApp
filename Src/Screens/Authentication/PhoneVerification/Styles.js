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
  emailWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#94AFA0",
    borderRadius: 8,
    backgroundColor: "#F3F3F3",
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.12,
    marginTop: hp(2)
  },
  emailInput: {
    flex: 1,
    fontSize: hp(1.4),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#5B7868",
    marginLeft: hp(2),
    textAlign: 'right'
  },
  sentStyles: {
    width: hp(3.5),
    height: hp(2.7),
    marginLeft: hp(1.2),
    alignSelf: 'center'
  },
  inboxLine: {
    width: hp(0.1),
    height: hp(6),
    backgroundColor: '#DFDEDE',
    marginLeft: hp(1.5)
  },
  passwordStyles: {
    width: hp(2.3),
    height: hp(3),
    marginLeft: hp(1.9),
    alignSelf: 'center'
  },
  seenPasswordStyles: {
    width: hp(3.5),
    height: hp(2.7),
    marginRight: hp(1.2)
  },
  infoMessageContent: {
    marginTop: hp(2),
    alignSelf: 'center',
    width: widthScreen / 1.2,
  },
  infoText: {
    fontSize: hp(1.5),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#39644C",
    textAlign: 'left'
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
  socialWrapperContainer: {
    marginTop: hp(2.5),
    alignSelf: 'center',
    width: widthScreen / 1.2,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  divider: {
    width: hp(5),
    height: hp(0.2),
    backgroundColor: "#707070",
    marginTop: hp(1.3)

  },
  dividerText: {
    fontSize: hp(1.3),
    alignSelf: 'center',
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#83A290",
    marginLeft: hp(1),
    marginRight: hp(1)
  },
  socialIconWrapper: {
    flexDirection: 'row',
    marginTop: hp(3),
    justifyContent: 'space-around',
    alignItems: 'center',
    width: widthScreen / 2.5,
    alignSelf: 'center'
  },
  socialImage: {
    width: hp(6),
    height: hp(6),
    borderRadius: 8
  }
});
export default styles;