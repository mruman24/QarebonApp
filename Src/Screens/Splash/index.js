import React, { Component } from 'react';
import {
  Image,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  saveDataAgain
} from '../../Redux/Actions/auth';


class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
  componentDidMount = async () => {
    this.showData()

  }

  showData = async () => {
    let user_token = await AsyncStorage.getItem('userLogin')
    // console.log("nafeel Logs::", user_token)
    if (user_token == 'null' || user_token == null) {
      setTimeout(() => {
        if (!this.moved) {
          this.props.navigation.navigate('Onboarding')
        }
      }, 3000);
    }
    else {
      let user = JSON.parse(user_token)
      console.log("nafeel Logs::", "user--", user)
      this.props.saveDataAgain(user)
    }
  }
  render() {
    return (
      <>

        <ImageBackground source={Images.splash}
          style={Styles.backgroundWrapper}>
        </ImageBackground>

      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    datalist: state.datalist,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveDataAgain: (user) => dispatch(saveDataAgain(user)),


  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);