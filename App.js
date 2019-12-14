import React, {
  Component
} from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  createAppContainer
} from 'react-navigation';
import {
  Divider,
  FAB
} from 'react-native-paper';
import AppNavigator from './src/lib/router';
const AppIndex = createAppContainer(AppNavigator)
export default class App extends Component {
  profile = {
    name: 'John Doe',
    designation: 'Senior Partner',
    followers: 846,
    street: 'RT Edgar - Toorak',
    city: '10 Wallace Aveneue',
    state: 'Toorak Vic 3143',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='red' barStyle='light-content' />
        <View style={{
          flexDirection: 'row',
          padding: 10,
        }} >
          <Icon onPress={
            () => Alert.alert('Back button Clicked', 'Hi',
              [{
                text: 'okay',
                style: 'destructive',
                onPress: () => { }
              }])
          }
            style={
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }
            }
            name="arrow-left"
            size={
              25
            }
          />
          <View style={{
            flex: 9,
            justifyContent: 'center',
            alignItems: 'center'
          }} >
            <Text style={{ fontSize: 25, fontFamily: "sans-serif-thin" }}> Agent Profile </Text>
          </View>
        </View>
        <View style={
          {
            backgroundColor: 'lightgrey',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }
        } >
          <Image style={
            {
              width: 100,
              height: 100,
              borderRadius: 100
            }
          }
            source={
              require('./images/wallpaper2.jpg')
            }
          />
          <View style={{
            flex: 1,
            paddingHorizontal: 20
          }} >
            <Text style={{ fontSize: 20, fontFamily: "sans-serif-thin" }}> {this.profile.name} </Text>
            <Text style={{ fontSize: 15, fontFamily: "sans-serif-thin" }} > {this.profile.designation} </Text>
            <Text style={{ fontSize: 15, fontFamily: "sans-serif-medium" }} > {this.profile.followers} Followers </Text>
            <View style={
              {
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            } >
              <Button onPress={
                () => Alert.alert('Edit button Clicked', 'Hi',
                  [{
                    text: 'okay',
                    style: 'destructive',
                    onPress: () => { }
                  }])
              }
                title="edit" />
            </View>
          </View>
        </View>
        <View style={
          {
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }
        } >
          <View style={{
            flex: 1
          }} >
            <Text style={{ fontSize: 20, fontFamily: "sans-serif-medium" }} > {this.profile.street} </Text>
            <Text style={{ fontSize: 15, fontFamily: "sans-serif-thin" }} > {this.profile.city} </Text>
            <Text style={{ fontSize: 15, fontFamily: "sans-serif-thin" }} > {this.profile.state} </Text>
          </View>
          <View style={
            {
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              width: 50,
              height: 50
            }
          } >
            <View style={
              {
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                borderRadius: 100,
                padding: 10,
                borderColor: "#0f0f0f",
                borderWidth: 1
              }
            } >
              <Icon name="comment"
                size={
                  20
                }
                onPress={
                  () => Alert.alert('Message Clicked', 'Hi',
                    [{
                      text: 'okay',
                      style: 'destructive',
                      onPress: () => { }
                    }])
                }
              />
            </View>
          </View>
          <View style={
            {
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              width: 50,
              height: 50
            }
          } >
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              width: '100%',
              height: '100%',
              borderRadius: 100,
              padding: 10,
              borderColor: "#0f0f0f",
              borderWidth: 1
            }} >
              <Icon name="phone"
                size={
                  20
                }
                onPress={
                  () => Alert.alert('Phone Clicked', 'Hi',
                    [{
                      text: 'okay',
                      style: 'destructive',
                      onPress: () => { }
                    }])
                } />
            </View>
          </View>
        </View>
        <Divider />
        <View style={{
          padding: 10,
          flexDirection: "row",
          flexWrap: 'wrap'
        }} >
          <Text style={{ fontFamily: "sans-serif-light" }} >{this.profile.description}</Text>
        </View>
        <AppIndex />
        <FAB style={
          styles.fab
        }
          icon="plus"
          onPress={
            () => Alert.alert('FAB Clicked', 'Hi',
              [{
                text: 'okay',
                style: 'destructive',
                onPress: () => { }
              }])
          }
        />
      </View>)
  }
}
const styles = StyleSheet.create({
  fab: {
    backgroundColor: 'red',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})