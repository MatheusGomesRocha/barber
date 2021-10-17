import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen component={HomeScreen} options={{headerTitle: null, headerBackground: 'transparent'}} />
        </MainStack.Navigator>
    )
}