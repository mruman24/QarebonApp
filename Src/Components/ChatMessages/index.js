import React, { useEffect, useState } from 'react';
import styles from './Styles';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground
} from 'react-native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import StarRating from 'react-native-star-rating';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export const ShowChatMessages = ({ showmessage, userId, oppositeUser, senderID }) => {
  const { message, sender, width, showDate, showProfile, rating } = showmessage;
  var date = new Date()
  const recieved = userId != 2;

  const [starCount, setStarCount] = useState(5)

  return <View style={senderID != sender ? styles.receivedWrapper : styles.chatMessageWrapper}>
    <View style={senderID != sender ? styles.receivedInnerWrapper : styles.chatMessageInner}>
      <View style={styles.chatMessageHeader}>
        {senderID != sender ?
          <View style={styles.avatarName}>
            {/* <Text style={styles.textName}>{"Rosa Morales Aspillaga"}</Text> */}
            <View style={{
              flexDirection: 'row',
              marginLeft: 5,
            }}>
              {/* <Image source={Images.check} style={styles.ImageChecing} /> */}
            </View>
          </View>
          :
          <View style={{
            flexDirection: 'row',
            marginLeft: '60%'
          }}>
            {/* <Image source={Images.check} style={styles.ImageChecing} /> */}
          </View>
        }
      </View>

      {
        senderID != sender ?
          <>
            <View style={{ width: width }}>
              <View style={[styles.chatMessageHeaderText]}>
                {
                  showProfile == true ?
                    <>
                      <View style={{ flexDirection: 'row', }}>
                        <Image source={Images.chatProfile_1} style={styles.ImageContainer} />
                        <Text style={{ color: "#363333", margin: 10, fontSize: 14, textAlign: 'left' }}>{message}</Text>
                      </View>
                    </>
                    :
                    <Text style={{ color: "#363333", margin: 10, fontSize: 14, textAlign: 'left' }}>{message}</Text>
                }

              </View>
              <View style={{
                flexDirection: 'row',
                marginLeft: 5,
                alignSelf: "flex-end"
              }}>
                {
                  showDate == true ?
                    <Text style={styles.DateWrapper}>{"18:03"}</Text>
                    : null
                }
              </View>
            </View>
          </>
          :
          <>
            <View style={{ width: width }}>
              <View style={[styles.chatMessageHeaderText1]}>
                {
                  showProfile == true ?
                    <>
                      <View style={{ flexDirection: 'row', }}>
                        <Text style={{ color: "#363333", margin: 10, fontSize: 14, textAlign: 'left' }}>{message}</Text>
                        {
                          rating == true ?
                            <View style={styles.starContainer}>
                              <StarRating
                                disabled={true}
                                maxStars={5}
                                starSize={hp(1.5)}
                                rating={starCount}
                                fullStarColor={"#FEC007"}
                                halfStarColor={"#B9B9B9"}
                              />
                            </View>
                            : null
                        }
                        <Image source={Images.chatProfile} style={styles.ImageContainer} />
                      </View>
                    </>
                    :
                    <Text style={{ color: "#363333", margin: 10, fontSize: 14, textAlign: 'left' }}>{message}</Text>
                }
              </View>
              <View style={{
                flexDirection: 'row',
                marginLeft: 5,
                alignSelf: 'flex-end'
              }}>
                {
                  showDate == true ?
                    <>
                      <Image source={Images.check} style={styles.ImageChecing} />
                      <Text style={styles.DateWrapper1}>{"18:03"}</Text>
                    </>
                    : null
                }

              </View>
            </View>
            {/* <Text style={styles.DateWrapper1}>{"18:03"}</Text> */}
          </>
      }
    </View>
  </View >

}