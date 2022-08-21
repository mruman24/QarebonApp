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
  scrollContent: {
    marginBottom: hp(8)
  },
  headBackground: {
    width: widthScreen,
    height: hp(6)
  },
  setOpacity: {
    backgroundColor: 'rgba(59,117,84,0.44)',
    flex: 1,
    justifyContent: 'flex-end'
  },
  innerWrapper: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: hp(0.7),
    justifyContent: 'space-between'
  },
  notifyImage: {
    height: hp(2.5),
    width: hp(2.5),
    marginTop: hp(0.8)
  },
  qreebeenHead: {
    fontSize: hp(1.7),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White
  },
  searchBarContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  emailWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#F7F7F7",
    borderRadius: 8,
    backgroundColor: "#F7F7F7",
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
    borderColor: "#5F9275",
    borderRadius: 8,
    backgroundColor: "#5F9275",
    height: hp(6),
    width: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterStyles: {
    width: hp(3.5),
    height: hp(2.5)
  },
  sliderProducts: {
    marginTop: hp(3),
    justifyContent: 'center',
    alignItems: 'center'
  },
  sliderProductsItems: {
    width: widthScreen / 1.12,
    height: hp(15),
    alignSelf: "center",
    borderRadius: 15
  },
  tabContainer: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: "#383561"
  },
  tabInnerContainer: {
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  tabNameWrapper: {
    marginRight: hp(3)
  },
  tabNameText: {
    fontSize: hp(1.3),
    fontWeight: '400',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White
  },
  optionsTabContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  tabOptionNameWrapper: {
    marginRight: hp(1),
    justifyContent: 'center'
  },
  selectOptionWrapper: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8
  },
  selectOptionInnerWrapper: {
    margin: hp(0.5),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5F9275",
    borderRadius: 8,
  },
  combineInner: {
    margin: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counsultStyle: {
    width: hp(3),
    height: hp(3)
  },
  tabOptionNameText: {
    fontSize: hp(1.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White,
    textAlign: 'center',
    marginLeft: hp(1.5)
  },


  // Event

  listContainer: {
    width: widthScreen,
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    marginTop: hp(2)
  },
  listContainerInner: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: hp(1.5),
    justifyContent: 'space-between'
  },
  contentWrapper: {
    // marginTop: hp(1.5),
    flexDirection: 'row'
  },
  courseImage: {
    width: hp(10),
    height: hp(13),
    borderRadius: 8
  },
  titleCourse: {
    fontSize: hp(1.6),
    color: "#28583D",
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    textAlign: 'left'
  },
  desCourse: {
    fontSize: hp(1.4),
    color: "#447157",
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    marginTop: hp(0.4),
    textAlign: 'left'
  },
  socialButton: {
    width: hp(3),
    height: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383561',
    borderRadius: 8,
    marginTop: hp(0.25)
  },
  buttonImage: {
    height: hp(2),
    width: hp(2)
  },
  socialCourse: {
    fontSize: hp(1.3),
    color: "#383561",
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
  },
  socialCourse1: {
    // marginLeft: hp(4),
    fontSize: hp(1.3),
    color: "#548E6D",
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
  },
  bookmarkStyle: {
    height: hp(2.6),
    width: hp(2.3),
    marginRight: hp(2),
    alignSelf: 'flex-end'
  },
  timeStyle: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(0.5)
  }
});
export default styles;