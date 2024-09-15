import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import MainBottomTabs from '../MainBottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { slate, white } from 'tailwindcss/colors';
import { getTamanhoFontBase } from '../../components/Texto';




export type StackRoute = {
    name: string,
    component: (any: any) => JSX.Element,
    title?: string,
    showHeader?: boolean,
    showBackButton?: boolean,
    statusBarHidden?: boolean,
    statusBarStyle?: 'dark' | 'light',
    statusBarColor?: string,
    statusBarTranslucent?: boolean,
    headerRight?: (props: HeaderButtonProps) => React.ReactNode,
    headerLeft?: (props: HeaderButtonProps) => React.ReactNode,
}

const Stack = createNativeStackNavigator();


const StackRoutes: Array<StackRoute> = [
    {
        name: 'main-bottom-tabs',
        component: MainBottomTabs
    },
]



const MainStack = () => {
    return (
        <Stack.Navigator>
            {StackRoutes.map(route => (
                <Stack.Screen
                    key={route.name}
                    options={{
                        statusBarColor: route.statusBarColor ? route.statusBarColor : slate[900],
                        statusBarTranslucent: !!route.statusBarTranslucent,
                        statusBarStyle: route?.statusBarStyle,
                        headerBackVisible: !!route.showBackButton,
                        headerShown: !!route.showHeader,
                        headerTitle: route.title,
                        statusBarHidden: !!route?.statusBarHidden,
                        headerStyle: { backgroundColor: slate[700] },
                        headerTitleAlign: 'left',
                        headerTintColor: 'white',
                        headerTitleStyle: { color: white, fontSize: getTamanhoFontBase() + 4 },
                    }}
                    name={route.name}
                    component={route.component}
                />
            ))}
        </Stack.Navigator>
    )
}

export default MainStack


