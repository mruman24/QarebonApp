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

class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      allsectionList: [
        { name: "التثقيف الصحي", pic: Images.sections_1 },
        { name: "الاستشارات", pic: Images.sections_2 },
        { name: "الدورات التدريبية", pic: Images.sections_3 },
        { name: "حاسبة الصحة النفسية", pic: Images.sections_4 },
        { name: "الأخبار", pic: Images.sections_5 },
        { name: "الصحة النفسية في بيئة العمل", pic: Images.sections_6 },
      ],
      listColumn: 1
    };
    this.moved = false;
  }

  showSections = (item, index) => {
    return (
      <>
        <TouchableOpacity key={index}>
          <ImageBackground source={item.pic} style={Styles.watchedImage} imageStyle={{ borderRadius: 10 }}>
            <View style={Styles.setOpacity}>
              <Text style={Styles.innerSectionText}>{item.name}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </>
    )
  }
  render() {
    const { search, allsectionList, listColumn } = this.state
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />

          {/* Header */}
          <View style={Styles.headerContainer}>
            <Text style={Styles.headerText}>{"الأقسام"}</Text>
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
          {/* Header Ends */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              <FlatList
                showsVerticalScrollIndicator={false}
                key={listColumn}
                horizontal={false}
                scrollEnabled={false}
                numColumns={listColumn}
                data={allsectionList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => this.showSections(item, index)}
              />

            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default withTranslation()(Sections)
