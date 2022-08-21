import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import StarRating from 'react-native-star-rating';

const CoursesList = (props) => {

  const { item, unique } = props

  const [starCount] = useState(5)

  return (
    <View style={Styles.listContainer}>
      {/* <Image source={Images.bookmark} style={Styles.bookmarkStyle} /> */}
      <View style={Styles.listContainerInner}>

        <View style={Styles.contentWrapper}>
          <Image source={Images.image_Consult_1} style={Styles.courseImage} />
          <View style={{ marginLeft: hp(2) }}>
            <Text style={Styles.titleCourse}>{item.name}</Text>
            <Text style={Styles.desCourse}>{"أستاذ مشارك - قسم الارشاد النفسي"}</Text>
            <Text style={Styles.desCourse}>{"جامعة الملك سعود - الرياض"}</Text>

            <View style={{ flexDirection: 'row', marginTop: hp(0.4) }}>
              <View style={Styles.starContainer}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  starSize={hp(1.5)}
                  rating={starCount}
                  fullStarColor={"#FEC007"}
                  halfStarColor={"#B9B9B9"}
                />
              </View>
              <View style={{ flexDirection: "row", marginTop: hp(0.4) }}>

                <Text style={Styles.socialCourse1}>{"مؤديّ الدورة"}</Text>
                {/* <Image source={Images.consult2} style={{ width: hp(2.5), height: (2), marginLeft: hp(0.5), tintColor: "#383561" }} /> */}
              </View>
            </View>
            {/* <View style={{ flexDirection: 'row', marginTop: hp(0.4) }}>
              <TouchableOpacity style={Styles.socialButton}>
                <Image source={Images.like} style={Styles.buttonImage} />
              </TouchableOpacity>
              <TouchableOpacity style={[Styles.socialButton, { marginLeft: hp(1) }]}>
                <Image source={Images.comment} style={Styles.buttonImage} />
              </TouchableOpacity>
            </View> */}

          </View>
        </View>

      </View>
    </View>
  )
}

export default CoursesList;