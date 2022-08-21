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
    marginBottom: hp(4)
  },
  headerContainer: {
    width: widthScreen,
    backgroundColor: 'rgba(15,97,50,0.71)'
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
  watchedImage: {
    width: widthScreen,
    alignSelf: "center",
    height: hp(20),
  },
  bookmarkStyle: {
    height: hp(4.5),
    width: hp(3),
    marginRight: hp(2),
    alignSelf: 'flex-end'
  },
  articleContainer: {
    width: widthScreen,
    alignSelf: 'center',
    marginTop: hp(2),
    backgroundColor: "#F5F5F5",
  },
  commentListContainer: {
    width: widthScreen,
    alignSelf: 'center',
    marginTop: hp(2),
    backgroundColor: "#F5F5F5",
  },
  socialWrapper: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1)
  },
  likeImage: {
    width: hp(2),
    height: hp(2),
    marginTop: hp(0.6),
    tintColor: '#383561'
  },
  commentImage: {
    width: hp(2),
    height: hp(2),
    marginTop: hp(0.8),
    tintColor: '#383561'
  },
  socialText: {
    fontSize: hp(1.7),
    fontWeight: '500',
    color: '#383561',
    fontFamily: 'Noto Sans Arabic',
    marginRight: hp(1)
  },
  socialButton: {
    width: hp(3),
    height: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#459466',
    borderRadius: 8,
    marginTop: hp(0.25)
  },
  buttonImage: {
    height: hp(2),
    width: hp(2)
  },
  newsWrapper: {
    width: '90%',
    alignSelf: "center",
    marginTop: hp(1),
    marginBottom: hp(1.5)
  },
  newsHead: {
    fontSize: hp(2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#092314",
    textAlign: 'left'
  },
  allDescriptionContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginTop: hp(1),
  },
  newsInnerHead: {
    fontSize: hp(1.4),
    fontWeight: '400',
    fontFamily: 'Noto Sans Arabic',
    color: "#0B3A1F",
    textAlign: 'left',
  },
  commentContainer: {
    marginTop: hp(4),
    backgroundColor: "#F5F5F5",
  },
  commentInnerContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(1.5)
  },
  commentHead: {
    fontSize: hp(1.4),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#15472B",
    textAlign: 'left'
  },
  emailWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 8,
    backgroundColor: Colors.White,
    height: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    width: widthScreen / 1.12,
    marginTop: hp(1),
    marginBottom: hp(1.5)
  },
  emailInput: {
    flex: 1,
    fontSize: hp(1.4),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#0A572B",
    marginLeft: hp(2),
    textAlign: 'right'
  },
  bottomButtonWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(1.5),
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
  commentListInner: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  profileWrapper: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(6),
    borderWidth: 1,
    borderColor: '#5F9275',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    width: hp(5),
    height: hp(5),
    borderRadius: hp(5),
  },
  profileName: {
    fontSize: hp(1.4),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#082E19",
    textAlign: 'left'
  },
  profileDes: {
    fontSize: hp(1.2),
    fontWeight: '400',
    fontFamily: 'Noto Sans Arabic',
    color: "#15472B",
    textAlign: 'left',
  },
  timeText: {
    fontSize: hp(1.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#B9B9B9",
    textAlign: 'center',
  },
  commentInnerSes: {
    fontSize: hp(1.2),
    fontWeight: '400',
    fontFamily: 'Noto Sans Arabic',
    color: "#343030",
    textAlign: 'left',
  },
  starContainer: {
    width: hp(7),
    marginTop: hp(1.4)
  }
});
export default styles;