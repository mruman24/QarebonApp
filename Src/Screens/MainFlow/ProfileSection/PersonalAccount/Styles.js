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
  headerText: {
    fontSize: hp(2.2),
    marginTop: hp(2),
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
    color: "#2F573F",
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
  gap: {
    width: hp(3.5)
  },
  dropStyle: {
    width: hp(3),
    height: hp(2.5),
    marginRight: hp(1.5),
    marginTop: hp(0.5),
    tintColor: Colors.White
  },
});
export default styles;