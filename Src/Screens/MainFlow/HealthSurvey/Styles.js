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
    marginBottom: hp(7)
  },
  headerContainer: {
    width: widthScreen,
    backgroundColor: 'rgba(15,97,50,0.71)',
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: hp(2),
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
  flexEmailWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexEmailWrapperInner: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#9592B5",
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    height: hp(6),
    alignSelf: 'center',
    width: hp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2)
  },
  emailWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#F8F8F8",
    borderRadius: 8,
    backgroundColor: "#F8F8F8",
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    width: '80%',
  },
  emailInput: {
    flex: 1,
    fontSize: hp(1.6),
    fontWeight: '600',
    fontFamily: 'Noto Sans Arabic',
    color: "#0A572B",
    marginLeft: hp(2),
    textAlign: 'right'
  },
  sentStyles: {
    width: hp(2.5),
    height: hp(2.5),
    marginLeft: hp(1),
  },
  micStyles: {
    width: hp(1.5),
    height: hp(2.5),
    marginRight: hp(1),
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#F8F8F8",
    borderRadius: 8,
    backgroundColor: "#F8F8F8",
    height: hp(6),
    width: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterStyles: {
    width: hp(3.5),
    height: hp(2.5),
    tintColor: "#5F9275"
  },
  tabsStyle: {
    width: hp(2.5),
    height: hp(2.5),
    marginLeft: hp(1),
  },
  flexEmailInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionText: {
    fontSize: hp(1.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#383561",
    textAlign: 'left',
  },
  inboxLine1: {
    width: hp(0.1),
    height: hp(6),
    backgroundColor: '#80AE93',
    marginLeft: hp(1.5)
  },
  backIcon: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(1.3)
  },
  gap: {
    width: hp(3.5)
  },
  noteContainer: {
    marginTop: hp(2),
    backgroundColor: '#76B885',
  },
  noteWrapper: {
    marginTop: hp(1),
    marginBottom: hp(1),
    alignSelf: 'center',
    width: widthScreen / 1.12,
  },
  noteWrapperText: {
    fontSize: hp(1.4),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White,
    textAlign: 'left',
  },
  articleContainer: {
    marginTop: hp(1),
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  surveyListContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: "#707070",
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderRightWidth: 6,
    borderLeftWidth: 6,
    borderRightColor: "#176639",
    borderLeftColor: "#176639",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  surveyListWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
  surveyTitle: {
    textAlign: 'center',
    fontSize: hp(1.45),
    color: "#19673A",
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
  },
  surveyOptionWrapper: {
    width: '80%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  optionTextName: {
    fontSize: hp(1.4),
    color: "#19673A",
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    marginLeft: hp(1)
  }
});
export default styles;