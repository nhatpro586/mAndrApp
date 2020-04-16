import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react"
import SettingsScreen from '../screen/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screen/HomeScreen';
import HomeStack from './StackHome';

const Tab = createMaterialTopTabNavigator();

const TopTab =({isShow})=> {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{title: "Vinh" ,
        tabBarIcon: props => 
         <Icon {...props} name="home" color="red" />}}/>
        <Tab.Screen name="Home2" component={SettingsScreen} options={{
            title: "Vinh2"
        }}/>
        <Tab.Screen name="Hom3" component={HomeScreen} />

        <Tab.Screen name="Home 4" component={HomeScreen} />

        <Tab.Screen name="Homen " component={HomeScreen} />

      </Tab.Navigator>
    );
  }

export default TopTab  