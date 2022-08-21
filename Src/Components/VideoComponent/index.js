import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import VideoPlayer from 'react-native-video-player';

const widthScreen = Dimensions.get('window').width;

const VideoComponent = (props) => {

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
      <VideoPlayer
        video={{ uri: item?.videoUrl }}
        videoWidth={1600}
        videoHeight={900}
        resizeMode={"cover"}
        thumbnail={item?.thumbnail}
        endThumbnail={item?.endThumbnail}
        style={Styles.watchedImage}
      />
      {/* </View> */}
      <View style={Styles.socialWrapper}>
        <Text style={Styles.newsHead}>{item?.name}</Text>
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
      {/* <View style={Styles.newsWrapper}>
          <Text style={Styles.newsHead}>{item.name}</Text>
          <View style={Styles.newsInnerWrapper}>
            <Text style={Styles.newsInnerHead}>{Constants.ARTICLE_DES}</Text>
            <Text style={Styles.newsDes}>{Constants.READ_MORE}</Text>
          </View>
        </View> */}
    </TouchableOpacity>
  )
}
export default VideoComponent;