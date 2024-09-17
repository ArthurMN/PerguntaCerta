import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ranking from '../../screens/Ranking';
import Home from '../../screens/Home';
import { amber, gray, orange, slate, white } from 'tailwindcss/colors';
import Texto, { getTamanhoFontBase } from '../../components/Texto';
import classNames from '../../utils/classNames';
import Perfil from '../../screens/Perfil';
import LucideIcons from '../../utils/LucideIcons';
import { bottomTabRoute } from '../../types/bottomTabRoute.d';
import DisciplinasStack from '../DisciplinasStack';
import EmObras from '../../screens/EmObras';

const Tab = createBottomTabNavigator();

const BottomTabRoutes: Array<bottomTabRoute> = [
    {
        name: 'home',
        component: EmObras,
        tabBarLabel: 'Início',
        tabBarIcon: 'house',
    },
    {
        name: 'disciplinas-stack',
        component: DisciplinasStack,
        tabBarLabel: 'Disciplinas',
        tabBarIcon: 'library',
    },
    {
        name: 'ranking',
        component: EmObras,
        tabBarLabel: 'Ranking',
        tabBarIcon: 'trophy',
    },
    {
        name: 'perfil',
        component: EmObras,
        tabBarLabel: 'Perfil',
        tabBarIcon: 'user',
    },

]



const MainBottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='disciplinas-stack'
        >
            {BottomTabRoutes.map(route => (
                <Tab.Screen
                    key={route.name}
                    options={{
                        headerShown: !!route.showHeader,
                        headerTitle: route.title,
                        tabBarLabel: ({ focused }) => (
                            <Texto.Pequeno classNameTexto={classNames(focused ? 'text-amber-600' : 'text-gray-400')}>
                                {route.tabBarLabel}
                            </Texto.Pequeno>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <LucideIcons name={route.tabBarIcon} color={focused ? amber[600] : gray[400]} size={28} />
                        ),
                        tabBarStyle: { position: 'absolute', height: '8%', paddingBottom: 8 },
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
