import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerguntasRespostas from '../../screens/PerguntasRespostas';
import SelecaoNivel from '../../screens/SelecaoNivel';
import Ranking from '../../screens/Ranking';
import Home from '../../screens/Home';
import { slate, white } from 'tailwindcss/colors';
import { getTamanhoFontBase } from '../../components/Texto';


export type BottomTabRoute = {
    name: string,
    component: (any: any) => JSX.Element,
    title?: string,
    showHeader?: boolean,
    showBackButton?: boolean,
    statusBarHidden?: boolean,
    statusBarStyle?: 'dark' | 'light',
    statusBarColor?: string,
    statusBarTranslucent?: boolean,
}


const Tab = createBottomTabNavigator();


const BottomTabRoutes: Array<BottomTabRoute> = [
    {
        name: 'home',
        component: Home,
    },
    {
        name: 'perguntasRespostas',
        component: PerguntasRespostas,
    },
    {
        name: 'selecaoNivel',
        component: SelecaoNivel,
    },
    {
        name: 'ranking',
        component: Ranking,
    }
]



const MainBottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='home'
        >
            {BottomTabRoutes.map(route => (
                <Tab.Screen
                    key={route.name}
                    options={{
                        headerShown: !!route.showHeader,
                        headerTitle: route.title,
                        headerStyle: { backgroundColor: slate[700] },
                        headerTitleAlign: 'left',
                        headerTintColor: 'white',
                        headerTitleStyle: { color: white, fontSize: getTamanhoFontBase() + 4 },
                    }}
                    name={route.name}
                    component={route.component}
                />
            ))}
        </Tab.Navigator>
    )
}

export default MainBottomTabs
