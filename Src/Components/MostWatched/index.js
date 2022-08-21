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

const MostWatched = (props) => {

  const { item, keyID, activeSlideWatched } = props

  return (
    <>
      <TouchableOpacity key={keyID}>
        <ImageBackground source={{ uri: item?.picture }} style={Styles.watchedImage} imageStyle={{ borderRadius: 10 }}>
          <View style={Styles.setOpacity}>
            <View style={Styles.socialContainer1}>
              {item?.favourite == true ?
                <Image source={Images.bookmark} style={Styles.bookmarkStyle} /> : null}
            </View>
            <View style={Styles.socialContainer}>

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

            </View>
          </View>
        </ImageBackground>

        <View style={Styles.newsWrapper}>
          <View style={Styles.newsInnerWrapper}>
            <Text style={Styles.newsHead}>{item?.name}</Text>
            {/* <Text style={Styles.newsDes}>{Constants.MOST_WATCHED_DES}</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}
export default MostWatched;