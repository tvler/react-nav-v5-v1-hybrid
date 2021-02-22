/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import {
  NavigationActions,
  NavigationState,
  StackNavigator,
} from 'react-navigation-v1';

const V1Stack = StackNavigator({
  a: {
    screen: ({ navigation }) => {
      return (
        <View style={{ flex: 1 }}>
          <Text>AAAAAAAAAAA</Text>
          <Button
            title="B"
            onPress={() => {
              navigation.navigate('b');
            }}
          />
        </View>
      );
    },
  },
  b: {
    screen: ({ navigation }) => {
      return (
        <View style={{ flex: 1 }}>
          <Text>BBBBBBBBBB</Text>
          <Button
            title="A"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      );
    },
  },
});

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const DetailsScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};

const DetailsScreenFiber: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <View style={{ flexGrow: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'white', height: 300 }}>
        {show && <DetailsScreen />}
      </View>
      <Button
        title="Unmount inner fiber"
        onPress={() => {
          setShow((prev) => !prev);
        }}
      />
    </View>
  );
};

const Feed: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
};

const Messages: React.FC<BottomTabBarProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Messages Screen</Text> */}
      <V1Stack />
    </View>
  );
};

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreenFiber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
