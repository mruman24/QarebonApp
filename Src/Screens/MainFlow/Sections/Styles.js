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
    backgroundColor: '#548E6D'
  },
  headerText: {
    fontSize: hp(2.2),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White,
    textAlign: 'center',
    marginTop: hp(2),
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
  watchedImage: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    height: hp(15),
    marginTop: hp(3)
  },
  setOpacity: {
    backgroundColor: 'rgba(84,142,109,0.70)',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center'
  },
  innerSectionText: {
    fontSize: hp(2.4),
    fontWeight: '700',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White,
    textAlign: 'center',
  },
});
export default styles;