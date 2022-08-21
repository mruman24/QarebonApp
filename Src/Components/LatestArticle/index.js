import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';

const LatestArticle = (props) => {

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
    <>
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
        <ImageBackground source={{ uri: item?.picture }} style={Styles.watchedImage} imageStyle={{ borderRadius: 10 }}>
          {item?.favourite == true ?
            <Image source={Images.bookmark} style={Styles.bookmarkStyle} /> : null}
        </ImageBackground>
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
        <View style={Styles.newsWrapper}>
          <Text style={Styles.newsHead}>{item?.name}</Text>
          <View style={Styles.newsInnerWrapper}>
            <Text style={Styles.newsInnerHead}>{item?.description}</Text>
            <Text style={Styles.newsDes}>{Constants.READ_MORE}</Text>
          </View>
          {/* <Text style={Styles.newsDes}>{Constants.MOST_WATCHED_DES}</Text> */}
        </View>
      </TouchableOpacity>
    </>
  )
}
export default LatestArticle;