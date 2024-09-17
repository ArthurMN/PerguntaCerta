import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { stackRoute } from '../../types/stackRoute.d';
import EmObras from '../../screens/EmObras';
import { slate, white } from 'tailwindcss/colors';
import { getTamanhoFontBase } from '../../components/Texto';
import Disciplinas from '../../screens/Disciplinas';
import SelecaoAssunto from '../../screens/SelecaoAssunto';
import SelecaoNivel from '../../screens/SelecaoNivel';
import Perguntas from '../../screens/Perguntas';

const Stack = createNativeStackNavigator();

const StackRoutes: Array<stackRoute> = [
    {
        name: 'disciplinas',
        component: Disciplinas,
    },
    {
        name: 'selecao-assunto',
        component: SelecaoAssunto,
        showHeader: true,
        showBackButton: true,
        statusBarColor: slate[700]
    },
    {
        name: 'selecao-nivel',
        component: SelecaoNivel,
        showHeader: true,
        showBackButton: true,
        statusBarColor: slate[700]
    },
    {
        name: 'perguntas',
        component: Perguntas,
        statusBarColor: slate[700]
    },
    {
        name: 'em-obras',
        component: EmObras,
        showHeader: true,
        showBackButton: true,
    },
]

const DisciplinasStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='disciplinas'
            screenOptions={{
                headerShadowVisible: false,
            }}
        >
            {StackRoutes.map(route => (
                <Stack.Screen
                    key={route.name}
                    options={{
                        statusBarColor: route.statusBarColor ? route.statusBarColor : slate[800],
                        statusBarTranslucent: !!route.statusBarTranslucent,
                        statusBarStyle: route?.statusBarStyle,
                        headerBackVisible: !!route.showBackButton,
                        headerShown: !!route.showHeader,
                        headerTitle: route.title || '',
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

export default DisciplinasStack;