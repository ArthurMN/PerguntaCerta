import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import Home from '../screens/Home';
import PerguntasRespostas from '../screens/PerguntasRespostas';
import SelecaoNivel from '../screens/SelecaoNivel';
import Ranking from '../screens/Ranking';

export type route = {
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

const routes: Array<route> = [
    {
        name:'home',
        component: Home,
    },
    {
        name:'perguntasRespostas',
        component: PerguntasRespostas,
    },
    {
        name:'selecaoNivel',
        component: SelecaoNivel,
    },
    {
        name: 'ranking',
        component: Ranking,
    }
]

export default routes;