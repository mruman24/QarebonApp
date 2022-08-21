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
import { guestLogin } from '../../../Redux/Actions/auth';
import Toast from 'react-native-toast-message';


class LoginVisitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { email, password } = this.state
    // this.props.navigation.navigate('BottomTabView', {
    //   screen: 'Home',
    // })
    if (email == '') {
      Toast.show({
        type: 'errorToast',
        text1: "Error!",
        text2: 'الاسم الأول مفقود'
      });
    }
    else if (password == '') {
      Toast.show({
        type: 'errorToast',
        text1: "Error!",
        text2: 'اللقب مفقود'
      });
    }
    else {
      const data = {
        firstName: email,
        lastName: password,
      }
      this.props.guestLogin(data)
    }
  }

  render() {
    const { email, password, seenPassword } = this.state
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          <View style={Styles.mainContentConatiner}>
            <Image source={Images.logo} style={Styles.logoHead} />

            <Text style={Styles.titleHead}>{Constants.QREEBEEN_APP}</Text>
            <Text style={Styles.titleHeadDes}>{Constants.QREEBEEN_APP_DES}</Text>

            {/* First Name */}
            <View style={Styles.emailWrapper}>
                <Image source={Images.user} style={Styles.passwordStyles} />
              <View style={Styles.inboxLine} />
              <TextInput
                style={Styles.emailInput}
                value={email}
                placeholder={'الاسم الاول'}
                writingDirection="rtl"
                placeholderTextColor={"#5B7868"}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ email: value })
                }}
              />



            </View>
            {/* Password */}
            <View style={Styles.emailWrapper}>
                <Image source={Images.user} style={Styles.passwordStyles} />
              <View style={Styles.inboxLine} />
              <TextInput
                style={Styles.emailInput}
                value={password}
                placeholder={"اللقب"}
                writingDirection="rtl"
                placeholderTextColor={"#5B7868"}
                // secureTextEntry={seenPassword == false ? true : false}
                autoCapitalize='none'
                onChangeText={(value) => {
                  this.setState({ password: value })
                }}
              />
              {/* <TouchableOpacity onPress={this.visiblePassword}>
                <Image source={seenPassword == false ? Images.hidePassword : Images.showPassword} style={Styles.seenPasswordStyles} />
              </TouchableOpacity> */}

            </View>

            {/* <View style={Styles.infoMessageContent}>
              <TouchableOpacity>
                <Text style={Styles.infoText}>{Constants.FORGOT_PASSWORD}</Text>
              </TouchableOpacity>
            </View> */}

            <TouchableOpacity
              onPress={this.submit}
              style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>{Constants.SIGN_IN}</Text>
            </TouchableOpacity>

            <View style={Styles.socialWrapperContainer}>
              <View style={Styles.divider} />
              <Text style={Styles.dividerText}>{Constants.SOCIAL_LOGIN_TEXT}</Text>
              <View style={Styles.divider} />
            </View>

            <View style={Styles.socialIconWrapper}>
              <TouchableOpacity>
                <Image source={Images.twitterIcon} style={Styles.socialImage} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.googleIcon} style={Styles.socialImage} />
              </TouchableOpacity>
            </View>

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
    guestLogin: (user) => dispatch(guestLogin(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginVisitor); 