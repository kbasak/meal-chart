import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreens from './screens/MealsOverviewScreens';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
//import FavoritesContextProvider from './store/context/favorites-context';

import { store } from './store/redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#421c0f',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 20,
        fontFamily: 'serif'
      },
      sceneContainerStyle: {
        backgroundColor: '#652e1c'
      },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}>
    <Drawer.Screen
      name='Categories'
      component={CategoriesScreen}
      options={{
        title: 'Meals Categories',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      }} />
    <Drawer.Screen name='Favourite' component={FavoriteScreen}
      options={{
        title: 'Favourites',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
      }} />
  </Drawer.Navigator>;
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            //To set header and content style for all screens 
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#421c0f',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontSize: 20,
                fontFamily: 'serif'
              },
              contentStyle: {
                backgroundColor: '#652e1c'
              }
            }}>
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              ////To set header and content style for individual screen
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreens}
            // options={({route, navigation})=>{
            //   const catId=route.params.categoryId;
            //   return {
            //     title: catId
            //   }
            // }} 
            />
            <Stack.Screen name='MealDetails' component={MealDetailScreen}
              options={{
                title: 'About The Meal'
              }} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
