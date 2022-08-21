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
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import MyStatusBar from '../../../Components/HeaderStatusBar';
import ToggleSwitch from 'toggle-switch-react-native';
import { withTranslation } from 'react-i18next';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      firstToogle: true,
      secondToogle: false,
      thirdToogle: true,
      fourthToogle: false
    };
    this.moved = false;
  }

  render() {
    const { on, firstToogle, secondToogle, thirdToogle, fourthToogle } = this.state
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />

          {/* Header */}
          <View style={Styles.headerContainer}>
            <Text style={Styles.headerText}>{"الإعدادات"}</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              {/* السماح بوصول الإشعارات */}
              <View style={Styles.settingContainer}>
                <View style={Styles.settingInnerWrapper}>
                  <Text style={Styles.settingText}>{"السماح بوصول الإشعارات"}</Text>
                  <View style={{ marginTop: hp(1) }}>
                    <ToggleSwitch
                      isOn={on}
                      onColor={"#707070"}
                      offColor="#D1E1D8"
                      size={"medium"}
                      onToggle={isOn => this.setState({ on: isOn })}
                      thumbOffStyle={{ backgroundColor: "#629578" }}
                    />
                  </View>
                </View>
              </View>

              {/* Google   تسجيل الدخول باستخدام */}
              <View style={Styles.settingContainer}>
                <View style={Styles.settingInnerWrapper}>
                  <Text style={Styles.settingText}>{"Google   تسجيل الدخول باستخدام"}</Text>
                  <TouchableOpacity style={{ marginTop: hp(0.75) }}>
                    {
                      firstToogle == true ?
                        <Image source={Images.circleFilled} style={Styles.imageCircle} />
                        :
                        <Image source={Images.circle} style={Styles.imageCircle} />
                    }
                  </TouchableOpacity>
                </View>
              </View>

              {/* تسجيل الدخول باستخدام التويتر */}
              <View style={Styles.settingContainer}>
                <View style={Styles.settingInnerWrapper}>
                  <Text style={Styles.settingText}>{"تسجيل الدخول باستخدام التويتر"}</Text>
                  <TouchableOpacity style={{ marginTop: hp(0.85) }}>
                    {
                      secondToogle == true ?
                        <Image source={Images.circleFilled} style={Styles.imageCircle} />
                        :
                        <Image source={Images.circle} style={Styles.imageCircle} />
                    }
                  </TouchableOpacity>
                </View>
              </View>



              {/* إعدادات الحساب */}
              <View style={Styles.settingContainer}>
                <View style={Styles.settingInnerWrapper}>
                  <View>
                    <Text style={Styles.settingText}>{"إعدادات الحساب"}</Text>
                    <Text style={Styles.settingTextDes}>{"الاتصال , الأمان , إلغاء الحساب"}</Text>
                  </View>
                  <TouchableOpacity style={{ marginTop: hp(2) }}>

                    <Image source={Images.arrowRight} style={Styles.imageArrow} />

                  </TouchableOpacity>
                </View>
              </View>

              {/* إعدادات اللغة */}

              <View style={Styles.settingContainer}>
                <View style={Styles.settingInnerWrapper}>
                  <View>
                    <Text style={Styles.settingText}>{"إعدادات اللغة"}</Text>
                    <Text style={Styles.settingTextDes1}>{"اللغة العربية"}</Text>
                    <Text style={Styles.settingTextDes1}>{"اللغة الإنجليزية"}</Text>
                  </View>
                  <TouchableOpacity style={{ marginTop: hp(5) }}>

                    <Image source={Images.circleFilled} style={Styles.imageCircle} />
                    <Image source={Images.circle} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
                  </TouchableOpacity>
                </View>
              </View>


              {/* ألوان التطبيق */}
              <View style={Styles.settingContainer}>
                <View style={Styles.settingInnerWrapper}>
                  <View>
                    <Text style={Styles.settingText}>{"ألوان التطبيق"}</Text>
                    <Text style={Styles.settingTextDes1}>{"اللون الأخضر"}</Text>
                    <Text style={Styles.settingTextDes2}>{"اللون الكحلي"}</Text>
                  </View>
                  <TouchableOpacity style={{ marginTop: hp(5) }}>

                    <Image source={Images.circleFilled} style={Styles.imageCircle} />
                    <Image source={Images.circle} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
                  </TouchableOpacity>
                </View>
              </View>


            </View>
          </ScrollView>

        </SafeAreaView>
      </>
    );
  }
}
export default withTranslation()(Settings)