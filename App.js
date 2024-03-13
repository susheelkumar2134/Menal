
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet} from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
// import SignInWithOAuth from './App/Components/SignInWithOAuth';
// import Home from './App/Screens/Home';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {
  return (
    // <NavigationContainer>
    <ClerkProvider publishableKey={"pk_test_cmVndWxhci1wZW5ndWluLTE0LmNsZXJrLmFjY291bnRzLmRldiQ"}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <Text>
              login successfully
            </Text>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});





// import { Text, SafeAreaView, StyleSheet,View } from 'react-native';

// // You can import supported modules from npm
// // import { Card } from 'react-native-paper';

// // or any files within the Snack
// // import AssetExample from './components/AssetExample';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// // import Ionicons from '@expo/vector-icons/Ionicons';
// const Screen1 = () => {
//   return (
//     <View>
//       <Text>Screen 1</Text>
//     </View>
//   );
// };
// const Screen2 = () => {
//   return (
//     <View>
//       <Text>Screen 2</Text>
//     </View>
//   );
// };
// const Screen3 = () => {
//   return (
//     <View>
//       <Text>Screen 3</Text>
//     </View>
//   );
// };
// const Tab = createBottomTabNavigator();
// const BottomTabNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Screen1" component={Screen1} />
//         <Tab.Screen name="Screen2" component={Screen2} />
//         <Tab.Screen name="Screen3" component={Screen3} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
// export default function App() {
//   return (
//     <BottomTabNavigator/>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
