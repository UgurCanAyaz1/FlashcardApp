import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './src/screens/Home'
import FlashcardScreen from './src/screens/FlashcardScreen'
import { store } from './src/store/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator()

const App = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="FlashcardScreen" component={FlashcardScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    )
}

export default App

const styles = StyleSheet.create({})