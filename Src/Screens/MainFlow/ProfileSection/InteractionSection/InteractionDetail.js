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

class InteractionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    const { search } = this.state
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper1}>
              <View style={Styles.gap} />
              <Text style={Styles.headerText}>{"صورة أثرت بك"}</Text>
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

              <ImageBackground source={Images.psychological_counseling_6} style={Styles.watchedImage}>
                <View style={Styles.setOpacity}>
                  <Image source={Images.bookmark} style={Styles.bookmarkStyle1} />
                </View>
              </ImageBackground>

              <View style={Styles.contentContainer}>
                <Text style={Styles.contentTitle}>{"عندما تكون الكلمة أصدق من كل الكلمات"}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', marginTop: hp(0.2) }}>
                    <Text style={Styles.contentSocial}>{"25"}</Text>
                    <Image source={Images.like} style={Styles.contentImage} />
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: hp(0.2), marginLeft: hp(1) }}>
                    <Text style={Styles.contentSocial}>{"145"}</Text>
                    <Image source={Images.comment} style={Styles.contentImage} />
                  </View>
                </View>
              </View>

              <View
                style={Styles.emailWrapperContent}>
                <Text style={Styles.emailInput1Text}>{"الناشر"}</Text>
                <View style={Styles.inboxLineContent} />
                <View style={Styles.emailInput1Content}>
                  <Text style={Styles.emailInput1Text}>{"محمد عبد الجواد"}</Text>
                </View>
              </View>

              <View style={Styles.descriptionContent}>
                <Text style={Styles.descriptionContentText}>{Constants.ABOUT_DESCRIPTION}</Text>
              </View>

            </View>
          </ScrollView>

        </SafeAreaView>
      </>
    );
  }
}
export default withTranslation()(InteractionDetail)