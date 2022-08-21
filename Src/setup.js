import React, { Component } from 'react';
import { View, LogBox, I18nManager } from 'react-native';
import RootNavigation from './Navigation/RootNavigation';
import { withTranslation } from 'react-i18next';


LogBox.ignoreAllLogs()


class Root extends Component {

  componentDidMount = () => {
    const { i18n } = this.props;
    i18n
      .changeLanguage('ar')
      .then(() => {
        // I18nManager.forceRTL(i18n.language === 'ar');
        // RNRestart.Restart();
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
      });
  }

  render() {
    return (
      <>
        <View style={{ flex: 1 }}>
          <RootNavigation />
        </View>
      </>
    );
  }
}
export default withTranslation()(Root);
