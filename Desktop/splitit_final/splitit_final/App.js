import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Import your components
import LandingPage from "./components/landingPage/landingPage";
import numberOfPeople from './components/numberOfPeople/numberOfPeople';
import checkList from "./components/checkListPage/checkList"
import loadingPage from "./components/loadingPage/loadingPage"
import resultPage from "./components/resultPage/resultPage"
import Receipt from './components/receiptPage/receipt';


const Stack = createStackNavigator();


export default function App() {
   return (
       <NavigationContainer>
           <Stack.Navigator initialRouteName="LandingPage">
               <Stack.Screen name="landingPage" component={LandingPage} options={{ headerShown: false }} /> 
               <Stack.Screen name="numberOfPeople" component={numberOfPeople} options={{ headerShown: false }} />
               <Stack.Screen name="checkList" component={checkList} options={{ headerShown: false }} />
               <Stack.Screen name="loadingPage" component={loadingPage} options={{ headerShown: false }} />
               <Stack.Screen name="resultPage" component={resultPage} options={{ headerShown: false }} /> 
               <Stack.Screen name="receiptPage" component={Receipt} options={{ headerShown: false }} />

           </Stack.Navigator>
       </NavigationContainer>
   );
}
