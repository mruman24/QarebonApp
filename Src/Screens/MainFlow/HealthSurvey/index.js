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
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MyStatusBar from '../../../Components/HeaderStatusBar';
import ToggleSwitch from 'toggle-switch-react-native';
import SurveyPopup from '../../../Components/SurveyPopup';


class HealthSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      modelSurvey: false,
      listColumn: 1,
      dataSurvey: [
        {
          title: "1- فقدت الرغبة ،و المتعة في ممارسة أمور كنت أمارسها سابقاً",
          optionName1: "أبداً",
          option1: true,
          optionName2: "قليلاً",
          option2: false,
          optionName3: "أحياناً",
          option3: false,
          optionName4: "غالباً",
          option4: false,
        },

        {
          title: "2- أشعر بالحزن و الضيق و عدم السعادة",
          optionName1: "أبداً",
          option1: false,
          optionName2: "قليلاً",
          option2: false,
          optionName3: "أحياناً",
          option3: false,
          optionName4: "غالباً",
          option4: true,
        },

        {
          title: "3- أجد صعوبة في النوم أو البقاء نائماً أو النوم لفترات طويلة",
          optionName1: "أبداً",
          option1: false,
          optionName2: "قليلاً",
          option2: true,
          optionName3: "أحياناً",
          option3: false,
          optionName4: "غالباً",
          option4: false,
        },

        {
          title: "4- أشعر بالخمول والكسل مؤخراً",
          optionName1: "أبداً",
          option1: false,
          optionName2: "قليلاً",
          option2: false,
          optionName3: "أحياناً",
          option3: true,
          optionName4: "غالباً",
          option4: false,
        },
      ]
    };
  }

  clickOpenCloseSurevey = () => {
    this.setState({ modelSurvey: !this.state.modelSurvey })
  }
  setChange1 = (option, key) => {
    const { dataSurvey } = this.state
    let data = dataSurvey

    data[key].option1 = !option
    this.setState({ dataSurvey: data })

  }
  setChange2 = (option, key) => {
    const { dataSurvey } = this.state
    let data = dataSurvey

    data[key].option1 = !option
    this.setState({ dataSurvey: data })
  }
  setChange3 = (option, key) => {
    const { dataSurvey } = this.state
    let data = dataSurvey

    data[key].option1 = !option
    this.setState({ dataSurvey: data })

  }
  setChange4 = (option, key) => {
    const { dataSurvey } = this.state
    let data = dataSurvey

    data[key].option1 = !option
    this.setState({ dataSurvey: data })

  }

  showSurveyList = (item, index) => {
    return (
      <>
        <View style={Styles.surveyListContainer}>
          <View style={Styles.surveyListWrapper}>

            <Text style={Styles.surveyTitle}>{item.title}</Text>
            {/* 1 */}
            <View style={Styles.surveyOptionWrapper}>

              <View style={{ flexDirection: 'row' }}>

                <View style={{ marginTop: hp(0.1) }}>
                  <ToggleSwitch
                    isOn={item.option1}
                    onColor={"#176639"}
                    offColor="#D1D0D0"
                    size={"small"}
                    onToggle={() => { this.setChange1(item.option1, index) }}
                    thumbOffStyle={{ backgroundColor: "#707070" }}
                  />
                </View>
                <Text style={Styles.optionTextName}>{item.optionName1}</Text>
              </View>


              <View style={{ flexDirection: 'row' }}>

                <View style={{ marginTop: hp(0.1) }}>
                  <ToggleSwitch
                    isOn={item.option2}
                    onColor={"#176639"}
                    offColor="#D1D0D0"
                    size={"small"}
                    onToggle={() => { this.setChange2(item.option2, index) }}
                    thumbOffStyle={{ backgroundColor: "#707070" }}
                  />
                </View>
                <Text style={Styles.optionTextName}>{item.optionName2}</Text>
              </View>

            </View>

            {/* 2 */}
            <View style={Styles.surveyOptionWrapper}>

              <View style={{ flexDirection: 'row' }}>

                <View style={{ marginTop: hp(0.1) }}>
                  <ToggleSwitch
                    isOn={item.option3}
                    onColor={"#176639"}
                    offColor="#D1D0D0"
                    size={"small"}
                    onToggle={() => { this.setChange3(item.option3, index) }}
                    thumbOffStyle={{ backgroundColor: "#707070" }}
                  />
                </View>
                <Text style={Styles.optionTextName}>{item.optionName3}</Text>
              </View>


              <View style={{ flexDirection: 'row' }}>

                <View style={{ marginTop: hp(0.1) }}>
                  <ToggleSwitch
                    isOn={item.option4}
                    onColor={"#176639"}
                    offColor="#D1D0D0"
                    size={"small"}
                    onToggle={() => { this.setChange4(item.option4, index) }}
                    thumbOffStyle={{ backgroundColor: "#707070" }}
                  />
                </View>
                <Text style={Styles.optionTextName}>{item.optionName4}</Text>
              </View>

            </View>
          </View>

        </View>

      </>
    )
  }

  render() {
    const { listColumn, dataSurvey, search, modelSurvey
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
              <Text style={Styles.headerText}>{"حاسبة الصحة النفسية"}</Text>
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

          <TouchableOpacity onPress={this.clickOpenCloseSurevey}
            style={Styles.noteContainer}>
            <View style={Styles.noteWrapper}>
              <Text style={Styles.noteWrapperText}>{"​يعطي هذا الاختبار نبذة عن حالتك النفسية و درجة الاكتئاب عندك و لا يعد وسيلة تشخيص دقيقة فلابد من الرجوع للطبيب النفسي لتشخيصك "}</Text>
            </View>
          </TouchableOpacity>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>
              <View style={Styles.articleContainer}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  key={listColumn}
                  horizontal={false}
                  scrollEnabled={false}
                  numColumns={listColumn}
                  data={dataSurvey}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => this.showSurveyList(item, index)}
                />
              </View>
            </View>
          </ScrollView>
          {
            modelSurvey == true ?
              <SurveyPopup open={modelSurvey}
                close={this.clickOpenCloseSurevey}
              />
              : null
          }
        </SafeAreaView>
      </>
    );
  }
}
export default withTranslation()(HealthSurvey)