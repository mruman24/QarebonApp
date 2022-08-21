import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import Styles from './Styles';
import MyStatusBar from '../../Components/HeaderStatusBar'

const widthScreen = Dimensions.get('window').width;


const slides = [
  {
    key: 1,
    title: Constants.TITLE_1,
    description: Constants.TITLE_1_DES,
    image: Images.titleImage1,
    backgroundColor: 'white',
    button: Images.nextOnboard1
  },
  {
    key: 2,
    title: Constants.TITLE_2,
    description: Constants.TITLE_2_DES,
    image: Images.titleImage2,
    backgroundColor: 'white',
    button: Images.nextOnboard2
  },
  {
    key: 3,
    title: Constants.TITLE_3,
    description: Constants.TITLE_3_DES,
    image: Images.titleImage3,
    backgroundColor: 'white',
    button: Images.nextOnboard
  },
  {
    key: 4,
    title: Constants.TITLE_4,
    description: Constants.TITLE_4_DES,
    image: Images.titleImage4,
    backgroundColor: 'white',
    button: Images.confirmOnboard
  },
];

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      showRealApp: false,
      next: 0,
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={Styles.mainConatiner}>
        <View style={Styles.mainWrapper}>
          <Image source={item.image} style={Styles.imageStyling} />
        </View>
        <View style={Styles.mainContentWrapper}>
          <View style={Styles.mainContentData}>
            <Text style={Styles.titleName}>{item?.title}</Text>
            <Text style={Styles.titleDes}>{item?.description}</Text>

          </View>
        </View>
        <View style={Styles.bottomContent}>
          {
            item?.key != 4 ?
              <>
                <TouchableOpacity onPress={this.goNext}>
                  <Image source={item.button} style={[item?.key == 2 ? Styles.nextButton1 : Styles.nextButton]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('AuthStack', {
                    screen: 'AuthStart',
                  })
                }}>
                  <Text style={Styles.skipText}>{Constants.SKIP}</Text>
                </TouchableOpacity>
              </>
              :
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('AuthStack', {
                  screen: 'AuthStart',
                })
              }}>
                <Image source={Images.confirmOnboard} style={Styles.nextButton} />
              </TouchableOpacity>
          }
        </View>
      </View>
    );
  };
  goNext = () => {
    this.setState({ next: this.state.next + 1 });
    this.slider?.goToSlide(this.state.next + 1, true);
  };
  RenderNextButton = () => {
    return (
      <>
        <TouchableOpacity
          onPress={this.goNext}>

          <Text style={Styles.donateText}>{Constants.NEXT}</Text>
        </TouchableOpacity>
      </>
    );
  };
  RenderDoneButton = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>

          <Text style={Styles.donateText}>{Constants.GET_STARTED}</Text>
        </TouchableOpacity>
      </>
    );
  };
  changeSlide = (e) => {
    this.setState({ next: e });
  };
  render() {
    return (
      <>
        <MyStatusBar barStyle="light-content" backgroundColor={Colors.darkGreen} />
        <AppIntroSlider
          ref={(ref) => (this.slider = ref)}
          onSlideChange={(e) => this.changeSlide(e)}
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          bottomButton={false}

          // renderNextButton={this.RenderNextButton}
          // renderDoneButton={this.RenderDoneButton}
          dotStyle={{ backgroundColor: Colors.White }}
          activeDotStyle={{ backgroundColor: Colors.White }}
        />
      </>
    );
  }
}
