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
import { withTranslation } from 'react-i18next';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ArticleContainer from './ArticleContainer';
import VideoContainer from './VideoContainer';
import InfoGraphicContainer from './InfoGraphicContainer';
import { connect } from 'react-redux';
import { verifyOTP } from '../../../Redux/Actions/auth';
import Toast from 'react-native-toast-message';
import Loader from "../../../Components/Loader";

const widthScreen = Dimensions.get('window').width;
const sliderWidth = widthScreen;
const itemWidth = widthScreen / 1.11;



class Home extends Component {
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
        { name: "الانفوجرافيك", pic: Images.infographic },
        { name: "الفيديو", pic: Images.video },
        { name: "المقالات", pic: Images.articles },
        { name: "المجلات والملاحق", pic: Images.journels },
        { name: "الكتب العلمية", pic: Images.book },
        { name: "المؤتمرات", pic: Images.conferences },
        { name: "الفعاليات", pic: Images.events },
      ],
      clickOption: 2,
      activeSlideWatched: 0,
      optionTab2List: [
        { pic: Images.psychological_counseling_4, name: "نصائح لنقل الأخبار السيئة للأطفال بدون ترك آثار سلبية" },
        { pic: Images.psychological_counseling_2, name: "مساوئ استخدام التعسف الوظيفي ونتائجه المستقبلية" },
        { pic: Images.psychological_counseling_3, name: "كيف أحمي أولاديّ من آفة التنمر المدرسيّ " },
      ],
      optionTab6List: [
        { pic: Images.event_1, name: "نصائح لنقل الأخبار السيئة للأطفال بدون ترك آثار سلبية" },
        { pic: Images.event_2, name: "مساوئ استخدام التعسف الوظيفي ونتائجه المستقبلية" },
        { pic: Images.event_3, name: "كيف أحمي أولاديّ من آفة التنمر المدرسيّ " },
      ],
      optionTab3List: [
        { pic: Images.journals_1, name: "نصائح لنقل الأخبار السيئة للأطفال بدون ترك آثار سلبية" },
        { pic: Images.journals_2, name: "مساوئ استخدام التعسف الوظيفي ونتائجه المستقبلية" },
        { pic: Images.journals_3, name: "كيف أحمي أولاديّ من آفة التنمر المدرسيّ " },
      ],
      optionTab4List: [
        { pic: Images.books_1, name: "نصائح لنقل الأخبار السيئة للأطفال بدون ترك آثار سلبية" },
        { pic: Images.books_2, name: "مساوئ استخدام التعسف الوظيفي ونتائجه المستقبلية" },
        { pic: Images.books_3, name: "كيف أحمي أولاديّ من آفة التنمر المدرسيّ " },
      ]
    };
    this.moved = false;
  }
  pagination() {
    const { activeSlide } = this.state;
    const sliders = this.props.auth?.sliders ? this.props.auth?.sliders : []

    return (
      <Pagination
        dotsLength={sliders.length}
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

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={index}>
        <Image
          source={{ uri: item?.mediaUrl }}
          style={Styles.sliderProductsItems}
        />
      </TouchableOpacity>
    );
  }

  _navigateToNext = (key) => {
    if (key == 1) {
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
    const { clickOption } = this.state
    if (clickOption == key) {
      this.setState({ clickOption: null })
    } else {
      this.setState({ clickOption: key })
    }
  }
  showOptionsTab = (item, index) => {
    const { clickOption } = this.state
    return (
      <View key={index}
        style={Styles.tabOptionNameWrapper}>
        {
          clickOption == index ?
            <>
              <TouchableOpacity onPress={() => this.clickOnOption(index)}
                style={Styles.selectOptionWrapper}>
                <Image source={item.pic} style={{
                  width: index == 2 ? hp(4) : index == 3 ? hp(4.2) : hp(5),
                  height: index == 1 ? hp(3.5) : index == 4 ? hp(4) : index == 5 ? hp(4) : hp(5),
                  tintColor: Colors.White
                }} />
              </TouchableOpacity>
              <Text style={[Styles.tabOptionNameText, {
                fontSize: hp(1.2),
                fontWeight: '500',
              }]}>{item?.name}</Text>
            </>
            :
            <>
              <TouchableOpacity onPress={() => this.clickOnOption(index)}
                style={Styles.selectOptionNoWrapper}>
                <Image source={item.pic} style={{
                  width: index == 2 ? hp(3) : index == 3 ? hp(3.2) : hp(4),
                  height: index == 1 ? hp(2.5) : index == 4 ? hp(3) : index == 5 ? hp(3) : hp(4)
                }} />
              </TouchableOpacity>
              <Text style={Styles.tabOptionNameText}>{item?.name}</Text>
            </>
        }
      </View>
    )
  }

  render() {
    const { search, tabNameData, slides, optionsTabData,
      clickOption, optionTab2List, optionTab6List,
      optionTab3List, optionTab4List
    } = this.state
    const categories = this.props.auth?.categories ? this.props.auth?.categories : []
    const sliders = this.props.auth?.sliders ? this.props.auth?.sliders : []
    const newsfeeds = this.props.auth?.newsfeeds ? this.props.auth?.newsfeeds : []
    const homeVideos = this.props.auth?.homeVideos ? this.props.auth?.homeVideos : []
    const allHomeArticles = this.props.auth?.allHomeArticles ? this.props.auth?.allHomeArticles : []
    const allhomeEvents = this.props.auth?.allhomeEvents ? this.props.auth?.allhomeEvents : []
    const interactionSections = this.props.auth?.interactionSections ? this.props.auth?.interactionSections : []
    const homeInfographics = this.props.auth?.homeInfographics ? this.props.auth?.homeInfographics : []
    const homeJournals = this.props.auth?.homeJournals ? this.props.auth?.homeJournals : []
    const trainingCourses = this.props.auth?.trainingCourses ? this.props.auth?.trainingCourses : []
    const homeBooks = this.props.auth?.homeBooks ? this.props.auth?.homeBooks : []
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
                  data={sliders}
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
                  <InfoGraphicContainer
                    clickOption={clickOption}
                    navigation={this.props.navigation}
                    headerName={"الانفوجرافيك"}
                    homeInfographics={homeInfographics}
                    apiName={"homeInfographics"}
                  />
                  :
                  clickOption == 1 ?
                    <VideoContainer
                      clickOption={clickOption}
                      headerName={"الفيديو"}
                      navigation={this.props.navigation}
                      homeVideos={homeVideos}
                      apiName={"homeVideos"}
                    />
                    :
                    clickOption == 2 ?
                      <ArticleContainer
                        clickOption={clickOption}
                        headerName={"المقالات"}
                        articleList={allHomeArticles}
                        apiName={"homeArticles"}
                        navigation={this.props.navigation}
                      />
                      :
                      clickOption == 3 ?
                        <ArticleContainer
                          clickOption={clickOption}
                          headerName={"المجلات والملاحق"}
                          articleList={homeJournals}
                          apiName={"homeJournals"}
                          navigation={this.props.navigation}
                        />
                        :
                        clickOption == 4 ?
                          <ArticleContainer
                            clickOption={clickOption}
                            headerName={"الكتب العلمية"}
                            articleList={homeBooks}
                            apiName={"homeBooks"}
                            navigation={this.props.navigation}
                          />
                          :
                          clickOption == 5 ?
                            <ArticleContainer
                              clickOption={clickOption}
                              headerName={"المؤتمرات"}
                              articleList={interactionSections}
                              apiName={"interactionSections"}
                              navigation={this.props.navigation}
                            /> :
                            clickOption == 6 ?
                              <ArticleContainer
                                clickOption={clickOption}
                                headerName={"الفعاليات"}
                                articleList={allhomeEvents}
                                apiName={"homeEvents"}
                                navigation={this.props.navigation}
                              />
                              :
                              null
              }


            </View>
          </ScrollView>
        </SafeAreaView>
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
    verifyOTP: (user) => dispatch(verifyOTP(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Home));