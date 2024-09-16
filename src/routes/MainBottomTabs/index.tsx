import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ranking from '../../screens/Ranking';
import Home from '../../screens/Home';
import { gray, orange, slate, white } from 'tailwindcss/colors';
import Texto, { getTamanhoFontBase } from '../../components/Texto';
import classNames from '../../utils/classNames';
import Perfil from '../../screens/Perfil';
import LucideIcons from '../../utils/LucideIcons';
import { bottomTabRoute } from '../../types/bottomTabRoute.d';
import DisciplinasStack from '../DisciplinasStack';

const Tab = createBottomTabNavigator();

const BottomTabRoutes: Array<bottomTabRoute> = [
    {
        name: 'home',
        component: Home,
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
        component: Ranking,
        tabBarLabel: 'Ranking',
        tabBarIcon: 'trophy',
    },
    {
        name: 'perfil',
        component: Perfil,
        tabBarLabel: 'Perfil',
        tabBarIcon: 'user',
    },
    
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
                        tabBarLabel: ({focused}) => (
                            <Texto.Pequeno classNameTexto={classNames(focused ? 'text-orange-500' : 'text-gray-400')}>
                                {route.tabBarLabel}
                            </Texto.Pequeno>
                        ),
                        tabBarIcon: ({focused}) => (
                            <LucideIcons name={route.tabBarIcon} color={focused ? orange[500] : gray[400]} size={24} />
                        ),
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
