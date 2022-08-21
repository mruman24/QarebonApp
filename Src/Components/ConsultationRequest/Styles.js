import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({

  flexEmailWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexEmailWrapperInner: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "rgba(112,112,112,0.39)",
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    height: hp(6),
    alignSelf: 'center',
    width: hp(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1)
  },
  flexEmailInput: {
    flex: 1,
    fontSize: hp(1.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#2F573F",
    marginLeft: hp(2),
    textAlign: 'right'
  },
  inputText: {
    fontSize: hp(1.5),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#094121",
    textAlign: 'left'
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: hp(20),
    justifyContent: 'space-evenly',
    marginTop: hp(3.5)
  },
  optionText: {
    fontSize: hp(1.8),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#2F573F",
    textAlign: 'left',
  },
  imageCircle: {
    width: hp(2.8),
    height: hp(2.8),
    marginLeft: hp(1)
  },
  emailWrapper1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "rgba(112,112,112,0.39)",
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.12,
    marginTop: hp(1)
  },
  inboxLine: {
    width: hp(0.1),
    height: hp(6),
    backgroundColor: '#DFDEDE',
    marginRight: hp(1.5)
  },
  sentStyles1: {
    width: hp(3),
    height: hp(2.5),
    marginRight: hp(1.5),
  },
  sentStyles2: {
    width: hp(2.5),
    height: hp(3),
    marginRight: hp(1.5),
  },
  singleEmailContainer: {
    marginTop: hp(2),
    alignSelf: 'center',
    width: widthScreen / 1.12,
  },
  emailInput1: {
    flex: 1,
    fontSize: hp(1.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#2F573F",
    marginLeft: hp(2),
    textAlign: 'right'
  },
  emailWrapperComplaint: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "rgba(112,112,112,0.39)",
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    height: hp(20),
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.12,
    marginTop: hp(2),
  },
  emailInputComplaint: {
    flex: 1,
    fontSize: hp(1.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#2F573F",
    marginLeft: hp(2),
    textAlign: 'right'
  },
  bottomButtonWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    alignSelf: 'center',
    width: hp(20),
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
  buttonContainer1: {
    alignSelf: 'center',
    width: hp(20),
    height: hp(6),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: '#5F9275'
  },
  buttonText1: {
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: '#5F9275'
  },
  messageText: {
    fontSize: hp(1),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#5F9275",
    textAlign: 'center',
    marginTop: hp(2)
  }
});
export default styles;