import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import InfoScreen from '../screens/Info';
import AppointmentScreen from '../screens/Appointment';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen name="home" component={HomeScreen} options={{headerTitle: '', headerTransparent: true}} />
            <MainStack.Screen name="info" component={InfoScreen} options={{headerTitle: '', headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="appointment" component={AppointmentScreen} options={{headerTitle: '', headerTransparent: true, headerLeft: null}} />
        </MainStack.Navigator>
    )
}