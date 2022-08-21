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

class AboutQarebon extends Component {
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
    };
  }

  clickTabs = (num) => {
    this.setState({ tabs: num })
  }

  render() {
    const { search, tabs } = this.state
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
                  <Image source={Images.about1} style={[Styles.tabsStyle, {
                    tintColor: tabs == 1 ? Colors.White : "#383561"
                  }]} />
                  <View style={Styles.flexEmailInput}>
                    <Text style={[Styles.optionText, {
                      color: tabs == 1 ? Colors.White : "#383561"
                    }]}>{"من نحن "}</Text>
                  </View>
                </TouchableOpacity>
                {/* 2 */}
                <TouchableOpacity onPress={() => { this.clickTabs(2) }}
                  style={[Styles.flexEmailWrapperInner, {
                    backgroundColor: tabs == 2 ? "#383561" : "#F5F5F5"
                  }]}>
                  <Image source={Images.about2} style={[Styles.tabsStyle, {
                    tintColor: tabs == 2 ? Colors.White : "#383561"
                  }]} />

                  <View style={Styles.flexEmailInput}>
                    <Text style={[Styles.optionText, {
                      color: tabs == 2 ? Colors.White : "#383561"
                    }]}>{"لماذا نحن"}</Text>
                  </View>
                </TouchableOpacity>

                {/* 3 */}
                <TouchableOpacity onPress={() => { this.clickTabs(3) }}
                  style={[Styles.flexEmailWrapperInner, {
                    backgroundColor: tabs == 3 ? "#383561" : "#F5F5F5"
                  }]}>
                  <Image source={Images.about3} style={[Styles.tabsStyle, {
                    tintColor: tabs == 3 ? Colors.White : "#383561"
                  }]} />

                  <View style={Styles.flexEmailInput}>
                    <Text style={[Styles.optionText, {
                      color: tabs == 3 ? Colors.White : "#383561"
                    }]}>{"سياسات وأحكام"}</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Tabs Container Ends */}

              {
                tabs == 1 ?
                  <View style={Styles.showTextAnswer}>
                    <View style={Styles.listWrapper}>
                      <Text style={Styles.titleAnswer}>{Constants.ABOUT_TAB_FIRST_1}</Text>
                      <Text style={[Styles.titleAnswer, { marginTop: hp(3) }]}>{Constants.ABOUT_TAB_FIRST_2}</Text>
                    </View>
                  </View>
                  :
                  tabs == 2 ?
                    <View style={Styles.showTextAnswer}>
                      <View style={Styles.listWrapper}>
                        <Text style={Styles.titleAnswer}>{Constants.ABOUT_TAB_SECOND_1}</Text>
                        <Text style={[Styles.titleAnswer, { marginTop: hp(3) }]}>{Constants.ABOUT_TAB_SECOND_2}</Text>
                      </View>
                    </View>
                    :
                    <View style={Styles.showTextAnswer}>
                      <View style={Styles.listWrapper}>
                        <Text style={Styles.titleAnswer}>{Constants.ABOUT_TAB_THIRD_1}</Text>
                        <Text style={[Styles.titleAnswer, { marginTop: hp(3) }]}>{Constants.ABOUT_TAB_THIRD_2}</Text>
                      </View>
                    </View>
              }

            </View>
          </ScrollView>

        </SafeAreaView>
      </>
    );
  }
}
export default withTranslation()(AboutQarebon)