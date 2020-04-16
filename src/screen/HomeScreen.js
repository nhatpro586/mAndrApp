
import React from "react"
import {Button} from "react-native"
import {useNavigation} from '@react-navigation/native'

export default () => {
    const navigation = useNavigation()
    return <Button title="OK" onPress={(a, b)=> {
        navigation.navigate("Home2")
    }}/>
}