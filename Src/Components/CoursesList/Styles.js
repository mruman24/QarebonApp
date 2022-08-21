import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({

  listContainer: {
    width: widthScreen / 1.12,
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    marginTop: hp(2),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#5F9275",
    borderRightWidth: 4,
    borderLeftWidth: 4,
    borderLeftColor: "#629377",
    borderRightColor: "#629377",
  },
  listContainerInner: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: hp(1.5),
    marginTop: hp(1.5),
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
    fontSize: hp(1.4),
    color: "#28583D",
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    textAlign: 'left'
  },
  desCourse: {
    fontSize: hp(1.15),
    color: "#609276",
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
    marginLeft: hp(4),
    fontSize: hp(1.3),
    color: "#383561",
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
  },
  bookmarkStyle: {
    height: hp(2.6),
    width: hp(2.3),
    marginRight: hp(2),
    alignSelf: 'flex-end'
  },
  starContainer: {
    width: hp(7),
    marginTop: hp(1.4)
  }
});
export default styles;