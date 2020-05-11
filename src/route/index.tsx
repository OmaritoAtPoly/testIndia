import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Main } from '../container';
import { Article } from '../container/article';

const StackNavigator = createStackNavigator();

export const navigator = (
    <StackNavigator.Navigator>
        <StackNavigator.Screen
            name="main"
            component={Main}
            options={{ headerShown: false }}
        />
        <StackNavigator.Screen
            name="article"
            component={Article}
            options={{ headerShown: false }}
        />
    </StackNavigator.Navigator>
)

