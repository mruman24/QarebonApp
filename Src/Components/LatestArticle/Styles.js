import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  articleContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2),
    backgroundColor: "#F5F5F5",
    borderRadius: 8
  },
  watchedImage: {
    width: '100%',
    alignSelf: "center",
    height: hp(20)
  },
  bookmarkStyle: {
    height: hp(4.5),
    width: hp(3),
    marginRight: hp(2),
    alignSelf: 'flex-end'
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
    marginTop: hp(0.6),
  },
  newsInnerWrapper: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(0.8),
    justifyContent: 'space-between',
    marginBottom: hp(1.5)
  },
  newsHead: {
    fontSize: hp(1.5),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#092314",
    textAlign: 'left'
  },
  newsInnerHead: {
    fontSize: hp(1.1),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#0B3A1F",
    textAlign: 'left',
    width: '85%'
  },
  newsDes: {
    fontSize: hp(1),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: "#979797",
    marginTop: hp(2),
    // marginLeft: hp(2)
  }
});
export default styles;