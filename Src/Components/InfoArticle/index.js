import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';

const widthScreen = Dimensions.get('window').width;

const InfoArticle = (props) => {

  const { item, keyID, clickOption, headerName, getDetails } = props

  const goNext = () => {
    const data = {
      item: item,
      clickOption: clickOption,
      headerName: headerName
    }
    getDetails(data)
  }
  return (
    <TouchableOpacity key={keyID}
      onPress={goNext}
      // onPress={() => {
      //   props.navigation.navigate('EducationalStack', {
      //     screen: 'ReadArticle',
      //     params: {
      //       dataRead: item,
      //       clickOption: clickOption,
      //       headerName: headerName

      //     }
      //   })
      // }}
      style={Styles.articleContainer}>
      {/* <View style={Styles.watchedImage}> */}
      <ImageBackground source={{ uri: item.picture }} style={Styles.watchedImage} imageStyle={{ borderRadius: 10 }}>
        <View style={Styles.setOpacity}>
          {
            item?.favourite == true ?
              <Image source={Images.bookmark} style={Styles.bookmarkStyle} />
              : null
          }
        </View>
      </ImageBackground>
      {/* </View> */}
      <View style={Styles.socialWrapper}>
        <Text style={Styles.newsHead}>{item?.title}</Text>
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

    </TouchableOpacity>
  )
}
export default InfoArticle;