import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },
  modalCont: {
    height: hp('30%'),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(2),

  },
  surveyTitle: {
    textAlign: 'center',
    fontSize: hp(1.45),
    color: "#19673A",
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
  },
  buttonContainer: {
    marginTop: hp(2),
    alignSelf: 'center',
    width: hp(30),
    height: hp(6),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383561'
  },
  buttonText: {
    fontSize: hp(1.6),
    fontWeight: '500',
    fontFamily: 'Noto Sans Arabic',
    color: Colors.White
  },
  headImage: {
    width: hp(7),
    height: hp(7),
    marginBottom: hp(2),
    alignSelf: 'center'
  }
});

export default styles;