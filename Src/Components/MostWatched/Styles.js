import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({

  watchedImage: {
    width: widthScreen / 1.35,
    alignSelf: "center",
    height: hp(23)
  },
  setOpacity: {
    backgroundColor: 'rgba(69,148,102,0.30)',
    flex: 1,
    borderRadius: 10
    // justifyContent: 'flex-end'
  },
  bookmarkStyle: {
    height: hp(4.5),
    width: hp(3),
    marginRight: hp(2),
    alignSelf: 'flex-end'
  },
  socialContainer: {
    justifyContent: 'flex-end',
    flex: 0.7
  },
  socialContainer1: {
    flex: 0.2,
  },
  socialWrapper: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: hp(0.5),
    justifyContent: 'space-between'
  },
  likeImage: {
    width: hp(2),
    height: hp(2),
    marginTop: hp(0.6)
  },
  commentImage: {
    width: hp(2),
    height: hp(2),
    marginTop: hp(0.8)
  },
  socialText: {
    fontSize: hp(1.7),
    fontWeight: '500',
    color: Colors.White,
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
    width: widthScreen / 1.35,
    alignSelf: "center",
    backgroundColor: '#F5F5F5',
    height: hp(7),
    justifyContent: 'center',
    marginTop: hp(-2),
    borderRadius: 8
  },
  newsInnerWrapper: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  newsHead: {
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#0B3A1F"
  },
  newsDes: {
    fontSize: hp(1.3),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#979797",
    marginTop: hp(0.5),
    marginLeft: hp(2)
  }
});
export default styles;