import { useNavigation, useNavigationState } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Header from '../Header';
import { white } from 'tailwindcss/colors';
import NavigateInterface from '../../interfaces/navigation';
import LucideIcons from '../../utils/LucideIcons';



export const BotaoHome = () => {
    const navigation = useNavigation<NavigateInterface>()
    const handlePress = () => {
        navigation.navigate('home')
    }

    return (
        <Header.HeaderRight
            onPress={handlePress}
        >
            <LucideIcons name="house" size={32} color={white} />
        </Header.HeaderRight>
    )
}

export const BotaoVoltar = () => {
    const navigation = useNavigation<NavigateInterface>()
    const routeState = useNavigationState(state => state.routes[state.index]);
    const currentTabIndex = routeState?.state?.index ?? 0;

    const handlePress = () => {
        if (currentTabIndex > 0 && routeState.state?.routeNames) {
            navigation.navigate(
                routeState?.state?.routeNames[currentTabIndex - 1],
                routeState.state?.routes[currentTabIndex - 1].params,
            )
        } else {
            navigation.goBack();
        }
    }

    return (
        <Header.HeaderLeft
            onPress={handlePress}>
            <LucideIcons name="chevron-left" size={28} color={white} />
        </Header.HeaderLeft>
    )
}

