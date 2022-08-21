import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import MyStatusBar from '../../../Components/HeaderStatusBar';
import { withTranslation } from 'react-i18next';


class ConfirmationCode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
 

  render() {
    const { t } = this.props;
    return (
      <>
        <View style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper}>
              <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                <Image source={Images.backArrow} style={Styles.backIcon} />
              </TouchableOpacity>
              <Text style={Styles.headerText}>{t('ACTIVATE_ACCOUNT')}</Text>
              <View style={Styles.gap} />

            </View>
          </View>
          {/* Header Ends */}
          <Image source={Images.logo} style={Styles.logoHead} />
          <Text style={Styles.titleHead}>{Constants.ACTIVATION_CODE_NUMBER}</Text>
          <Text style={Styles.titleHeadDes}>{" + 927 (059) 000 00 00"}</Text>

          <View style={Styles.confirmationBox}>
            <Image source={Images.correctTick} style={Styles.doneStyle} />
            <Text style={Styles.boxHeadText}>{Constants.PHONE_NUMBER_ACTIVATE}</Text>

            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('BottomTabView', {
                screen: 'Home',

              })
            }}
              style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>{Constants.GO_TO_MAP}</Text>
            </TouchableOpacity>

          </View>

          <Text style={Styles.confirmBottomWrapper}>
            <Text style={{ color: "#5F9275" }}>{Constants.ACTIVATION_SEND}</Text>
            <Text style={{ color: "#122437" }}>{Constants.RESEND_CODE}</Text>
          </Text>

        </View>
      </>
    );
  }
}
export default withTranslation()(ConfirmationCode)