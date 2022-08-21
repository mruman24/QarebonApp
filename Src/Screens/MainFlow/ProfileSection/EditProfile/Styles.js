import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../../Styles/Colors';
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
    backgroundColor: 'rgba(15,97,50,0.71)',
    height: hp(20)
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(-8.5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerWrapper1: {
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
    color: Colors.White,
    textAlign: 'center'
  },
  picImageStyle: {
    width: hp(15),
    height: hp(15),
    borderRadius: hp(15),
    borderWidth: 1,
    borderColor: '#548E6D'
  },
  userProfileWrapper: {
    width: hp(15),
    height: hp(15),
    borderRadius: hp(15),
    borderWidth: 1,
    borderColor: '#548E6D',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfileText: {
    fontSize: hp(3.5),
    fontWeight: '700',
    fontFamily: 'Noto Sans Arabic',
    color: "#548E6D",
  },
  scrollContent: {
    marginBottom: hp(6),
    marginTop: hp(2)
  },
  listContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: hp(6),
    // justifyContent: 'center',
    marginTop: hp(2),
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#80AE93",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listWrapper: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  inboxLine: {
    width: hp(0.1),
    height: hp(6),
    backgroundColor: '#80AE93',
    marginLeft: hp(1.5)
  },
  imageShow: {
    width: hp(3.5),
    height: hp(3.5),
    marginLeft: hp(1.5),
    marginTop: hp(1.3)
  },
  title: {
    color: "#2A583E",
    fontSize: hp(2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
  },
  imageArrow: {
    width: hp(2),
    height: hp(3),
    marginTop: hp(0.5),
    marginRight: hp(1.5)
  },
  backIcon: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(1.3)
  },
  gap: {
    width: hp(3.5)
  },
  mainTitleContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  editImage: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(1.3)
  },
  emailWrapper: {
    flexDirection: 'row',
    borderColor: Colors.White,
    borderRadius: 8,
    backgroundColor: Colors.White,
    height: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.12,
    marginTop: hp(0.1)
  },
  emailInput: {
    flex: 1,
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#A2B9AC",
    marginLeft: hp(0.5),
    textAlign: 'right'
  },
  seperator: {
    marginTop: hp(1),
    width: widthScreen,
    height: hp(0.2),
    backgroundColor: "#D9D9D9"
  },

  buttonContainer: {
    marginBottom: hp(2.5),
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
  checkBoxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.12,
    // justifyContent: 'space-evenly'
  },
});
export default styles;