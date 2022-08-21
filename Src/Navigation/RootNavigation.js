import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';
import AuthStart from '../Screens/Authentication/AuthStart';
import LoginVisitor from '../Screens/Authentication/LoginVisitor';
import LoginMember from '../Screens/Authentication/LoginMember';
import  ConfirmationCode from '../Screens/Authentication/ConfirmationCode';
import BottomTabView from './BottomNavigation';
import EducationalContent from '../Screens/MainFlow/EducationalContent';
import ReadArticle from '../Screens/MainFlow/ReadArticle';
import Chat from '../Screens/MainFlow/Chat';
import EditProfile from '../Screens/MainFlow/ProfileSection/EditProfile';
import Suggestions from '../Screens/MainFlow/ProfileSection/Suggestions';
import ContactUs from '../Screens/MainFlow/ProfileSection/ContactUs';
import Recruitment from '../Screens/MainFlow/ProfileSection/Recruitment';
import FrequestlyQuestions from '../Screens/MainFlow/ProfileSection/FrequestlyQuestions';
import AboutQarebon from '../Screens/MainFlow/ProfileSection/AboutQarebon';
import TrainingCourses from '../Screens/MainFlow/ProfileSection/TrainingCourses';
import InteractionSection from '../Screens/MainFlow/ProfileSection/InteractionSection';
import Favourite from '../Screens/MainFlow/ProfileSection/Favourite';
import InteractionDetail from '../Screens/MainFlow/ProfileSection/InteractionSection/InteractionDetail';
import VerificationCode from '../Screens/Authentication/VerificationCode';
import HealthSurvey from '../Screens/MainFlow/HealthSurvey';

enableScreens();

const Stack = createStackNavigator();
const navigationRef = React.createRef();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,

      }
    };
  },

};

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}


export default function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode='none' initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Onboarding' component={Onboarding} options={() => options}
          sharedElementsConfig={(props) => [
            {
              id: 'Onboarding', animation: 'fade-in'
            }
          ]}
        />
        <Stack.Screen name='AuthStack' component={AuthStack} />
        <Stack.Screen name='BottomTabView' component={BottomTabView} />
        <Stack.Screen name='EducationalStack' component={EducationalStack} />
        <Stack.Screen name='ProfileStack' component={ProfileStack} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="AuthStart"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'extend',
            }),
          },
        }),
      }}
      mode="modal"
    >
      {/* AuthStart */}
      <Stack.Screen name='AuthStart' component={AuthStart} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'AuthStart', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='LoginVisitor' component={LoginVisitor} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'LoginVisitor', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='LoginMember' component={LoginMember} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'LoginMember', animation: 'fade-in'
          }
        ]} />
         <Stack.Screen name='ConfirmationCode' component={ConfirmationCode} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'ConfirmationCode', animation: 'fade-in'
          }
        ]} />
         <Stack.Screen name='VerificationCode' component={VerificationCode} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'VerificationCode', animation: 'fade-in'
          }
        ]} />
     

    </Stack.Navigator>
  )
}





export const EducationalStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="EducationalContent"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'extend',
            }),
          },
        }),
      }}
      mode="modal"
    >
      <Stack.Screen name='EducationalContent' component={EducationalContent} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'EducationalContent', animation: 'fade-in'
          }
        ]} />
     
     {/* ReadArticle */}
     <Stack.Screen name='ReadArticle' component={ReadArticle} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'ReadArticle', animation: 'fade-in'
          }
        ]} />

      <Stack.Screen name='Chat' component={Chat} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Chat', animation: 'fade-in'
          }
        ]} />
  <Stack.Screen name='HealthSurvey' component={HealthSurvey} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'HealthSurvey', animation: 'fade-in'
          }
        ]} />

    </Stack.Navigator>
  )
}






export const ProfileStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="EditProfile"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'extend',
            }),
          },
        }),
      }}
      mode="modal"
    >
      <Stack.Screen name='EditProfile' component={EditProfile} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'EditProfile', animation: 'fade-in'
          }
        ]} />
         <Stack.Screen name='Suggestions' component={Suggestions} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Suggestions', animation: 'fade-in'
          }
        ]} />
         <Stack.Screen name='ContactUs' component={ContactUs} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'ContactUs', animation: 'fade-in'
          }
        ]} />
        <Stack.Screen name='Recruitment' component={Recruitment} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Recruitment', animation: 'fade-in'
          }
        ]} />
         <Stack.Screen name='FrequestlyQuestions' component={FrequestlyQuestions} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'FrequestlyQuestions', animation: 'fade-in'
          }
        ]} />
        <Stack.Screen name='AboutQarebon' component={AboutQarebon} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'AboutQarebon', animation: 'fade-in'
          }
        ]} />
         <Stack.Screen name='TrainingCourses' component={TrainingCourses} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'TrainingCourses', animation: 'fade-in'
          }
        ]} />
         <Stack.Screen name='InteractionSection' component={InteractionSection} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'InteractionSection', animation: 'fade-in'
          }
        ]} />
         <Stack.Screen name='Favourite' component={Favourite} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Favourite', animation: 'fade-in'
          }
        ]} />
         <Stack.Screen name='InteractionDetail' component={InteractionDetail} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'InteractionDetail', animation: 'fade-in'
          }
        ]} />
        
        {/*  */}
     
    </Stack.Navigator>
  )
}
// onPress={() => {
//   this.props.navigation.navigate('ChatFeature', {
//     screen: 'ChatView',
   
//   })
// }}

// params: {
//   chatRoomID: item?._id,
//   chatRoomName: item?.name,
//   chatRoomProject: item?.project,
//   chatRoomMembers: item?.members
// }