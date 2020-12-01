
import React, { Component } from 'react';
import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
          <View style={{flex: 1}}>
              <Image 
                  source={require('./images/logo.png')}
                  style={styles.drawerImage}
              />
          </View>
          <View style={{flex: 2}}>
              <Text style={styles.drawerHeaderText}>
                  Ristorante Con Fusion
              </Text>
          </View>
      </View>
      <DrawerItemList {...props}/>
      </SafeAreaView>
  </ScrollView>
);

const MenuNavigator = createStackNavigator();
function MenuNavigatorScreen() {
    return(
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
                options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon 
                              name='menu' 
                              size={24}
                              color='white'
                              onPress={() => 
                                  navigation.toggleDrawer()}
                          />
                      )
                  
                  })
               }
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail"}}
            />            
        </MenuNavigator.Navigator>
    );
}
const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen(){
  return(
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{
          backgroundColor: "#512DA8"
        },
        headerTintColor:"fff",
        headerTitleStyle: {
            color:"#fff"
        }
      }}
      >
        <HomeNavigator.Screen
          name="MenuHome"
          component={Home}
          options={
            ({navigation}) => ({
                headerLeft: () => (
                    <Icon 
                        name='menu' 
                        size={24}
                        color='white'
                        onPress={() => 
                            navigation.toggleDrawer()}
                    />
                )
            
            })
         }
        />
    </HomeNavigator.Navigator>
  )
}
const ContactNavigator = createStackNavigator();
function ContactNavigatorScreen(){
  return(
    <ContactNavigator.Navigator
      initialRouteName='Contact'
      screenOptions={{
        headerStyle:{
          backgroundColor: "#512DA8"
        },
        headerTintColor:"fff",
        headerTitleStyle: {
            color:"#fff"
        }
      }}
      >
        <ContactNavigator.Screen
          name="Contact US"
          component={Contact}
          options={
            ({navigation}) => ({
                headerLeft: () => (
                    <Icon 
                        name='menu' 
                        size={24}
                        color='white'
                        onPress={() => 
                            navigation.toggleDrawer()}
                    />
                )
            
            })
         }
        />
    </ContactNavigator.Navigator>
  )
}
const AboutNavigator = createStackNavigator();
function AboutNavigatorScreen(){
  return(
    <AboutNavigator.Navigator
      initialRouteName='About'
      screenOptions={{
        headerStyle:{
          backgroundColor: "#512DA8"
        },
        headerTintColor:"fff",
        headerTitleStyle: {
            color:"#fff"
        }
      }}
      >
        <AboutNavigator.Screen
          name="About US"
          component={About}
          options={
            ({navigation}) => ({
                headerLeft: () => (
                    <Icon 
                        name='menu' 
                        size={24}
                        color='white'
                        onPress={() => 
                            navigation.toggleDrawer()}
                    />
                )
            
            })
         }
        />
    </AboutNavigator.Navigator>
  )
}

const MainNavigator = createDrawerNavigator();
function MainNavigatorDrawer() {
  return(
    <MainNavigator.Navigator 
      initialRouteName="Home"
      drawerStyle={{
          backgroundColor:'#D1C4E9'
      }}
      drawerContent={props => <CustomDrawerContentComponent {...props}/>}
    >
    <MainNavigator.Screen 
      name="Home"       
      component={HomeNavigatorScreen} 
      options={{
          drawerIcon: ({tintColor}) => (
              <Icon
                  name='home'
                  type='font-awesome'
                  size={24}
                  color={tintColor}
              />
          )
      }}
    />
    
    <MainNavigator.Screen 
      name="About"
      component={AboutNavigatorScreen}
      option={{
        drawerIcon:({tintColor})=>{
          <Icon 
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        }
      }}
    />
    <MainNavigator.Screen
      name="Menu"
      component={MenuNavigatorScreen}
      options={{
          drawerIcon: ({tintColor}) => (
              <Icon
                  name='list'
                  type='font-awesome'
                  size={24}
                  color={tintColor}
              />
          )
      }}          
    />
    <MainNavigator.Screen 
      name="Contact"
      component={ContactNavigatorScreen}
      option={{
        drawerIcon:({tintColor})=>{
          <Icon 
            name='address-card'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        }
      }}
    />
    </MainNavigator.Navigator>

  )
}


class Main extends Component {

  render() {

    return (
        <NavigationContainer>
            <MainNavigatorDrawer />           
        </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Main;