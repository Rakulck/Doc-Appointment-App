import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens here
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import DoctorProfile from '../screens/DoctorProfile';
import NotificationsScreen from '../screens/NotificationsScreen';

import Stethoscope_Selected from '../assets/icons/Stethoscope_Selected';
import Stethoscope_Icon from '../assets/icons/Stethoscope_Icon';
import Home_Icon from '../assets/icons/Home_Icon';
import Menu_Icon from '../assets/icons/Menu_Icon';
import Bell_Icon from '../assets/icons/Bell_Icon';
import Home_Selected_Icon from '../assets/icons/Home_Selected_Icon';
import Menu_Selected from '../assets/icons/Menu_Selected';
import Notification_Icon from '../assets/icons/Notification_Icon';
import Notification_Selected from '../assets/icons/Notification_Selected';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconComponent;

          // Check the route name and set the appropriate icon
          if (route.name === 'Home') {
            iconComponent = focused ? <Home_Selected_Icon color={color} /> : <Home_Icon color={color} />;
          } else if (route.name === 'Explore') {
            iconComponent = focused ? <Stethoscope_Selected color={color} /> : <Stethoscope_Icon color={color} />;
          } else if (route.name === 'Profile') {
            iconComponent = focused ? <Menu_Selected color={color} /> : <Menu_Icon color={color} />;
          } else if (route.name === 'Notifications') {
            iconComponent = focused ? <Notification_Selected color={color} /> : <Notification_Icon color={color} />;
          }

          return iconComponent;
        },
        tabBarActiveTintColor: '#18A0FB',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: {
          display: 'none', // Hide the tab bar label
        },
        tabBarStyle: {
          display: 'flex',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 1,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false, tabBarHideOnKeyboard: true }} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
    </Stack.Navigator>
  );
};

export default Navigation;
