import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import MyStatusBar from '../../../Components/HeaderStatusBar';


class AuthStart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }

  render() {
    return (
      <>
        <SafeAreaView style={Styles.mainHeadConatiner} />
        <SafeAreaView style={Styles.mainConatiner}>
          <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
          <View style={Styles.mainContentConatiner}>
            <Image source={Images.logo} style={Styles.logoHead} />

            <Text style={Styles.titleHead}>{Constants.QREEBEEN_APP}</Text>
            <Text style={Styles.titleHeadDes}>{Constants.QREEBEEN_APP_DES}</Text>

            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('AuthStack', {
                screen: 'LoginVisitor',

              })
            }}
              style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>{Constants.LOGIN_AS_VISITOR}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('AuthStack', {
                screen: 'LoginMember',

              })
            }}
              style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>{Constants.LOGIN_AS_MEMBOR}</Text>
              {/* <Text style={Styles.buttonText}>{"Member"}</Text> */}
            </TouchableOpacity>
          </View>

        </SafeAreaView>

      </>
    );
  }
}
export default AuthStart