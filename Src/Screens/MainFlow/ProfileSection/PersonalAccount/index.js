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
import { connect } from 'react-redux';
import { getUserProfile } from '../../../../Redux/Actions/datalist';
import Loader from "../../../../Components/Loader";


class PersonalAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listColumn: 1,
      profileData: [
        { name: "الملف الشخصي", pic: Images.profilePersonaly },
        { name: "الدورات التدريبية", pic: Images.trainingCourses },
        { name: "الاستشارات", pic: Images.consulting },
        { name: "المفضلة", pic: Images.favourite },
        { name: "الشكاوي والاقترحات", pic: Images.complaints },
        { name: "قسم التفاعل", pic: Images.interactions },
        { name: "تواصل معنا", pic: Images.contactUs },
        { name: "تفاصيل أخرى", pic: Images.otherDetails },
        { name: "تسجيل الخروج", pic: Images.signout },
      ],
      otherDetails: false,
      tabClick: null,
      otherDetailsData: [
        { name: "التوظيف", pic: Images.recruitment },
        { name: "أسئلة شائعة", pic: Images.frequestlyQuestions },
        { name: "حول تطبيق قريبون", pic: Images.aboutApp },
      ],
      otherDetailsTab: null
    };
    this.moved = false;
  }

  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener('focus', async () => {
      const token = this.props.auth?.loginEmail?.accessToken
      const id = this.props.auth?.loginEmail?.id
      const data = {
        id: id,
        token: token
      }
      this.props.getUserProfile(data)
      this.setState({ tabClick: null })
    })
  }

  clickNavigation = (key) => {
    const { tabClick } = this.state

    if (tabClick == key) {
      this.setState({ tabClick: null })

    } else {
      this.setState({ tabClick: key })
      if (key == 0) {
        this.props.navigation.navigate('ProfileStack', {
          screen: 'EditProfile',
        })
      }
      else if (key == 4) {
        this.props.navigation.navigate('ProfileStack', {
          screen: 'Suggestions',
        })
      }
      else if (key == 6) {
        this.props.navigation.navigate('ProfileStack', {
          screen: 'ContactUs',
        })
      }
      else if (key == 7) {
        this.setState({ otherDetails: !this.state.otherDetails })
      }
      else if (key == 1) {
        this.props.navigation.navigate('ProfileStack', {
          screen: 'TrainingCourses',
        })
      }
      else if (key == 5) {
        this.props.navigation.navigate('ProfileStack', {
          screen: 'InteractionSection',
        })
      }
      else if (key == 3) {
        this.props.navigation.navigate('ProfileStack', {
          screen: 'Favourite',
        })
      }

      // 
    }
  }

  clicOtherOptions = (key) => {
    this.setState({ otherDetailsTab: key })
    if (key == 0) {
      this.props.navigation.navigate('ProfileStack', {
        screen: 'Recruitment',
      })
    }
    else if (key == 1) {
      this.props.navigation.navigate('ProfileStack', {
        screen: 'FrequestlyQuestions',
      })
    }
    else if (key == 2) {
      this.props.navigation.navigate('ProfileStack', {
        screen: 'AboutQarebon',
      })
    }
  }

  profileDataList = (item, index) => {
    const { otherDetails, otherDetailsData, tabClick, otherDetailsTab } = this.state
    return (
      <>
        <TouchableOpacity onPress={() => { this.clickNavigation(index) }}
          key={index} style={[Styles.listContainer, { backgroundColor: tabClick == index ? "#548E6D" : "#F5F5F5", }]}>
          {/* <View style={Styles.listWrapper}> */}
          <View style={{ flexDirection: 'row' }}>
            <Image source={item.pic} style={[Styles.imageShow, {
              width: index == 2 ? hp(3.2) : index == 4 ? hp(3.2) : index == 5 ? hp(3.7) : index == 6 ? hp(3.7) : hp(3.5),
              height: index == 6 ? hp(3) : hp(3.5),
              tintColor: tabClick == index ? Colors.White : "#548E6D"
            }]} />
            <View style={[Styles.inboxLine, {
              backgroundColor: tabClick == index ? Colors.White : '#80AE93',
            }]} />
          </View>
          <Text style={[Styles.title, { color: tabClick == index ? Colors.White : "#2F573F" }]}>{item.name}</Text>
          {
            tabClick == 7 && index == 7 && tabClick == index ?
              <Image source={Images.dropDown} style={Styles.dropStyle} />
              :
              <Image source={Images.arrowRight} style={[Styles.imageArrow, {
                tintColor: tabClick == index ? Colors.White : "#AAC7B6"
              }]} />
          }
          {/* </View> */}
        </TouchableOpacity>
        {
          tabClick == 7 && index == 7 && otherDetails == true && tabClick == index ?
            otherDetailsData.map((value, key) => {
              return (
                <>
                  <TouchableOpacity onPress={() => { this.clicOtherOptions(key) }}
                    key={key} style={[Styles.listContainer, {
                      backgroundColor: otherDetailsTab == key ? "#383561" : Colors.White,
                      borderColor: "#383561"
                    }]}>
                    {/* <View style={Styles.listWrapper}> */}
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={value.pic} style={[Styles.imageShow, {
                        width: hp(3.5),
                        height: key == 0 ? hp(3) : hp(3.5),
                        tintColor: otherDetailsTab == key ? Colors.White : "#383561"
                      }]} />
                      <View style={[Styles.inboxLine, {
                        backgroundColor: otherDetailsTab == key ? Colors.White : '#383561',
                      }]} />
                    </View>
                    <Text style={[Styles.title, { color: otherDetailsTab == key ? Colors.White : "#383561" }]}>{value.name}</Text>
                    <View style={Styles.gap} />
                    {/* </View> */}
                  </TouchableOpacity>
                </>
              )
            })
            : null
        }
      </>
    )
  }

  render() {
    const { profileData, listColumn } = this.state
    const { loadingUser } = this.props.datalist
    const userProfile = this.props.datalist?.userProfile
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          {/* Header */}
          <View style={Styles.headerContainer}>
            <Text style={Styles.headerText}>{"الحساب الشخصي"}</Text>
          </View>
          <TouchableOpacity style={Styles.headerWrapper}>
            {userProfile?.image ?
              <Image source={Images.profilePic} style={Styles.picImageStyle} />
              :
              <View style={Styles.userProfileWrapper}>
                <Text style={Styles.userProfileText}>{`${userProfile?.firstName?.[0]?.toUpperCase()}${userProfile?.firstName?.[1]?.toUpperCase()}`}</Text>
              </View>
            }
          </TouchableOpacity>
          {/* Header Ends */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>
              <FlatList
                showsVerticalScrollIndicator={false}
                key={listColumn}
                horizontal={false}
                scrollEnabled={false}
                numColumns={listColumn}
                data={profileData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => this.profileDataList(item, index)}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        {
          loadingUser == true ?
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
    getUserProfile: (user) => dispatch(getUserProfile(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PersonalAccount));
