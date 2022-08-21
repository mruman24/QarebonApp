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
  tabContainer: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderBottomWidth: 1,
    borderBottomColor: "#8B8585"
  },
  tabInnerContainer: {
    marginTop: hp(1.5),
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  tabNameWrapper: {
    marginRight: hp(2)
  },
  tabNameWrapper1: {
    marginRight: hp(2),
    backgroundColor: "#5F9275",
    borderRadius: 5,
    justifyContent: 'center',
    // height: hp(4),
    // width: hp(8),
    alignItems: 'center',
    marginBottom: hp(0.5)
  },
  tabNameText: {
    fontSize: hp(1.6),
    fontWeight: '600',
    fontFamily: 'Noto Sans Arabic',
    color: "#041D0F"
  },
  inboxLine: {
    width: hp(0.1),
    height: hp(5),
    backgroundColor: '#D2CCCC',
    marginRight: hp(1.5)
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
  articleContainer: {
    marginTop: hp(1),
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
});
export default styles;