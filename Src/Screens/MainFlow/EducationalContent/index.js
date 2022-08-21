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
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import LatestArticle from '../../../Components/LatestArticle';
import VideoComponent from '../../../Components/VideoComponent';
import InfoArticle from '../../../Components/InfoArticle';
import { connect } from 'react-redux';
// import { verifyOTP } from '../../../Redux/Actions/auth';

class EducationalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tabNameData: [
        { name: "الانفوجرافيك", },
        { name: "الفيديو", },
        { name: "المقالات", },
        { name: "المجلات والملاحق", },
        { name: "الكتب العلمية", },
        { name: "المؤتمرات", },
        { name: "الفعاليات", },
      ],
      clickOption: 2,
      listColumn: 1,
      articleList: [],
      headerName: ''
    };
    this.moved = false;
  }

  componentDidMount = () => {
    const clickOption = this.props.route?.params?.clickOption
    const dataDisplay = this.props.route?.params?.dataDisplay
    const headerName = this.props.route?.params?.headerName

    this.setState({
      clickOption: clickOption,
      articleList: dataDisplay,
      headerName: headerName
    })
  }

  clickOnOption = (key) => {
    const { clickOption } = this.state
    if (clickOption == key) {
      this.setState({ clickOption: null })
    } else {
      this.setState({ clickOption: key })
    }
  }

  showTabContainer = (item, index) => {
    const { clickOption } = this.state
    return (
      <>
        {
          clickOption != index ?
            <>
              <TouchableOpacity onPress={() => this.clickOnOption(index)}
                key={index}
                style={Styles.tabNameWrapper}>
                <Text style={[Styles.tabNameText, { marginTop: hp(0.5) }]}>{item?.name}</Text>
              </TouchableOpacity>
              <View style={Styles.inboxLine} />
            </>
            :
            <>
              <TouchableOpacity onPress={() => this.clickOnOption(index)}
                key={index}
                style={Styles.tabNameWrapper1}>
                <Text style={[Styles.tabNameText, { color: Colors.White, margin: hp(0.8) }]}>{item?.name}</Text>
              </TouchableOpacity>
              <View style={Styles.inboxLine} />
            </>
        }
      </>
    )
  }

  getDetails = (article) => {
    const token = this.props.auth?.loginEmail?.accessToken
    const data = {
      clickOption: article?.clickOption,
      headerName: article?.headerName,
      id: article?.item?.id,
      token: token,
      apiName: this.props.apiName
    }
    this.props.getInsideDetails(data)
  }

  showInfoList = (item, index) => {
    const { clickOption, headerName } = this.state
    return (
      <InfoArticle item={item} key={index}
        clickOption={clickOption}
        headerName={headerName}
        getDetails={this.getDetails}
        navigation={this.props.navigation} />
    );
  }
  showArticleList = (item, index) => {
    const { clickOption, headerName } = this.state
    return (
      <LatestArticle item={item} keyID={index}
        clickOption={clickOption}
        headerName={headerName}
        getDetails={this.getDetails}
        navigation={this.props.navigation} />
    );
  }

  showVideoList = (item, index) => {
    const { clickOption, headerName } = this.state
    console.log("showVideoList---", item)
    return (
      <VideoComponent item={item} key={index}
        clickOption={clickOption}
        headerName={headerName}
        getDetails={this.getDetails}
        navigation={this.props.navigation} />
    );
  }
  render() {
    const { search, tabNameData, articleList, listColumn,
      clickOption
    } = this.state
    const homeVideos = this.props.auth?.homeVideos
    const allHomeArticles = this.props.auth?.allHomeArticles
    const allhomeEvents = this.props.auth?.allhomeEvents
    const homeInfographics = this.props.auth?.homeInfographics
    const homeJournals = this.props.auth?.homeJournals
    const homeBooks = this.props.auth?.homeBooks
    const { loadingInside } = this.props.datalist
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>
              {/* Header */}
              <View style={Styles.headerContainer}>
                <View style={Styles.headerWrapper}>
                  <View style={Styles.gap} />
                  <Text style={Styles.headerText}>{Constants.EDUCATIONAL_CONTENT}</Text>
                  <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Image source={Images.backArrow} style={Styles.backIcon} />
                  </TouchableOpacity>

                </View>
              </View>
              {/* Header Ends */}
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

              {
                clickOption == 0 ?
                  <View style={Styles.articleContainer}>
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      key={listColumn}
                      horizontal={false}
                      scrollEnabled={false}
                      numColumns={listColumn}
                      data={homeInfographics}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item, index }) => this.showInfoList(item, index)}
                    />
                  </View>
                  :
                  clickOption == 2 ?

                    <View style={Styles.articleContainer}>
                      <FlatList
                        showsVerticalScrollIndicator={false}
                        key={listColumn}
                        horizontal={false}
                        scrollEnabled={false}
                        numColumns={listColumn}
                        data={allHomeArticles}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => this.showArticleList(item, index)}
                      />
                    </View>
                    :
                    clickOption == 1 ?
                      <View style={Styles.articleContainer}>
                        <FlatList
                          showsVerticalScrollIndicator={false}
                          key={listColumn}
                          horizontal={false}
                          scrollEnabled={false}
                          numColumns={listColumn}
                          data={homeVideos}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({ item, index }) => this.showVideoList(item, index)}
                        />
                      </View>
                      :
                      <View style={Styles.articleContainer}>
                        <FlatList
                          showsVerticalScrollIndicator={false}
                          key={listColumn}
                          horizontal={false}
                          scrollEnabled={false}
                          numColumns={listColumn}
                          data={articleList}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({ item, index }) => this.showArticleList(item, index)}
                        />
                      </View>
              }
            </View>
          </ScrollView>
        </SafeAreaView>
        {
          loadingInside == true ?
            <Loader /> : null
        }
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
    // verifyOTP: (user) => dispatch(verifyOTP(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(EducationalContent));
