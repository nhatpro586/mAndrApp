import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react"
import SettingsScreen from '../screen/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopTab from './TopTab';

const Tab = createBottomTabNavigator();

const BottomTab =()=> {

    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={(props) => <TopTab {...props} isShow={true}/>} 
        options={{tabBarIcon: props => 
        <Icon {...props} name="home" color="red" />}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

export default BottomTab  