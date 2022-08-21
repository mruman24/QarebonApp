import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/MainFlow/Home';
import Sections from '../Screens/MainFlow/Sections';
import PersonalAccount from '../Screens/MainFlow/ProfileSection/PersonalAccount';
import Settings from '../Screens/MainFlow/Settings';
import Consulting from '../Screens/MainFlow/ConsultantSection/Consulting';

// import Chat from '../Screens/MainFlow/Chat';

const navigationRef = React.createRef();



export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SectionsStack = createStackNavigator();
const ChatStack = createStackNavigator();
const PersonalAccountStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const chatStack = () => {
  return null
}

export const homeStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Consulting" component={Consulting} />
      {/* Consulting */}
    </HomeStack.Navigator>
  );
}

export const sectionsStack = () => {
  return (
    <SectionsStack.Navigator initialRouteName="Sections"
      screenOptions={{
        headerShown: false,
      }}>
      <SectionsStack.Screen name="Sections" component={Sections} />
    </SectionsStack.Navigator>
  );
}

const ChatPortion = ({ props }) => {
  console.log("props", props)
  return (
    <>
    </>
  );
}

export const personalAccountStack = () => {
  return (
    <PersonalAccountStack.Navigator initialRouteName="PersonalAccount"
      screenOptions={{
        headerShown: false,
      }}>
      <PersonalAccountStack.Screen name="PersonalAccount" component={PersonalAccount} />

    </PersonalAccountStack.Navigator>
  );
}
export const settingsStack = () => {
  return (
    <SettingsStack.Navigator initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
      }}>
      <SettingsStack.Screen name="Settings" component={Settings} />

    </SettingsStack.Navigator>
  );
}
export const BottomTabView = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image
          let name
          let line
          if (route.name === 'Home') {
            image = focused ? Images.homeIcon : Images.homeIcon;
            name = "الرئيسية";
            line = focused ? true : false
          }
          else if (route.name === 'Sections') {
            image = focused
              ? Images.sectionIcon
              : Images.sectionIcon;
            name = "الأقسام";
            line = focused ? true : false
          }
          else if (route.name === 'PersonalAccount') {
            image = focused ? Images.profileIcon : Images.profileIcon;
            name = "الحساب الشخصي";
            line = focused ? true : false
          }
          else if (route.name === 'Settings') {
            image = focused ? Images.settingIcon : Images.settingIcon;
            name = "الاعدادات";
            line = focused ? true : false
          }
          return (
            <>
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: Platform.OS == 'ios' ? hp(1) : 0
              }}>
                <Image
                  source={image}
                  style={{
                    width: route.name === 'PersonalAccount' ? hp(3) : route.name === 'Sections' ? hp(4) : hp(3.8),
                    height: route.name === 'Sections' ? hp(2.75) : hp(3.8),
                    // tintColor: focused ? Colors.Black : Colors.blue,
                    marginTop: Platform.OS == 'ios' ? hp(2) : 0
                  }}
                />
                <Text style={{
                  fontSize: hp(1.15),
                  fontWeight: '500',
                  fontFamily: 'Noto Sans Arabic',
                  color: "#F2EFEF",
                  marginTop: hp(0.7)
                }}>{name}</Text>

                {
                  line == true ?
                    <View style={{
                      width: hp(2.5),
                      height: hp(0.3),
                      borderRadius: 10,
                      backgroundColor: Colors.White,
                      marginTop: hp(0.5)
                    }} />
                    : null
                }
              </View>
            </>
          );
        },
        tabBarStyle: { height: hp(12), backgroundColor: "#459466", borderTopLeftRadius: 25, borderTopRightRadius: 25 },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          marginBottom: Platform.OS == 'android' ? hp(1.5) : hp(0.3),
          marginTop: Platform.OS == 'android' ? hp(-1.5) : hp(1)
        }
      })}
      tabBarOptions={{
        activeTintColor: Colors.Black,
        inactiveTintColor: Colors.blue,
      }}
    >
      <Tab.Screen name="Home" component={homeStack} />
      <Tab.Screen name="Sections" component={sectionsStack} />
      <Tab.Screen name="chatStack" component={chatStack}
        options={({ navigation }) => ({
          tabBarLabel: '',
          tabBarButton: (props) => (<TouchableOpacity onPress={() => navigation.navigate('EducationalStack', {
            screen: 'Chat',
          })}>
            <Image source={Images.chatIcon} style={{ width: hp(12), height: hp(12), marginTop: hp(-5) }} />
          </TouchableOpacity>)
        })}
      />
      <Tab.Screen name="PersonalAccount" component={personalAccountStack} />
      <Tab.Screen name="Settings" component={settingsStack} />
    </Tab.Navigator>
  );
}


export default BottomTabView;