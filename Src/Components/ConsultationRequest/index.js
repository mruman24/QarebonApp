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

const widthScreen = Dimensions.get('window').width;

const ConsultationRequest = (props) => {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")

  const [chronic_health, setChronic_health] = useState("")

  const [drug, setDrug] = useState("")
  const [illnes, setillnes] = useState("")
  const [comment, setComment] = useState("")



  const selectGender = (name) => {
    if (name == gender) {
      setGender('')
    } else {
      setGender(name)
    }
  }

  return (
    <>
      <View style={Styles.flexEmailWrapper}>
        {/*يمكنك استخدام اسما افتراضيا */}
        <View>
          <Text style={Styles.inputText}>{"الاسم الافتراضي"}</Text>
          <View style={Styles.flexEmailWrapperInner}>
            <TextInput
              style={Styles.flexEmailInput}
              value={name}
              placeholder={"يمكنك استخدام اسما افتراضيا"}
              writingDirection="rtl"
              placeholderTextColor={"#AFAFAF"}
              multiline={true}
              autoCapitalize='none'
              onChangeText={(value) => {
                setName(value)
              }}
            />
          </View>
        </View>

        {/* العمر */}
        <View>
          <Text style={Styles.inputText}>{"العمر"}</Text>
          <View style={Styles.flexEmailWrapperInner}>
            <TextInput
              style={Styles.flexEmailInput}
              value={age}
              placeholder={""}
              writingDirection="rtl"
              placeholderTextColor={"#AFAFAF"}
              multiline={true}
              autoCapitalize='none'
              onChangeText={(value) => {
                setAge(value)
              }}
            />
          </View>
        </View>
      </View>

      <View style={Styles.flexEmailWrapper}>
        {/* رقم الهاتف */}
        <View>
          <Text style={Styles.inputText}>{"رقم الهاتف"}</Text>
          <View style={Styles.flexEmailWrapperInner}>
            <TextInput
              style={Styles.flexEmailInput}
              value={phone}
              placeholder={"000 000 000 000"}
              writingDirection="rtl"
              placeholderTextColor={"#AFAFAF"}
              multiline={true}
              autoCapitalize='none'
              onChangeText={(value) => {
                setPhone(value)
              }}
            />
          </View>
        </View>



        <View style={Styles.checkBoxContainer}>

          <View style={{ flexDirection: 'row' }}>
            <Text style={Styles.optionText}>{"ذكر"}</Text>
            <TouchableOpacity onPress={() => { selectGender('male') }}>
              {
                gender == "male" ?
                  <Image source={Images.circleFilled} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
                  :
                  <Image source={Images.circle} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
              }
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={Styles.optionText}>{"أنثى"}</Text>
            <TouchableOpacity onPress={() => { selectGender('female') }}>
              {
                gender == "female" ?
                  <Image source={Images.circleFilled} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
                  :
                  <Image source={Images.circle} style={[Styles.imageCircle, { marginTop: hp(0.5) }]} />
              }
            </TouchableOpacity>
          </View>
        </View>


      </View>


      {/* هل تعاني من مشاكل صحية مزمنة ؟ */}
      <View style={Styles.singleEmailContainer}>
        <Text style={Styles.inputText}>{"هل تعاني من مشاكل صحية مزمنة ؟"}</Text>
        <View style={Styles.emailWrapper1}>
          <TextInput
            style={Styles.emailInput1}
            value={chronic_health}
            placeholder={"القلب - ضغط الدم - مشاكل الجهاز التنفسي - مشاكل الغدد "}
            writingDirection="rtl"
            placeholderTextColor={"#AFAFAF"}
            autoCapitalize='none'
            onChangeText={(value) => {
              setChronic_health(value)
            }}
          />
          <View style={Styles.inboxLine} />
          <TouchableOpacity >
            <Image source={Images.heart_Health} style={Styles.sentStyles1} />
          </TouchableOpacity>
        </View>
      </View>


      {/*هل تستخدم أي عقاراً مؤخراً ؟ */}
      <View style={Styles.singleEmailContainer}>
        <Text style={Styles.inputText}>{"هل تستخدم أي عقاراً مؤخراً ؟"}</Text>
        <View style={Styles.emailWrapper1}>
          <TextInput
            style={Styles.emailInput1}
            value={drug}
            placeholder={"يمكنك استخدام اسمك كما هو في البطاقة أو أي اسما افتراضيا"}
            writingDirection="rtl"
            placeholderTextColor={"#AFAFAF"}
            autoCapitalize='none'
            onChangeText={(value) => {
              setDrug(value)
            }}
          />
          <View style={Styles.inboxLine} />
          <TouchableOpacity >
            <Image source={Images.health} style={Styles.sentStyles1} />
          </TouchableOpacity>
        </View>
      </View>


      {/*هل لديك تاريخ مرضي نفسي على خلفية وراثية ؟*/}
      <View style={Styles.singleEmailContainer}>
        <Text style={Styles.inputText}>{"هل لديك تاريخ مرضي نفسي على خلفية وراثية ؟"}</Text>
        <View style={Styles.emailWrapper1}>
          <TextInput
            style={Styles.emailInput1}
            value={illnes}
            placeholder={"يمكنك استخدام اسمك كما هو في البطاقة أو أي اسما افتراضيا"}
            writingDirection="rtl"
            placeholderTextColor={"#AFAFAF"}
            autoCapitalize='none'
            onChangeText={(value) => {
              setillnes(value)
            }}
          />
          <View style={Styles.inboxLine} />
          <TouchableOpacity >
            <Image source={Images.mental} style={Styles.sentStyles2} />
          </TouchableOpacity>
        </View>
      </View>


      {/*  */}
      <View style={Styles.singleEmailContainer}>
        <Text style={Styles.inputText}>{"يمكنك كتابة استشاراتك هنا "}</Text>
        <View style={Styles.emailWrapperComplaint}>

          <TextInput
            style={Styles.emailInputComplaint}
            value={comment}
            placeholder={"يمكنك استخدام اسمك كما هو في البطاقة أو أي اسما افتراضيا"}
            writingDirection="rtl"
            placeholderTextColor={"#AFAFAF"}
            multiline={true}
            autoCapitalize='none'
            onChangeText={(value) => {
              setComment(value)
            }}
          />

        </View>
      </View>

      <Text style={Styles.messageText}>{"سيتم التعامل مع استشارتك بسرية تامة وسيصلك الرد خلال 48ساعة من وقت الإرسال"}</Text>

      {/* Bottom Button */}
      <View style={Styles.bottomButtonWrapper}>
        <TouchableOpacity
          // onPress={() => {
          //   this.props.navigation.navigate('AuthStack', {
          //     screen: 'LoginVisitor',

          //   })}}
          style={Styles.buttonContainer}>
          <Text style={Styles.buttonText}>{"إرسال التعليق"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => {
          //   this.props.navigation.navigate('AuthStack', {
          //     screen: 'LoginVisitor',

          //   })}}
          style={Styles.buttonContainer1}>
          <Text style={Styles.buttonText1}>{"العودة إلى الرئيسية"}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
export default ConsultationRequest;