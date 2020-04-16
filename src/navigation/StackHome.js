import { createStackNavigator } from '@react-navigation/stack';
import React from "react"
import SettingsScreen from '../screen/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screen/HomeScreen';

const Tab = createStackNavigator();

const HomeStack =({isShow})=> {
    return (
      <Tab.Navigator headerMode="none">
        <Tab.Screen name="AA" component={HomeScreen}/>
        <Tab.Screen name="OO" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

export default HomeStack  