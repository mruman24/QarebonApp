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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { withTranslation } from 'react-i18next';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ShowChatMessages } from '../../../Components/ChatMessages';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      Opposite: [
        {
          id: `1`,
          type: 'text',
          message: 'Hello',
          content: 'hello world',
          targetId: '12345678',
          userAvatar: Images.userIcon,
          fullName: 'Micke',
          nickName: 'Test',
          renderTime: true,
          sendStatus: 0,
          time: '1542006036549'
        }
      ],
      allChatList: [
        {
          message: "وعليكم السلام ورحمة الله وبركاته",
          sender: 2,
          width: hp(25),
          showDate: false,
          showProfile: false,
          rating: false
        },
        {
          message: "أهلا بك أخي , حياك كيف أقدر أساعدك",
          sender: 2,
          width: hp(35),
          showDate: true,
          showProfile: true,
          rating: false
        },
        {
          message: "صار لي فترة أشعر بالنفور من ذاتي والإحباط وفكرت أزور دكتور نفسي لكن خوفي من نظرة عائلتي والمجتمع لي يمنعني",
          sender: 1,
          width: hp(40),
          showDate: false,
          showProfile: false,
          rating: false
        },
        {
          message: "أنا متعب جدا وأتمنى ألقى الدعم النفسي بعيد عن أنظار الناس",
          sender: 1,
          width: hp(35),
          showDate: true,
          showProfile: true,
          rating: false
        },
        {
          message: "لا تقلق في تطبيق قريبون يتم الأمر بسرية تامة وأمان ",
          sender: 2,
          width: hp(42),
          showDate: true,
          showProfile: true,
          rating: false
        },
        {
          message: "بارك الله فيكم أخوي ",
          sender: 1,
          width: hp(35),
          showDate: false,
          showProfile: true,
          rating: true
        }
      ]
    };
    this.moved = false;
  }

  render() {
    const { chatMessage, allChatList, Opposite } = this.state
    return (
      <>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={Styles.fullContainer}>
          <SafeAreaView style={Styles.mainHeadConatiner} />
          <SafeAreaView style={Styles.MainContainer}>
            <View style={Styles.MainContainer}>
              <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
              {/* Header */}
              <View style={Styles.headerContainer}>
                <View style={Styles.headerWrapper}>
                  <View style={Styles.gap} />
                  <Text style={Styles.headerText}>{"المحادثة"}</Text>
                  <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                    <Image source={Images.backArrow} style={Styles.backIcon} />
                  </TouchableOpacity>

                </View>
              </View>
              {/* Header Ends */}
              <ScrollView
                ref={ref => { this.scrollView = ref }}
                onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
              // keyboardShouldPersistTaps='always'
              >
                <View style={{
                  marginTop: 20, marginBottom: 20, width: '95%', alignSelf: 'center'
                }}>
                  {allChatList?.length > 0 && allChatList?.map((showmessage) => (
                    <ShowChatMessages
                      showmessage={showmessage} key={showmessage._id} userId={showmessage._id} oppositeUser={Opposite}
                      senderID={1}
                    />
                  ))}
                </View>
              </ScrollView>
              <View style={Styles.bottomWrapper}>
                <View style={Styles.bottomWrapperInner}>

                  <TouchableOpacity>
                    <Image source={Images.sendMessage} style={Styles.sendStyle} />
                  </TouchableOpacity>
                  <View style={Styles.emailWrapper}>
                    <TextInput
                      ref={this.firstInput}
                      style={Styles.emailInput}
                      value={chatMessage}
                      placeholder={"يمكنك كتابة رسالتك هنا"}
                      placeholderTextColor={"rgba(0,0,0,0.44)"}
                      writingDirection="rtl"
                      autoCapitalize='none'
                      onSubmitEditing={this.onEndEditing}
                      blurOnSubmit={false}
                      onChangeText={(value) =>
                        this.setState({ chatMessage: value })
                      }
                    />
                  </View>


                  <TouchableOpacity>
                    <Image source={Images.picker} style={Styles.pickerStyle} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </>
    );
  }
}
export default withTranslation()(Chat)