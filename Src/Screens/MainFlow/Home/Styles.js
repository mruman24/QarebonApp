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
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  tabOptionNameWrapper: {
    marginRight: hp(2),
    justifyContent: 'center'
  },
  tabOptionNameText: {
    fontSize: hp(1.1),
    fontWeight: '400',
    fontFamily: 'Noto Sans Arabic',
    color: "#0F512B",
    marginTop: hp(0.7),
    textAlign: 'center'
  },
  selectOptionWrapper: {
    width: hp(8.5),
    height: hp(8.5),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#629478',
    borderRadius: 8
  },
  selectOptionNoWrapper: {
    width: hp(7),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8
  },
  optionTabImage: {
    width: hp(3),
    height: hp(3)
  },
  articlesNameContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  articleTitle: {
    color: "#062613",
    fontSize: hp(2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
  },
  titleLine: {
    marginTop: hp(0.1),
    width: hp(9),
    height: hp(0.4),
    borderRadius: 15,
    backgroundColor: "#9FD2B4",
    alignSelf: 'flex-end'
  },
  viewAll: {
    color: "#86B79A",
    fontSize: hp(1.5),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    marginTop: hp(0.5)
  },
  articleContainer: {
    marginTop: hp(1),
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
 videoContainer: {
    marginTop: hp(1),
    width: widthScreen,
    alignSelf: 'center',
  },
});
export default styles;