import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './assets/Style/formStyle';
import Form from './components/Form';
import AdvanceSearch from './components/AdvanceSearch';

const Stack = createStackNavigator();
const App = () => {
  return (
    <View style={ styles.app }>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="AdvanceSearch" component={AdvanceSearch} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;