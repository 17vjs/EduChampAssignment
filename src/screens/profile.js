import React, {
  Component
} from 'react';
import {
  View,
  Text,
  ImageBackground
} from 'react-native';
import {
  ScrollView
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
export default class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }} >
          <View style={{ width: '25%', height: 120 }} >
            <ImageBackground
              style={{ flex: 1 }}
              source={require('../../images/wallpaper2.jpg')}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontFamily: "sans-serif-medium" }}>Caption</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ width: '25%', height: 120 }} >
            <ImageBackground
              style={{ flex: 1 }}
              source={require('../../images/index2.jpg')}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontFamily: "sans-serif-medium" }}>Caption</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ width: '25%', height: 120 }} >
            <ImageBackground
              style={{ flex: 1 }}
              source={require('../../images/index.jpg')}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontFamily: "sans-serif-medium" }}>Caption</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ width: '25%', height: 120 }} >
            <ImageBackground
              style={{ flex: 1, }}
              source={require('../../images/index.jpg')}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontFamily: "sans-serif-medium" }}>Caption</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ width: '25%', height: 120 }} >
            <ImageBackground
              style={{ flex: 1, }}
              source={require('../../images/index.jpg')}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontFamily: "sans-serif-medium" }}>Caption</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ width: '25%', height: 120 }} >
            <ImageBackground
              style={{ flex: 1, }}
              source={require('../../images/wallpaper.jpg')}
            >
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontFamily: "sans-serif-medium" }}>Caption</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    )
  }
}
ProfileScreen.navigationOptions = {
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'ios-person' : 'md-person'}
      color={tintColor}
      size={25}
    />
  )
}