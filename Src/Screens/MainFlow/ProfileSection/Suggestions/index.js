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

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePersonal: '',
      phone: '',
      email: '',
      comment: '',
      section: '',
      search: ''
    };
  }

  render() {
    const { profilePersonal, phone, email, comment, section, search } = this.state
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper1}>
              <View style={Styles.gap} />
              <Text style={Styles.headerText}>{"الشكاوي والاقتراحات"}</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                <Image source={Images.backArrow} style={Styles.backIcon} />
              </TouchableOpacity>
            </View>
            {/* Search Bar */}
            <View style={Styles.searchBarContainer}>
              <View style={Styles.emailWrapper}>
                <TouchableOpacity >
                  <Image source={Images.searchIcon} style={Styles.sentStyles} />
                </TouchableOpacity>
                <TextInput
                  style={Styles.emailInput}
                  value={search}
                  placeholder={'ابحث هنا'}
                  writingDirection="rtl"
                  placeholderTextColor={"#0A572B"}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ search: value })
                  }}
                />
                <TouchableOpacity >
                  <Image source={Images.micIcon} style={Styles.micStyles} />
                </TouchableOpacity>
              </View>
              {/* Filter Button */}
              <TouchableOpacity style={Styles.filterButton}>
                <Image source={Images.filterIcon} style={Styles.filterStyles} />
              </TouchableOpacity>
            </View>
            {/* Search Bar Ends*/}
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              {/* profilePersonal */}
              <View style={Styles.emailWrapper1}>
                <TextInput
                  style={Styles.emailInput1}
                  value={profilePersonal}
                  placeholder={'اسم المستخدم'}
                  writingDirection="rtl"
                  placeholderTextColor={"#2F573F"}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ profilePersonal: value })
                  }}
                />
                <View style={Styles.inboxLine} />
                <TouchableOpacity >
                  <Image source={Images.profilePersonaly} style={Styles.sentStyles1} />
                </TouchableOpacity>
              </View>

              {/* Email */}
              <View style={Styles.emailWrapper1}>
                <TextInput
                  style={Styles.emailInput1}
                  value={email}
                  placeholder={'البريد الإلكتروني'}
                  writingDirection="rtl"
                  placeholderTextColor={"#2F573F"}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ email: value })
                  }}
                />
                <View style={Styles.inboxLine} />
                <TouchableOpacity >
                  <Image source={Images.editEmail} style={Styles.sentStyles2} />
                </TouchableOpacity>
              </View>

              {/* Flex Email */}
              <View style={Styles.flexEmailWrapper}>
                {/* رقم الهاتف */}
                <View style={Styles.flexEmailWrapperInner}>
                  <TextInput
                    style={Styles.flexEmailInput}
                    value={phone}
                    placeholder={"رقم الهاتف"}
                    writingDirection="rtl"
                    placeholderTextColor={"#0A572B"}
                    multiline={true}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ phone: value })
                    }}
                  />
                </View>
                {/* القسم */}
                <View style={Styles.flexEmailWrapperInner}>
                  <TextInput
                    style={Styles.flexEmailInput}
                    value={section}
                    placeholder={"القسم"}
                    writingDirection="rtl"
                    placeholderTextColor={"#0A572B"}
                    multiline={true}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ section: value })
                    }}
                  />
                  <TouchableOpacity >
                    <Image source={Images.dropDown} style={Styles.dropStyle} />
                  </TouchableOpacity>
                </View>


              </View>


              <View style={Styles.emailWrapperComplaint}>

                <TextInput
                  style={Styles.emailInputComplaint}
                  value={comment}
                  placeholder={"ضع الشكوى والاقتراحات هنا"}
                  writingDirection="rtl"
                  placeholderTextColor={"#0A572B"}
                  multiline={true}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ comment: value })
                  }}
                />

              </View>



              {/* Bottom Button */}
              <View style={Styles.bottomButtonWrapper}>
                <TouchableOpacity
                  // onPress={() => {
                  //   this.props.navigation.navigate('AuthStack', {
                  //     screen: 'LoginVisitor',

                  //   })}}
                  style={Styles.buttonContainer}>
                  <Text style={Styles.buttonText}>{"الإرسال"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => {
                  //   this.props.navigation.navigate('AuthStack', {
                  //     screen: 'LoginVisitor',

                  //   })}}
                  style={Styles.buttonContainer1}>
                  <Text style={Styles.buttonText1}>{"الإرسال في وقت لاحق"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

        </SafeAreaView>
      </>
    );
  }
}
export default withTranslation()(Suggestions)