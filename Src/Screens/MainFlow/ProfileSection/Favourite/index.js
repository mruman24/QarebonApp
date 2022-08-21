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
import LatestArticle from '../../../../Components/LatestArticle';
import InfoArticle from '../../../../Components/InfoArticle';

class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tabNameData: [
        { name: "المقالات" },
        { name: "الدورات التدريبية" },
        { name: "الانفوجرافيك" },
        { name: "الاستشارات" },
        { name: "صورة أثرت بك" },
      ],
      tab: 2,
      listColumn: 1,
      trainingData: [
        { name: "اسم الدورة التدريبية" },
        { name: "التخطيط الاستراتيجي وفوائده" },
        { name: "اسم الدورة التدريبية" },
        { name: "اسم الدورة التدريبية" },
        { name: "اسم الدورة التدريبية" },
        { name: "اسم الدورة التدريبية" },
      ],
      optionTab2List: [
        { pic: Images.psychological_counseling_4, name: "نصائح لنقل الأخبار السيئة للأطفال بدون ترك آثار سلبية" },
        { pic: Images.psychological_counseling_2, name: "مساوئ استخدام التعسف الوظيفي ونتائجه المستقبلية" },
        { pic: Images.psychological_counseling_3, name: "كيف أحمي أولاديّ من آفة التنمر المدرسيّ " },
      ],
      infoList: [
        { pic: Images.infoGraphic_counseling_1, name: "أعراض الإصابة باضطراب تعدد الشخصيات" },
        { pic: Images.infoGraphic_counseling_2, name: "المشاكل الزوجية بين المشاكل والحلول" },
        { pic: Images.infoGraphic_counseling_3, name: "الفصام والاختلالات العقلية" },
      ],
      eventsData: [
        { name: "1# استشارة " },
        { name: "2# استشارة " },
        { name: "3# استشارة " },
        { name: "4# استشارة " },
        { name: "5# استشارة " },
        { name: "6# استشارة " },
        { name: "7# استشارة " },
        { name: "8# استشارة " },
        { name: "9# استشارة " },
        { name: "10# استشارة " },
      ]
    };
  }

  selectTab = (key) => {
    this.setState({ tab: key })
  }

  selectGender = (name) => {
    const { gender } = this.state
    if (name == gender) {
      this.setState({ gender: '' })
    } else {
      this.setState({ gender: name })
    }
  }
  showTabContainer = (item, index) => {
    return (
      <>
        <TouchableOpacity onPress={() => { this.selectTab(index) }}
          key={index}
          style={Styles.tabNameWrapper}>
          <Text style={Styles.tabNameText}>{item?.name}</Text>
        </TouchableOpacity>
      </>
    )
  }
  trainingList = (item, index) => {
    return (
      <>
        <View style={Styles.listContainer}>
          <Image source={Images.bookmark} style={Styles.bookmarkStyle} />
          <View style={Styles.listContainerInner}>

            <View style={Styles.contentWrapper}>
              <Image source={Images.trainingList} style={Styles.courseImage} />
              <View style={{ marginLeft: hp(2) }}>
                <Text style={Styles.titleCourse}>{item.name}</Text>
                <Text style={Styles.desCourse}>{"توصيف مناسب ومختصر جدا للدورة التدريبية"}</Text>

                <View style={{ flexDirection: 'row', marginTop: hp(0.4) }}>
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
        </View>
      </>
    )
  }

  showArticleList = (item, index) => {
    return (
      <LatestArticle item={item} keyID={index}
        clickOption={this.props.clickOption}
        headerName={this.props.headerName}
        navigation={this.props.navigation} />
    );
  }

  showInfographicList = (item, index) => {
    return (
      <InfoArticle item={item} key={index}
        clickOption={this.props.clickOption}
        headerName={this.props.headerName}
        navigation={this.props.navigation} />
    );
  }

  eventsList = (item, index) => {
    return (
      <>
        <View style={Styles.listContainer}>
          <Image source={Images.bookmark} style={Styles.bookmarkStyle} />
          <View style={[Styles.listContainerInner, { marginTop: hp(0.5) }]}>
            <Text style={Styles.titleCourse}>{item.name}</Text>
            <View style={Styles.contentWrapper}>
              {/* time */}
              <View style={Styles.contentWrapper}>
                <Image source={Images.time} style={Styles.timeStyle} />
                <Text style={[Styles.desCourse, { marginLeft: hp(1) }]}>{"10:12:30"}</Text>
              </View>
              {/* Calender */}
              <View style={[Styles.contentWrapper, { marginLeft: hp(1) }]}>
                <Image source={Images.calender} style={Styles.timeStyle} />
                <Text style={[Styles.desCourse, { marginLeft: hp(1) }]}>{"2022/01/01"}</Text>
              </View>
            </View>
          </View>

        </View>
      </>
    )
  }


  render() {
    const {
      search, tabNameData, tab, trainingData, listColumn,
      optionTab2List, infoList, eventsData
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
              <Text style={Styles.headerText}>{"المفضلة"}</Text>
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

              {
                tab == 0 ?
                  <>
                    <View style={Styles.articleContainer}>
                      <FlatList
                        showsVerticalScrollIndicator={false}
                        key={listColumn}
                        horizontal={false}
                        scrollEnabled={false}
                        numColumns={listColumn}
                        data={optionTab2List}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => this.showArticleList(item, index)}
                      />
                    </View>
                  </>
                  :
                  tab == 1 ?
                    <>
                      <View style={Styles.articleContainer}>
                        <FlatList
                          showsVerticalScrollIndicator={false}
                          key={listColumn}
                          horizontal={false}
                          scrollEnabled={false}
                          numColumns={listColumn}
                          data={infoList}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({ item, index }) => this.showInfographicList(item, index)}
                        />
                      </View>
                    </>
                    :
                    tab == 2 ?
                      <>
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
                      </>
                      :
                      tab == 3 ?
                        <>
                          <FlatList
                            showsVerticalScrollIndicator={false}
                            key={listColumn}
                            horizontal={false}
                            scrollEnabled={false}
                            numColumns={listColumn}
                            data={eventsData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => this.eventsList(item, index)}
                          />
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
export default withTranslation()(Favourite)