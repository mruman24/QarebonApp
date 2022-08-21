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
import StarRating from 'react-native-star-rating';
import VideoPlayer from 'react-native-video-player';
import { connect } from 'react-redux';
import { getInsideDetails } from '../../../Redux/Actions/datalist';
import Toast from 'react-native-toast-message';
import Loader from "../../../Components/Loader";

class ReadArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      listColumn: 1,
      commentList: [
        { name: "محمد صلاح" },
        { name: "محمد صلاح" },
      ],
      starCount: 5
    };
    this.moved = false;
  }

  showCommentList = (item, index) => {
    const { starCount } = this.state
    return (
      <>
        <View style={Styles.commentListContainer}>
          <View style={Styles.commentListInner}>

            <View style={{ flexDirection: 'row' }}>
              <View style={Styles.profileWrapper}>
                <Image source={Images.commentUser} style={Styles.profileImage} />
              </View>
              <View style={{ marginLeft: hp(2) }}>
                <Text style={Styles.profileName}>{item.name}</Text>
                <Text style={Styles.profileDes}>{"السعودية - الرياض - حي كذا"}</Text>
              </View>
            </View>
            <View>
              <View style={Styles.starContainer}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  starSize={hp(1.5)}
                  rating={starCount}
                  fullStarColor={"#FEC007"}
                  halfStarColor={"#B9B9B9"}
                />
              </View>
              <Text style={Styles.timeText}>{"منذ يومين"}</Text>
            </View>


          </View>
          <View style={Styles.newsWrapper}>

            <Text style={Styles.commentInnerSes}>{Constants.ARTICLE_READ_DES_4}</Text>
          </View>
        </View>
      </>
    )
  }
  render() {
    const { comment, listColumn, commentList } = this.state
    const dataRead = this.props.datalist?.articleDataset
    const clickOption = this.props.route?.params?.clickOption
    const headerName = this.props.route?.params?.headerName
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
                  <Text style={Styles.headerText}>{headerName}</Text>
                  <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Image source={Images.backArrow} style={Styles.backIcon} />
                  </TouchableOpacity>

                </View>
              </View>
              {/* Header Ends */}
              <View style={Styles.articleContainer}>
                {
                  clickOption == 1 ?
                    <VideoPlayer
                      video={{ uri: dataRead?.videoUrl }}
                      videoWidth={1600}
                      videoHeight={900}
                      resizeMode={"cover"}
                      thumbnail={dataRead?.thumbnail}
                      endThumbnail={dataRead?.endThumbnail}
                      style={Styles.watchedImage}
                    />
                    :
                    <ImageBackground source={{ uri: dataRead?.picture }} style={Styles.watchedImage} imageStyle={{ borderRadius: 10 }}>
                      {
                        dataRead?.favourite == true ?
                          <Image source={Images.bookmark} style={Styles.bookmarkStyle} />
                          : null
                      }
                    </ImageBackground>
                }
                {/* Soical Icons */}
                <View style={Styles.socialWrapper}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={Styles.socialText}>{"25"}</Text>
                      <Image source={Images.like} style={Styles.likeImage} />
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: hp(2) }}>
                      <Text style={Styles.socialText}>{"145"}</Text>
                      <Image source={Images.comment} style={Styles.commentImage} />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={Styles.socialButton}>
                      <Image source={Images.comment} style={Styles.buttonImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.socialButton, { marginLeft: hp(1) }]}>
                      <Image source={Images.like} style={Styles.buttonImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.socialButton, { marginLeft: hp(1) }]}>
                      <Image source={Images.share} style={Styles.buttonImage} />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Ends */}
                <View style={Styles.newsWrapper}>
                  <Text style={Styles.newsHead}>{dataRead?.title}</Text>
                </View>

              </View>

              {/* All Descriptio Wrapper */}
              <View style={Styles.newsWrapper}>
                <Text style={Styles.newsInnerHead}>{dataRead?.description}</Text>
                {/* <Text style={[Styles.newsInnerHead, { marginTop: hp(2) }]}>{dataRead?.description}</Text> */}
                {/* <Text style={[Styles.newsInnerHead, { marginTop: hp(2) }]}>{Constants.ARTICLE_READ_DES_3}</Text> */}
              </View>

              {/* Experience Comments */}
              <View style={Styles.commentContainer}>
                <View style={Styles.commentInnerContainer}>
                  <Text style={Styles.commentHead}>{Constants.COMMENT_HEAD}</Text>
                  <View style={Styles.emailWrapper}>

                    <TextInput
                      style={Styles.emailInput}
                      value={comment}
                      placeholder={""}
                      writingDirection="rtl"
                      placeholderTextColor={"#0A572B"}
                      multiline={true}
                      autoCapitalize='none'
                      onChangeText={(value) => {
                        this.setState({ comment: value })
                      }}
                    />

                  </View>
                </View>
              </View>
              {/* Bottom Button */}
              <View style={Styles.bottomButtonWrapper}>
                <TouchableOpacity
                  // onPress={() => {
                  //   this.props.navigation.navigate('AuthStack', {
                  //     screen: 'LoginVisitor',

                  //   })}}
                  style={Styles.buttonContainer}>
                  <Text style={Styles.buttonText}>{"إرسال التعليق"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => {
                  //   this.props.navigation.navigate('AuthStack', {
                  //     screen: 'LoginVisitor',

                  //   })}}
                  style={Styles.buttonContainer1}>
                  <Text style={Styles.buttonText1}>{"العودة إلى الرئيسية"}</Text>
                </TouchableOpacity>
              </View>


              <View>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  key={listColumn}
                  horizontal={false}
                  scrollEnabled={false}
                  numColumns={listColumn}
                  data={commentList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => this.showCommentList(item, index)}
                />
              </View>

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
    getInsideDetails: (user) => dispatch(getInsideDetails(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ReadArticle));