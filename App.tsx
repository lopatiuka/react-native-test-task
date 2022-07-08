import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import { PhotosComponent } from './redux/features/photos/Photos';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsComponent } from './redux/features/photos/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={PhotosComponent}/>
          <Stack.Screen name="Details" component={DetailsComponent}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
