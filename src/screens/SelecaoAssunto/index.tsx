import React from 'react';
import { Pressable, View } from 'react-native';
import PageLayout from '../../layout/PageLayout';
import Texto from '../../components/Texto';
import LucideIcons from '../../utils/LucideIcons';
import NavigateInterface from '../../interfaces/navigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import { white } from 'tailwindcss/colors';
import { disciplina } from '../../types/disciplina.d';

const SelecaoAssunto = () => {
  const navigation = useNavigation<NavigateInterface>()
  const route = useRoute()
  // @ts-ignore
  const params: disciplina = route.params

  return (
    <PageLayout>
      <View className='flex-1' style={{ gap: 24 }}>
        {params.assuntos.map((item) => (
          <Pressable key={item.id}
            onPress={() => navigation.navigate('selecao-nivel', item)}
            className='justify-center'
          >
            <View className='bg-blue-600 rounded-full p-8 self-end z-10' style={{ elevation: 5 }}>
              <LucideIcons name='plus' size={28} color={white} />
            </View>
            <View className='absolute w-full items-start rounded-full pl-4 pr-20 py-2 bg-blue-700' style={{ elevation: 5 }}>
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