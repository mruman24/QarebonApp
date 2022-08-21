import React, { useState } from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SurveyPopup = (props) => {

  const { open, close } = props

  return (
    <>
      <Modal animationInTiming={300}
        animationOutTiming={300}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.9}
        avoidKeyboard={true}
        backdropColor={"rgba(0,0,0,0.7)"}
        transparent={true}
        isVisible={open}
        onBackdropPress={close}
        style={{ flex: 1, justifyContent: 'center', }}>
        <View style={Styles.modalCont}>

          <View style={Styles.headerWrapper}>

            <Image source={Images.modelTick} style={Styles.headImage}/>

            <Text style={Styles.surveyTitle}>{"سيتم تقييم صحتك النفسية بناءاً على اجابتك على الاستفسارات السابقة"}</Text>



            <TouchableOpacity onPress={close}
              style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>{"الذهاب إلى التقييم"}</Text>
            </TouchableOpacity>
          </View>


        </View>
      </Modal>
    </>
  );
}
export default SurveyPopup;