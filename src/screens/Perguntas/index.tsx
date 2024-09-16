import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import NavigateInterface from '../../interfaces/navigation';
import { fase } from '../../types/fase.d';

// import { Container } from './styles';

const Perguntas = () => {
  const navigation = useNavigation();
  const route = useRoute()
  // @ts-ignore
  const params: fase = route.params

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
  }, []);

  useFocusEffect(() => {
    const backAction = () => {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } });
      navigation.goBack();
      return true
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  });

  return <View />;
}

export default Perguntas;