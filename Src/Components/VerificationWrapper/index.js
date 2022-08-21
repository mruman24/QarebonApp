import React, { Component, createRef } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import Colors from '../../Styles/Colors';
import Styles from './Styles';

class Verification extends Component {


  constructor(props) {
    super(props);
    this.firstInput = createRef();
    this.pin2ref = createRef();
    this.pin3ref = createRef();
    this.pin4ref = createRef();
    // this.pin5ref = createRef();
    // this.pin6ref = createRef();

    // this.focus = this.focus.bind(this);
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      // pin5: '',
      // pin6: '',
      focusValue: 1
    };
  }
  componentDidMount() {
    this.firstInput.current?.focus();
  }
  handleKeyPressPin2 = (e) => {
    if (e.nativeEvent.key === "Backspace") {
      this.setState({ pin1: '' })
      this.firstInput.current?.focus();
      this.setState({ focusValue: 1 })
    }
  };

  handleKeyPressPin3 = (e) => {
    if (e.nativeEvent.key === "Backspace") {
      this.setState({ pin2: '' })
      this.pin2ref.current?.focus();
      this.setState({ focusValue: 2 })
    }
  };
  handleKeyPressPin4 = (e) => {

    if (e.nativeEvent.key === "Backspace") {
      this.setState({ pin3: '' })
      this.pin3ref.current?.focus();
      this.setState({ focusValue: 3 })
    }
  };
  handleKeyPressPin5 = (e) => {
    if (e.nativeEvent.key === "Backspace") {
      this.setState({ pin4: '' })
      this.pin4ref.current?.focus();
      this.setState({ focusValue: 4 })
    }
  };

  handleKeyPressPin6 = (e) => {
    if (this.state.pin6 != '') {
      this.setState({ pin6: e.nativeEvent.key })
    }
    else {
      if (e.nativeEvent.key === "Backspace") {
        this.setState({ pin5: '' })
        this.pin5ref.current?.focus();
        this.setState({ focusValue: 5 })
      }
    }
  }


  render() {
    const { pin1, pin2, pin3, pin4, pin5, pin6, focusValue } = this.state
    const { screen } = this.props
    // console.log("pin3", pin3)

    return (
      <>
        <View style={Styles.inputContainer}>
          <TextInput
            ref={this.firstInput}
            value={pin1}
            style={[Styles.verificationInput, { borderColor: "#5F9275" }]}
            writingDirection="ltr"
            maxLength={1}
            autoCapitalize='none'
            onChangeText={value => {
              this.setState({ pin1: value, focusValue: 2 })
              this.props.value1(value)
              this.pin2ref.current?.focus();

            }}
          />
          <TextInput
            ref={this.pin2ref}
            value={pin2}
            style={[Styles.verificationInput, { borderColor: "#5F9275" }]}
            onKeyPress={this.handleKeyPressPin2}
            writingDirection="ltr"
            maxLength={1}
            autoCapitalize='none'
            onChangeText={value => {
              this.setState({ pin2: value, focusValue: 3 })
              this.props.value2(value)
              this.pin3ref.current?.focus();
            }}
          />
          <TextInput
            ref={this.pin3ref}
            value={pin3}
            style={[Styles.verificationInput, { borderColor: "#5F9275" }]}
            onKeyPress={this.handleKeyPressPin3}
            writingDirection="ltr"
            maxLength={1}
            autoCapitalize='none'
            onChangeText={value => {
              this.setState({ pin3: value, focusValue: 4 })
              this.props.value3(value)
              this.pin4ref.current?.focus();
            }}
          />
          <TextInput
            ref={this.pin4ref}
            value={pin4}
            style={[Styles.verificationInput, { borderColor: "#5F9275" }]}
            onKeyPress={this.handleKeyPressPin4}
            writingDirection="ltr"
            maxLength={1}
            autoCapitalize='none'
            onChangeText={value => {
              this.setState({ pin4: value, focusValue: 5 })
              this.props.value4(value)
            }}
          />

          {/* <TextInput
            ref={this.pin5ref}
            value={pin5}
            style={[Styles.verificationInput, { borderColor: "#5F9275" }]}
            onKeyPress={this.handleKeyPressPin5}
            autoCapitalize='none'
            maxLength={1}
            onChangeText={value => {
              this.setState({ pin5: value, focusValue: 6 })
              this.props.value5(value)
              this.pin6ref.current?.focus();
            }}
          />


          <TextInput
            ref={this.pin6ref}
            value={pin6}
            style={[Styles.verificationInput, { borderColor: "#5F9275" }]}
            onKeyPress={this.handleKeyPressPin6}
            autoCapitalize='none'
            maxLength={1}
            onChangeText={value => {
              this.setState({ pin6: value })
              this.props.value6(value)
              // this.pin6ref.current?.focus();
            }}
          /> */}

          {/* value6 */}
        </View>
      </>
    )
  }
}

export default Verification; 