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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ConsultationRequest from '../../../../Components/ConsultationRequest';
import CoursesList from '../../../../Components/CoursesList';

const widthScreen = Dimensions.get('window').width;
const sliderWidth = widthScreen;
const itemWidth = widthScreen / 1.11;

class Consulting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      activeSlide: 0,
      slides: [
        { pic: Images.SwipeField },
        { pic: Images.psychological_counseling_2 },
        { pic: Images.psychological_counseling_3 },
        { pic: Images.psychological_counseling_5 },
      ],
      tabNameData: [
        { name: "المحتوى التثقيفي" },
        { name: "الاستشارات" },
        { name: "الدورات التدريبية" },
        { name: "حاسبة الصحة النفسية" },
        { name: "الأخبار" },
        { name: "الصحة النفسية في بيئة العمل" },
      ],
      optionsTabData: [
        { name: "طلب استشارة", pic: Images.consult1 },
        { name: "استشاراتي", pic: Images.consult2 },
        { name: "الاستشاريين النفسيين", pic: Images.consult3 },
        { name: "البحث عن مستشفى نفسي", pic: Images.consult4 },
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
      ],
      clickOption: 0,
      listColumn: 1,
      trainingData: [
        { name: "الاستشاري د.محمد علي الشيخ أحمد" },
        { name: "التخطيط الاستراتيجي وفوائده" },
        { name: "الاستشاري د.محمد علي الشيخ أحمد" },
        { name: "الاستشاري د.محمد علي الشيخ أحمد" },
        { name: "الاستشاري د.محمد علي الشيخ أحمد" },
        { name: "الاستشاري د.محمد علي الشيخ أحمد" },
      ]
    };
    this.moved = false;
  }
  pagination() {
    const { slides, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        dotColor={"#196D3D"}
        inactiveDotColor={"#DBDBDB"}
        dotStyle={{
          width: hp(4),
          height: 8,
          // borderRadius: 5,
          marginHorizontal: hp(-1.6),
        }}
        inactiveDotStyle={{
          width: hp(4),
          height: 8,
          // borderRadius: 5,
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image
          source={item.pic}
          style={Styles.sliderProductsItems}
        />
      </TouchableOpacity>
    );
  }

  _navigateToNext = (key) => {
    if (key == 0) {
      this.props.navigation.goBack()
    }
    else if (key == 1) {
      this.props.navigation.navigate("Consulting")
    }
    else if (key == 3) {
      this.props.navigation.navigate('EducationalStack', {
        screen: 'HealthSurvey',
      })
    }
  }
  showTabContainer = (item, index) => {
    return (
      <>
        <TouchableOpacity key={index}
          onPress={() => {
            this._navigateToNext(index)
          }}
          style={Styles.tabNameWrapper}>
          <Text style={Styles.tabNameText}>{item?.name}</Text>
        </TouchableOpacity>
      </>
    )
  }
  clickOnOption = (key) => {
    this.setState({ clickOption: key })
  }


  showOptionsTab = (item, index) => {
    const { clickOption } = this.state
    return (
      <View key={index}
        style={Styles.tabOptionNameWrapper}>
        <TouchableOpacity onPress={() => this.clickOnOption(index)}
          style={[Styles.selectOptionWrapper, { borderColor: clickOption == index ? "#538B6B" : Colors.White }]}>

          <View style={Styles.selectOptionInnerWrapper}>
            <View style={Styles.combineInner}>
              <Image source={item.pic} style={{
                width: index == 2 ? hp(2.5) : hp(3),
                height: index == 1 ? hp(2.5) : hp(3),
              }} />
              <Text style={[Styles.tabOptionNameText]}>{item?.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
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

  trainingList = (item, index) => {
    return (
      <CoursesList item={item} unique={index} />
    )
  }

  render() {
    const { search, tabNameData, slides,
      clickOption, optionsTabData,
      eventsData, listColumn,
      trainingData
    } = this.state
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>
              <ImageBackground source={Images.psychological_counseling_1} style={Styles.headBackground}>
                <View style={Styles.setOpacity}>
                  <View style={Styles.innerWrapper}>
                    <Text style={Styles.qreebeenHead}>{Constants.QREEBEEN_APP}</Text>
                    <TouchableOpacity>
                      <Image source={Images.notification} style={Styles.notifyImage} />
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
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
              <View style={Styles.sliderProducts}>
                <Carousel
                  ref={(c) => { this._carousel = c; }}
                  layout={'default'}
                  data={slides}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                {this.pagination()}
              </View>

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

              <View style={Styles.optionsTabContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={optionsTabData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => this.showOptionsTab(item, index)}
                />
              </View>

              {
                clickOption == 0 ?
                  <ConsultationRequest />
                  :
                  clickOption == 1 ?
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
                    :
                    // clickOption == 2 ?
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

                      // : null
              }



            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default withTranslation()(Consulting)