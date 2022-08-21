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

class FrequestlyQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePersonal: '',
      phone: '',
      email: '',
      comment: '',
      search: '',
      availableJobs: '',
      tabs: 1,
      questionsData: [
        "هل من الممكن صرف دواء نفسي عن طريق الاستشارات النصية ؟",
        "هل من الممكن صرف دواء نفسي عن طريق الاستشارات النصية ؟",
        "هل من الممكن صرف دواء نفسي عن طريق الاستشارات النصية ؟",
        "هل من الممكن صرف دواء نفسي عن طريق الاستشارات النصية ؟",
        "هل من الممكن صرف دواء نفسي عن طريق الاستشارات النصية ؟",
        "هل من الممكن صرف دواء نفسي عن طريق الاستشارات النصية ؟",
        "هل من الممكن صرف دواء نفسي عن طريق الاستشارات النصية ؟",
      ],
      questionsTab: null,
      listColumn: 1
    };
  }

  clickTabs = (num) => {
    this.setState({ tabs: num })
  }

  clickQuestion = (key) => {
    this.setState({ questionsTab: key })
  }

  questionsList = (item, index) => {
    const { questionsTab } = this.state
    return (
      <>
        <TouchableOpacity onPress={() => { this.clickQuestion(index) }}
          key={index} style={[Styles.listContainer, { backgroundColor: questionsTab == index ? "#548E6D" : "#F5F5F5", }]}>
          {/* <View style={Styles.listWrapper}> */}
          <Text style={[Styles.title, { color: questionsTab == index ? Colors.White : "#2F573F" }]}>{item}</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={[Styles.inboxLine, {
              backgroundColor: questionsTab == index ? Colors.White : '#80AE93',
            }]} />
            <Image source={Images.information} style={[Styles.imageShow, {
              width: hp(1.8),
              height: hp(3),
              tintColor: questionsTab == index ? Colors.White : "#548E6D"
            }]} />

          </View>
        </TouchableOpacity>
        {
          questionsTab == index ?

            <View style={Styles.showTextAnswer}>
              <View style={Styles.listWrapper}>
                <Text style={Styles.titleAnswer}>{Constants.QUESTION_ASWER}</Text>
              </View>
            </View>
            : null
        }
      </>
    )
  }


  render() {
    const { profilePersonal, phone, email, comment,
      availableJobs, search, tabs, questionsData, listColumn } = this.state
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper1}>
              <View style={Styles.gap} />
              <Text style={Styles.headerText}>{"الأسئلة الشائعة"}</Text>
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

              {/* Tabs Container */}
              <View style={Styles.flexEmailWrapper}>
                {/* 1 */}
                <TouchableOpacity onPress={() => { this.clickTabs(1) }}
                  style={[Styles.flexEmailWrapperInner, {
                    backgroundColor: tabs == 1 ? "#383561" : "#F5F5F5"
                  }]}>
                  <Image source={Images.frequestlyQuestions} style={[Styles.tabsStyle, {
                    tintColor: tabs == 1 ? Colors.White : "#383561"
                  }]} />
                  <View style={[Styles.inboxLine1, {
                    backgroundColor: tabs == 1 ? Colors.White : "#383561"
                  }]} />
                  <View style={Styles.flexEmailInput}>
                    <Text style={[Styles.optionText, {
                      color: tabs == 1 ? Colors.White : "#383561"
                    }]}>{"اطرح سؤالك"}</Text>
                  </View>
                </TouchableOpacity>
                {/* 2 */}
                <TouchableOpacity onPress={() => { this.clickTabs(2) }}
                  style={[Styles.flexEmailWrapperInner, {
                    backgroundColor: tabs == 2 ? "#383561" : "#F5F5F5"
                  }]}>
                  <Image source={Images.commonQuestion} style={[Styles.tabsStyle, {
                    tintColor: tabs == 2 ? Colors.White : "#383561"
                  }]} />
                  <View style={[Styles.inboxLine1, {
                    backgroundColor: tabs == 2 ? Colors.White : "#383561"
                  }]} />
                  <View style={Styles.flexEmailInput}>
                    <Text style={[Styles.optionText, {
                      color: tabs == 2 ? Colors.White : "#383561"
                    }]}>{"الأسئلة الشائعة"}</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Tabs Container Ends */}

              {
                tabs == 1 ?
                  <>


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

                    {/* phone */}
                    <View style={Styles.emailWrapper1}>
                      <TextInput
                        style={Styles.emailInput1}
                        value={phone}
                        placeholder={'رقم الهاتف'}
                        writingDirection="rtl"
                        placeholderTextColor={"#2F573F"}
                        autoCapitalize='none'
                        onChangeText={(value) => {
                          this.setState({ phone: value })
                        }}
                      />
                      <View style={Styles.inboxLine} />
                      <TouchableOpacity >
                        <Image source={Images.phoneCall} style={Styles.sentStyles3} />
                      </TouchableOpacity>
                    </View>



                    {/* available Jobs */}
                    <View style={Styles.emailWrapper1}>
                      <TextInput
                        style={Styles.emailInput1}
                        value={availableJobs}
                        placeholder={'القسم'}
                        writingDirection="rtl"
                        placeholderTextColor={"#2F573F"}
                        autoCapitalize='none'
                        onChangeText={(value) => {
                          this.setState({ availableJobs: value })
                        }}
                      />
                      <Image source={Images.arrowRight} style={Styles.imageArrow} />
                    </View>



                    <View style={Styles.emailWrapperComplaint}>

                      <TextInput
                        style={Styles.emailInputComplaint}
                        value={comment}
                        placeholder={"يمكنك هنا كتابة مضمون رسالة التوظيف"}
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
                  </>
                  :
                  questionsData.length > 0 ?
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      key={listColumn}
                      horizontal={false}
                      scrollEnabled={false}
                      numColumns={listColumn}
                      data={questionsData}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item, index }) => this.questionsList(item, index)}
                    />
                    : null
              }
            </View>
          </ScrollView>

        </SafeAreaView>
      </>
    );
  }
}
export default withTranslation()(FrequestlyQuestions)