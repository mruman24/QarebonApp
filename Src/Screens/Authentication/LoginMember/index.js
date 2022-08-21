import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import MyStatusBar from '../../../Components/HeaderStatusBar';
import { connect } from 'react-redux';
import { sendOTP } from '../../../Redux/Actions/auth';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from "../../../Components/Loader";

class LoginMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '+966553077566',
      email: '',
      password: '',
      seenPassword: false
    };
    this.moved = false;
  }

  visiblePassword = () => {
    this.setState({ seenPassword: !this.state.seenPassword })
  }

  submit = () => {
    const { userName, password } = this.state
    // this.props.navigation.navigate('AuthStack', {
    //   screen: 'VerificationCode',
    // })
    if (userName == '') {
      Toast.show({
        type: 'errorToast',
        text1: "Error!",
        text2: 'رقم الهاتف غير صحيح'
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
      const data = {
        mobileNumber: userName,
      }
      this.props.sendOTP(data)
      this.saveLoginData(userName)
    }
  }
  saveLoginData = async (res) => {
    try {
      //we want to wait for the Promise returned by AsyncStorage.setItem()
      //to be resolved to the actual value before returning the value
      await AsyncStorage.setItem('mobile', res)

    } catch (error) {
    }
    // Toast.show(res.message);
  }

  render() {
    const { userName, email, password, seenPassword } = this.state
    const { loadingRegister } = this.props.auth
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          <View style={Styles.mainContentConatiner}>
            <Image source={Images.logo} style={Styles.logoHead} />

            <Text style={Styles.titleHead}>{Constants.QREEBEEN_APP}</Text>
            <Text style={Styles.titleHeadDes}>{Constants.QREEBEEN_APP_DES}</Text>

            {/* User */}
            <View style={Styles.emailWrapper}>
              <TouchableOpacity>
                <Image source={Images.phoneCall} style={Styles.passwordStyles} />
              </TouchableOpacity>
              <View style={Styles.inboxLine} />
              <TextInput
                style={Styles.emailInput}
                value={userName}
                placeholder={'رقم الهاتف المحمول'}
                writingDirection="rtl"
                placeholderTextColor={"#5B7868"}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ userName: value })
                }}
              />
            </View>

            {/* Email */}
            {/* <View style={Styles.emailWrapper}>
              <TouchableOpacity>
                <Image source={Images.email} style={Styles.sentStyles} />
              </TouchableOpacity>
              <View style={Styles.inboxLine} />
              <TextInput
                style={Styles.emailInput}
                value={email}
                placeholder={'البريد الإلكتروني | رقم الهاتف'}
                writingDirection="rtl"
                placeholderTextColor={"#5B7868"}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ email: value })
                }}
              />
            </View> */}

            {/* Password */}
            {/* <View style={Styles.emailWrapper}>
              <TouchableOpacity>
                <Image source={Images.password} style={Styles.passwordStyles} />
              </TouchableOpacity>
              <View style={Styles.inboxLine} />
              <TextInput
                style={Styles.emailInput}
                value={password}
                placeholder={"كلمة المرور"}
                writingDirection="rtl"
                placeholderTextColor={"#5B7868"}
                secureTextEntry={seenPassword == false ? true : false}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ password: value })
                }}
              />
              <TouchableOpacity onPress={this.visiblePassword}>
                <Image source={seenPassword == false ? Images.hidePassword : Images.showPassword} style={Styles.seenPasswordStyles} />
              </TouchableOpacity>
            </View> */}

            <View style={Styles.infoMessageContent}>
              <TouchableOpacity>
                <Text style={Styles.infoText}>{Constants.SIGN_IN_AGREE}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={this.submit}
              style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>{Constants.SIGN_IN}</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
        {
          loadingRegister == true ?
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
    sendOTP: (user) => dispatch(sendOTP(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginMember);
