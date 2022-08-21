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
import { loginUser } from '../../../Redux/Actions/auth';
import Toast from 'react-native-toast-message';


class LoginMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
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
    this.props.navigation.navigate('AuthStack', {
      screen: 'VerificationCode',
    })
    // if (userName == '') {
    //   Toast.show({
    //     type: 'errorToast',
    //     text1: "Error!",
    //     text2: 'الاسم الأول مفقود'
    //   });
    // }
    // else if (password == '') {
    //   Toast.show({
    //     type: 'errorToast',
    //     text1: "Error!",
    //     text2: 'اللقب مفقود'
    //   });
    // }
    // else {
    //   const data = {
    //     username: userName,
    //     password: password,
    //   }
    //   this.props.loginUser(data)
    // }
  }

  render() {
    const { userName, email, password, seenPassword } = this.state
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
                <Image source={Images.user} style={Styles.passwordStyles} />
              </TouchableOpacity>
              <View style={Styles.inboxLine} />
              <TextInput
                style={Styles.emailInput}
                value={userName}
                placeholder={'اسم المستخدم أو رقم الموبايل'}
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
            <View style={Styles.emailWrapper}>
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
            </View>

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
    loginUser: (user) => dispatch(loginUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginMember);