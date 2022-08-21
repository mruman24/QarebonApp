import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import MyStatusBar from '../../../Components/HeaderStatusBar';
import VerificationWrapper from '../../../Components/VerificationWrapper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { verifyOTP } from '../../../Redux/Actions/auth';
import Toast from 'react-native-toast-message';
import Loader from "../../../Components/Loader";

class VerificationCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
    };
    this.moved = false;
  }

  firstValue = (value) => {
    this.setState({ pin1: value, bothEmpty: false })
  }
  secondValue = (value) => {
    this.setState({ pin2: value, bothEmpty: false })
  }
  thirdValue = (value) => {
    this.setState({ pin3: value, bothEmpty: false })
  }
  fourthValue = (value) => {
    this.setState({ pin4: value, bothEmpty: false })
  }
  // fifithValue = (value) => {
  //   this.setState({ pin5: value, bothEmpty: false })
  // }
  // sixthValue = (value) => {
  //   this.setState({ pin6: value, bothEmpty: false })
  // }

  submit = async () => {
    const { pin1, pin2, pin3, pin4 } = this.state
    const mobile = await AsyncStorage.getItem('mobile')
    // this.props.navigation.navigate('AuthStack', {
    //   screen: 'VerificationCode',
    // })
    if (pin1 == '' || pin2 == '' || pin3 == '' || pin4 == '') {
      Toast.show({
        type: 'errorToast',
        text1: "Error!",
        text2: 'الرمز غير صحيح'
      });
    }
    // else if (password == '') {
    //   Toast.show({
    //     type: 'errorToast',
    //     text1: "Error!",
    //     text2: 'اللقب مفقود'
    //   });
    // }
    else {

      let mergePins = ""
      mergePins = mergePins.concat(pin1)
      mergePins = mergePins.concat(pin2)
      mergePins = mergePins.concat(pin3)
      mergePins = mergePins.concat(pin4)


      const data = {
        mobileNumber: mobile,
        otp: mergePins
      }
      // console.log('VerificationCode', data)
      this.props.verifyOTP(data)
    }
  }

  render() {
    const { t } = this.props;
    const { loadingLogin } = this.props.auth
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper}>
              <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                <Image source={Images.backArrow} style={Styles.backIcon} />
              </TouchableOpacity>
              <Text style={Styles.headerText}>{t('ACTIVATE_ACCOUNT')}</Text>
              <View style={Styles.gap} />

            </View>
          </View>
          {/* Header Ends */}

          <Image source={Images.logo} style={Styles.logoHead} />
          <Text style={Styles.titleHead}>{Constants.ACTIVATION_CODE_NUMBER}</Text>
          <VerificationWrapper
            navigation={this.props.navigation}
            screen={''}
            value1={this.firstValue}
            value2={this.secondValue}
            value3={this.thirdValue}
            value4={this.fourthValue}
          // value5={this.fifithValue}
          // value6={this.sixthValue}
          />

          <TouchableOpacity
            onPress={this.submit}
            // onPress={() => {
            //   this.props.navigation.navigate('AuthStack', {
            //     screen: 'ConfirmationCode',

            //   })
            // }}
            style={Styles.buttonContainer}>
            <Text style={Styles.buttonText}>{"تؤكد"}</Text>
          </TouchableOpacity>
        </SafeAreaView>
          {
            loadingLogin == true ?
              <Loader /> : null
          }
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    verifyOTP: (user) => dispatch(verifyOTP(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(VerificationCode));