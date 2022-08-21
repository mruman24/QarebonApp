import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList
} from 'react-native';
import Styles from './Styles';
import Images from '../../../../Styles/Images';
import Colors from '../../../../Styles/Colors';
import * as Constants from '../../../../Constants';
import MyStatusBar from '../../../../Components/HeaderStatusBar';
import { withTranslation } from 'react-i18next';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../../../Redux/Actions/datalist';
import Loader from "../../../../Components/Loader";
import Toast from 'react-native-toast-message';


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePersonal: '',
      phone: '',
      email: '',
      gender: '',
      date: ''
    };
  }
  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener('focus', async () => {
      const userProfile = this.props.datalist?.userProfile
      this.setState({
        profilePersonal: userProfile?.firstName ? `${userProfile?.firstName} ${userProfile?.lastName}` : '',
        phone: userProfile?.mobileNumber ? userProfile?.mobileNumber : '',
        email: userProfile?.email ? userProfile?.email : '',
        gender: userProfile?.gender ? userProfile?.gender : '',
        date: userProfile?.age ? userProfile?.age : '',
      })
    })
  }
  selectGender = (name) => {
    const { gender } = this.state
    if (name == gender) {
      this.setState({ gender: '' })
    } else {
      this.setState({ gender: name })
    }
  }
  save = () => {
    const { profilePersonal, phone, email, gender, date } = this.state
    const token = this.props.auth?.loginEmail?.accessToken
    const id = this.props.auth?.loginEmail?.id
    let splitName = profilePersonal.split(" ");
    if (profilePersonal == "" || phone == "" || email == "" || gender == "" || date == "") {
      Toast.show({
        type: 'errorToast',
        text1: "Error Missing!",
        text2: 'Check all the Fields Something Missing'
      });
    } else {

      const data = {
        firstName: splitName[0],
        lastName: splitName[1],
        mobileNumber: phone,
        email: email,
        gender: gender,
        age: parseInt(date),
        token: token,
        id: id
      }
      this.props.updateUserProfile(data)
    }
  }
  render() {
    const { profilePersonal, phone, email, gender, date } = this.state
    const userProfile = this.props.datalist?.userProfile
    const { loadingUserEdit } = this.props.datalist
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper1}>
              <View style={Styles.gap} />
              <Text style={Styles.headerText}>{"الملف الشخصي"}</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                <Image source={Images.backArrow} style={Styles.backIcon} />
              </TouchableOpacity>

            </View>
          </View>
          <TouchableOpacity style={Styles.headerWrapper}>
            {userProfile?.image ?
              <Image source={Images.profilePic} style={Styles.picImageStyle} />
              :
              <View style={Styles.userProfileWrapper}>
                <Text style={Styles.userProfileText}>{`${userProfile?.firstName?.[0]?.toUpperCase()}${userProfile?.firstName?.[1]?.toUpperCase()}`}</Text>
              </View>
            }
          </TouchableOpacity>
          {/* Header Ends */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              {/* الملف الشخصي */}
              <View style={Styles.mainTitleContainer}>
                <Text style={Styles.title}>{"الملف الشخصي"}</Text>
                <TouchableOpacity>
                  <Image source={Images.edit} style={Styles.editImage} />
                </TouchableOpacity>
              </View>

              <View style={Styles.emailWrapper}>

                <TextInput
                  style={Styles.emailInput}
                  value={profilePersonal}
                  placeholder={'محمد عبد اللطيف راشد'}
                  writingDirection="rtl"
                  placeholderTextColor={"#A2B9AC"}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ profilePersonal: value })
                  }}
                />
              </View>
              <View style={Styles.seperator} />

              {/* رقم الهاتف */}
              <View style={Styles.mainTitleContainer}>
                <Text style={Styles.title}>{"رقم الهاتف"}</Text>
                <TouchableOpacity>
                  <Image source={Images.edit} style={Styles.editImage} />
                </TouchableOpacity>
              </View>

              <View style={Styles.emailWrapper}>

                <TextInput
                  style={Styles.emailInput}
                  value={phone}
                  placeholder={'000 000 000 000 00'}
                  writingDirection="rtl"
                  placeholderTextColor={"#A2B9AC"}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ phone: value })
                  }}
                />
              </View>
              <View style={Styles.seperator} />


              {/* البريد الإلكتروني */}
              <View style={Styles.mainTitleContainer}>
                <Text style={Styles.title}>{"البريد الإلكتروني"}</Text>
                <TouchableOpacity>
                  <Image source={Images.edit} style={Styles.editImage} />
                </TouchableOpacity>
              </View>

              <View style={Styles.emailWrapper}>

                <TextInput
                  style={Styles.emailInput}
                  value={email}
                  placeholder={'Moh-mmed123@hotmail.com'}
                  writingDirection="rtl"
                  placeholderTextColor={"#A2B9AC"}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ email: value })
                  }}
                />
              </View>
              <View style={Styles.seperator} />


              {/* كلمة المرور */}
              <View style={Styles.mainTitleContainer}>
                <Text style={Styles.title}>{"كلمة المرور"}</Text>
                <TouchableOpacity>
                  <Image source={Images.edit} style={Styles.editImage} />
                </TouchableOpacity>
              </View>

              {/* <View style={Styles.emailWrapper}>

                <TextInput
                  style={Styles.emailInput}
                  value={password}
                  placeholder={'*************'}
                  writingDirection="rtl"
                  placeholderTextColor={"#A2B9AC"}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ password: value })
                  }}
                />
              </View> */}
              <View style={Styles.checkBoxContainer}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={Styles.optionText}>{"ذكر"}</Text>
                  <TouchableOpacity onPress={() => { this.selectGender('male') }}>
                    {
                      gender == "male" ?
                        <Image source={Images.circleFilled} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
                        :
                        <Image source={Images.circle} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
                    }
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: hp(7) }}>
                  <Text style={Styles.optionText}>{"أنثى"}</Text>
                  <TouchableOpacity onPress={() => { this.selectGender('female') }}>
                    {
                      gender == "female" ?
                        <Image source={Images.circleFilled} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
                        :
                        <Image source={Images.circle} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
                    }
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Styles.seperator} />


              {/* تاريخ الميلاد */}
              {/* Age */}
              <View style={Styles.mainTitleContainer}>
                <Text style={Styles.title}>{"سن"}</Text>
                <TouchableOpacity>
                  <Image source={Images.edit} style={Styles.editImage} />
                </TouchableOpacity>
              </View>

              <View style={Styles.emailWrapper}>

                <TextInput
                  style={Styles.emailInput}
                  value={date}
                  placeholder={'25'}
                  writingDirection="rtl"
                  placeholderTextColor={"#A2B9AC"}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ date: value })
                  }}
                />
              </View>
              <View style={Styles.seperator} />

            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={this.save}
            // onPress={() => {
            //   this.props.navigation.navigate('AuthStack', {
            //     screen: 'ConfirmationCode',

            //   })
            // }}
            style={Styles.buttonContainer}>
            <Text style={Styles.buttonText}>{"تحديث البيانات"}</Text>
          </TouchableOpacity>

        </SafeAreaView>
        {loadingUserEdit == true ? <Loader /> : null}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    datalist: state.datalist,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserProfile: (user) => dispatch(updateUserProfile(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(EditProfile));

