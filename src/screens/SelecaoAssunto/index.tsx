import React, { useEffect } from 'react';
import { BackHandler, Pressable, View } from 'react-native';
import PageLayout from '../../layout/PageLayout';
import Texto from '../../components/Texto';
import LucideIcons from '../../utils/LucideIcons';
import NavigateInterface from '../../interfaces/navigation';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { white } from 'tailwindcss/colors';
import { disciplina } from '../../types/disciplina.d';



type param = {
  dados: disciplina
  titulo: string
}

const SelecaoAssunto = () => {
  const navigation = useNavigation<any>()
  const route = useRoute()
  // @ts-ignore
  const param: param = route.params
  const { dados } = param
  const { assuntos, categoria } = dados

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

  const icons = ['square-pi', 'x', 'cuboid']

  return (
    <PageLayout temHeader>
      <View className='flex-1' style={{ gap: 24 }}>
        {assuntos.map((item, index) => (
          <Pressable key={item.id}
            onPress={() => navigation.navigate('selecao-nivel', { item: item, titulo: categoria })}
            className='justify-center'
          >
            <View className='bg-blue-600 rounded-full p-8 self-start z-10' style={{ elevation: 5 }}>
              <LucideIcons name={icons[index]} size={28} color={white} />
            </View>
            <View className='absolute w-full items-end rounded-full pr-4 pl-20 py-2 bg-blue-700' style={{ elevation: 5 }}>
              <Texto.Grande classNameTexto='text-gray-200'>
                {item.assunto}
              </Texto.Grande>
            </View>
          </Pressable>
        ))}
      </View>
    </PageLayout>
  )
}

export default SelecaoAssunto;