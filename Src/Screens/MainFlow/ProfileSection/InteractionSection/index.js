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

class InteractionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tabs: 1,
      listColumn: 1,
      tabNameData: [
        { name: "أرسل مقالك" },
        { name: "صورة أثرت بك" },
        { name: "طمنا عنك" },
        { name: "الاستبيانات" },
        { name: "تغريدات اللجنة" },
        { name: "أصوات للاسترخاء" },
      ],
      trainingData: [
        { name: "اسم الدورة التدريبية" },
        { name: "التخطيط الاستراتيجي وفوائده" },
        { name: "اسم الدورة التدريبية" },
        { name: "اسم الدورة التدريبية" },
        { name: "اسم الدورة التدريبية" },
        { name: "اسم الدورة التدريبية" },
      ],
      attachCV: '',
      comment: ''
    };
  }

  clickTabs = (num) => {
    this.setState({ tabs: num })
  }

  showTabContainer = (item, index) => {
    return (
      <>
        <TouchableOpacity key={index}
          style={Styles.tabNameWrapper}>
          <Text style={Styles.tabNameText}>{item?.name}</Text>
        </TouchableOpacity>
      </>
    )
  }

  trainingList = (item, index) => {
    return (
      <>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('ProfileStack', {
            screen: 'InteractionDetail',
          })
        }}
          style={Styles.listContainer}>
          <Image source={Images.bookmark} style={Styles.bookmarkStyle} />
          <View style={Styles.listContainerInner}>

            <View style={Styles.contentWrapper}>
              <Image source={Images.trainingList} style={Styles.courseImage} />
              <View style={{ marginLeft: hp(2) }}>
                <Text style={Styles.titleCourse}>{item.name}</Text>
                <Text style={Styles.desCourse}>{"توصيف مناسب ومختصر جدا للدورة التدريبية"}</Text>

                <View style={{ flexDirection: 'row', marginTop: hp(0.4) }}>
                  <Text style={Styles.socialCourse}>{"تصنيف الدورة"}</Text>
                  <Text style={Styles.socialCourse1}>{"مؤديّ الدورة"}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: hp(0.4) }}>
                  <TouchableOpacity style={Styles.socialButton}>
                    <Image source={Images.like} style={Styles.buttonImage} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[Styles.socialButton, { marginLeft: hp(1) }]}>
                    <Image source={Images.comment} style={Styles.buttonImage} />
                  </TouchableOpacity>
                </View>

              </View>
            </View>

          </View>
        </TouchableOpacity>
      </>
    )
  }

  render() {
    const {
      search, tabs, listColumn, trainingData, tabNameData,
      attachCV, comment
    } = this.state
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper1}>
              <View style={Styles.gap} />
              <Text style={Styles.headerText}>{tabs == 1 ? "صورة أثرت بك" : "صورة أثرت بآخرين"}</Text>
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
              <View style={Styles.tabContainer}>
                <View style={Styles.tabInnerContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={tabNameData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => this.showTabContainer(item, index)}
                  />
                </View>
              </View>

              {/* Tabs Container */}
              <View style={Styles.flexEmailWrapper}>
                {/* 1 */}
                <TouchableOpacity onPress={() => { this.clickTabs(1) }}
                  style={[Styles.flexEmailWrapperInner, {
                    backgroundColor: tabs == 1 ? "#548E6D" : "#F5F5F5"
                  }]}>
                  <Text style={[Styles.optionText, {
                    color: tabs == 1 ? Colors.White : "#2F573F"
                  }]}>{"صورة أثرت بك"}</Text>
                </TouchableOpacity>
                {/* 2 */}
                <TouchableOpacity onPress={() => { this.clickTabs(2) }}
                  style={[Styles.flexEmailWrapperInner, {
                    backgroundColor: tabs == 2 ? "#548E6D" : "#F5F5F5"
                  }]}>
                  <Text style={[Styles.optionText, {
                    color: tabs == 2 ? Colors.White : "#2F573F"
                  }]}>{"صورة أثرت بآخرين"}</Text>
                </TouchableOpacity>
              </View>

              {/* Tabs Container Ends */}

              {
                tabs == 1 ?
                  <>

                    {/* attachCV */}
                    <View style={Styles.emailWrapper1}>
                      <TextInput
                        style={Styles.emailInput1}
                        value={attachCV}
                        placeholder={'استخدم هنا عنواناً مناسباً لصورة '}
                        writingDirection="rtl"
                        placeholderTextColor={"#2F573F"}
                        autoCapitalize='none'
                        onChangeText={(value) => {
                          this.setState({ attachCV: value })
                        }}
                      />
                      <View style={Styles.inboxLine} />
                      <TouchableOpacity >
                        <Image source={Images.attach} style={Styles.sentStyles3} />
                      </TouchableOpacity>
                    </View>

                    <View style={Styles.emailWrapperComplaint}>

                      <TextInput
                        style={Styles.emailInputComplaint}
                        value={comment}
                        placeholder={"ضع تعليقك هنا على الصورة"}
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

                  <FlatList
                    showsVerticalScrollIndicator={false}
                    key={listColumn}
                    horizontal={false}
                    scrollEnabled={false}
                    numColumns={listColumn}
                    data={trainingData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => this.trainingList(item, index)}
                  />
              }
            </View>
          </ScrollView>

        </SafeAreaView>
      </>
    );
  }
}
export default withTranslation()(InteractionSection)
