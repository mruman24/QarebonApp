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
import { withTranslation } from 'react-i18next';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import InfoArticle from '../../../Components/InfoArticle';
import { connect } from 'react-redux';
import { getInsideDetails } from '../../../Redux/Actions/datalist';
import Toast from 'react-native-toast-message';
import Loader from "../../../Components/Loader";

// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
// const sliderWidthWatched = viewportWidth;
// const slideWidth = wp(75);
// const itemHorizontalMargin = wp(2);
// const itemWidthWatched = slideWidth + itemHorizontalMargin * 2;

const widthScreen = Dimensions.get('window').width;
const sliderWidthWatched = widthScreen;
const itemWidthWatched = widthScreen / 1.11;

class InfoGraphicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlideWatched: 0,
      infoList: [
        { pic: Images.infoGraphic_counseling_1, name: "أعراض الإصابة باضطراب تعدد الشخصيات" },
        { pic: Images.infoGraphic_counseling_2, name: "المشاكل الزوجية بين المشاكل والحلول" },
        { pic: Images.infoGraphic_counseling_3, name: "الفصام والاختلالات العقلية" },
      ],
      listColumn: 1,
    };
    this.moved = false;
  }

  paginationWatched() {
    const { activeSlideWatched } = this.state;
    const homeInfographics = this.props.homeInfographics
    return (
      <Pagination
        dotsLength={homeInfographics.length}
        activeDotIndex={activeSlideWatched}
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

  _renderWatchedItem = ({ item, index }) => {
    const { activeSlideWatched } = this.state
    // console.log("key_______", index)

    return (
      <InfoArticle item={item} keyID={index}
        clickOption={this.props.clickOption}
        navigation={this.props.navigation}
        headerName={this.props.headerName}
        getDetails={this.getDetails}
      />
    );
  }
  showInfographicList = (item, index) => {
    return (
      <InfoArticle item={item} keyID={index}
        clickOption={this.props.clickOption}
        headerName={this.props.headerName}
        getDetails={this.getDetails}
        navigation={this.props.navigation} />
    );
  }
  render() {
    const { listColumn, infoList
    } = this.state
    const homeInfographics = this.props.homeInfographics
    const { loadingInside } = this.props.datalist
    return (
      <>
        {/* Most Watched */}
        <View style={Styles.articlesNameContainer}>
          <View>
            <Text style={Styles.articleTitle}>{Constants.MOST_WATCHED}</Text>
            <View style={Styles.titleLine} />
          </View>
          <TouchableOpacity>
            <Text style={Styles.viewAll}>{Constants.VIEW_ALL}</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.sliderProducts}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            layout={'default'}
            data={homeInfographics}
            renderItem={this._renderWatchedItem}
            sliderWidth={sliderWidthWatched}
            itemWidth={itemWidthWatched}
            onSnapToItem={(index) => this.setState({ activeSlideWatched: index })}
          />
          {this.paginationWatched()}
        </View>
        {/* Most Watched End*/}

        {/* Latest Article */}
        <View style={Styles.articlesNameContainer}>
          <View>
            <Text style={Styles.articleTitle}>{Constants.LATEST_ARTICLE}</Text>
            <View style={Styles.titleLine} />
          </View>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('EducationalStack', {
              screen: 'EducationalContent',
              params: {
                dataDisplay: homeInfographics,
                clickOption: this.props.clickOption,
                headerName: this.props.headerName,
                apiName: this.props.apiName
              }
            })
          }}>
            <Text style={Styles.viewAll}>{Constants.VIEW_ALL}</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.videoContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            key={listColumn}
            horizontal={false}
            scrollEnabled={false}
            numColumns={listColumn}
            data={homeInfographics}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => this.showInfographicList(item, index)}
          />
        </View>


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
    getInsideDetails: (user) => dispatch(getInsideDetails(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(InfoGraphicContainer));