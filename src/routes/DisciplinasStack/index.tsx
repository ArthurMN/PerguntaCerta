import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { stackRoute } from '../../types/stackRoute.d';
import EmObras from '../../screens/EmObras';
import { blue, slate, white } from 'tailwindcss/colors';
import { getHeaderTitle } from '@react-navigation/elements';
import Disciplinas from '../../screens/Disciplinas';
import SelecaoAssunto from '../../screens/SelecaoAssunto';
import SelecaoNivel from '../../screens/SelecaoNivel';
import Perguntas from '../../screens/Perguntas';
import Header from '../../components/Header';
import { BotaoVoltar } from '../../components/BotoesHeader';
import LucideIcons from '../../utils/LucideIcons';

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
        statusBarColor: slate[700],
        headerLeft: () => <BotaoVoltar />
    },
    {
        name: 'selecao-nivel',
        component: SelecaoNivel,
        showHeader: true,
        showBackButton: true,
        statusBarColor: slate[700],
        headerLeft: () => <BotaoVoltar />
    },
    {
        name: 'perguntas',
        component: Perguntas,
        showHeader: true,
        statusBarColor: slate[700],
        headerLeft: () => (
            <Header.HeaderLeft onPress={() => {}}>
                <LucideIcons name='square-pi' size={32} color={blue[600]} />
            </Header.HeaderLeft>
        )
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
            {StackRoutes.map(routes => (
                <Stack.Screen
                    key={routes.name}
                    options={{
                        statusBarColor: routes.statusBarColor ? routes.statusBarColor : slate[800],
                        statusBarTranslucent: !!routes.statusBarTranslucent,
                        statusBarStyle: routes?.statusBarStyle,
                        headerBackVisible: !!routes.showBackButton,
                        headerShown: !!routes.showHeader,
                        // headerTitle: route.title || '',
                        statusBarHidden: !!routes?.statusBarHidden,
                        header: ({ route, options }) => (
                            <Header >
                                {routes.headerLeft
                                    ? routes.headerLeft({ canGoBack: true })
                                    : null}
                                <Header.HeaderTitle >
                                    {getHeaderTitle(options, route.params?.titulo || 'teste')}
                                </Header.HeaderTitle>
                                {routes.headerRight
                                    ? routes.headerRight({ canGoBack: true })
                                    : null}
                            </Header>
                        ),
                    }}
                    name={routes.name}
                    component={routes.component}
                />
            ))}
        </Stack.Navigator>
    )
}

export default DisciplinasStack;