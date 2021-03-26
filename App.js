import { StatusBar } from 'expo-status-bar';
// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, StyleSheet  } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// That is Navigation Bar
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//That is Home Screen Content
function HomeScreen() {
  return (
    <View style={styles.container}>
     <Image
      style={styles.workerAvatar}
      source={require('./assets/images/worker.png')}
    />
    <Text>Worker Name</Text>
    <Text>Worker Job</Text>
    <Divider style={ styles.workerDivider } />

    <Image
      style={styles.workerAvatar}
      source={require('./assets/images/worker.png')}
    />
    <Text>Worker Name</Text>
    <Text>Worker Job</Text>
    <Divider style={ styles.workerDivider } />


    <Image
      style={styles.workerAvatar}
      source={require('./assets/images/worker.png')}
    />
    <Text>Worker Name</Text>
    <Text>Worker Job</Text>
    <Divider style={ styles.workerDivider } />

    <Image
      style={styles.workerAvatar}
      source={require('./assets/images/worker.png')}
    />
    <Text>Worker Name</Text>
    <Text>Worker Job</Text>
    <Divider style={ styles.workerDivider } />
    <Image
      style={styles.workerAvatar}
      source={require('./assets/images/worker.png')}
    />
    <Text>Worker Name</Text>
    <Text>Worker Job</Text>
    <Divider style={ styles.workerDivider } />
    <Image
      style={styles.workerAvatar}
      source={require('./assets/images/worker.png')}
    />
    <Text>Worker Name</Text>
    <Text>Worker Job</Text>
    <Divider style={ styles.workerDivider } />
    <Image
      style={styles.workerAvatar}
      source={require('./assets/images/worker.png')}
    />
    <Text>Worker Name</Text>
    <Text>Worker Job</Text>
    <Divider style={ styles.workerDivider } />
    <Image
      style={styles.workerAvatar}
      source={require('./assets/images/worker.png')}
    />
    <Text>Worker Name</Text>
    <Text>Worker Job</Text>
    <Divider style={ styles.workerDivider } />
  </View>



  
  );
  
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    padding:15,
    marginLeft:15,
  },
  workerAvatar : {
    width:60,
    height:60,
    
  },
  logo: {
    width: 66,
    height:58,
  },
  workerDivider : {
   
  }

});



export default App;
