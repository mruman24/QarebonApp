import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  chatMessageWrapper: {
    // flexDirection: 'row',
    justifyContent: "flex-start",
    // paddingBottom: 10,
  },
  receivedWrapper: {
    // justifyContent: "flex-start",
  },
  chatMessageInner: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    alignItems: 'flex-end'
    // padding: 0 10,

  },
  receivedInnerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },

  avatarName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ImageChecing: {
    height: 10,
    width: 20,
    marginTop: 10,
  },
  textName: {
    margin: 0,
    // marginLeft: 10,
    fontSize: 13,
    color: Colors.textColor,
    fontWeight: "500"
  },
  textName1: {
    // margin: 0,
    marginLeft: 10,
    fontSize: 13,
    color: Colors.textColor,
    fontWeight: "500"
  },
  chatMessageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 10,

  },
  DateWrapper: {
    // marginLeft: 'auto',
    fontSize: 12,
    fontWeight: '700',
    color: "#C5C4C4",
    marginTop: 10,
    marginLeft: 10,
  },
  DateWrapper1: {
    fontSize: 12,
    fontWeight: '700',
    color: "#C5C4C4",
    marginTop: 10,
    marginRight: 10,
    textAlign: 'left',
    marginLeft: 10
  },
  chatMessageHeaderText: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 12,
    backgroundColor: "#F2F2F2"
  },
  chatMessageHeaderText1: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 12,
    backgroundColor: "#F2F2F2",
    marginRight: hp(4)
  },
  chatMessageHeaderImage1: {
    width: 100,
    height: 100,
    borderRadius: 12

  },
  chatMessageHeaderImage: {
    width: 100,
    height: 100,
    borderRadius: 12

  },
  ImageContainer: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(6),
  },
  starContainer: {
    width: hp(7),
    marginLeft: hp(2),
    marginRight: hp(2),
    marginTop: hp(1.8)
  }
});
export default styles;