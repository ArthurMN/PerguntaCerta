import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import PageLayout from '../../layout/PageLayout';
import LucideIcons from '../../utils/LucideIcons';
import { white } from 'tailwindcss/colors';
import Texto from '../../components/Texto';
import { useNavigation } from '@react-navigation/native';
import NavigateInterface from '../../interfaces/navigation';
import { disciplina } from '../../types/disciplina.d';

// const dados = require('../../database/db.json')



const Disciplinas = () => {
  const navigation = useNavigation<NavigateInterface>()
  const [dados, setDados] = useState<disciplina[]>()

  useEffect(() => {
    const data = require('../../database/db.json')
    setDados(data);
  }, [])
  



  return (
    <PageLayout className=''>
      <View className='pt-20' style={{ gap: 24 }}>
        <Pressable onPress={() => navigation.navigate('em-obras')} className='justify-center'>
          <View className=' bg-green-600 rounded-full p-8 self-start z-10' style={{ elevation: 5 }}>
            <LucideIcons name='earth' size={28} color={white} />
          </View>
          <View className='absolute w-full items-end rounded-full px-4 py-2 bg-green-700' style={{ elevation: 5 }}>
            <Texto.ExtraGrande classNameTexto='text-gray-200'>
              Geografia
            </Texto.ExtraGrande>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('em-obras')} className='justify-center'>
          <View className='bg-stone-600 rounded-full p-8 self-start z-10' style={{ elevation: 5 }}>
            <LucideIcons name='scroll-text' size={28} color={white} />
          </View>
          <View className='absolute w-full items-end rounded-full px-4 py-2 bg-stone-700' style={{ elevation: 5 }}>
            <Texto.ExtraGrande classNameTexto='text-gray-200'>
              Historia
            </Texto.ExtraGrande>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('selecao-assunto', dados![0])} className='justify-center'>
          <View className='bg-blue-600 rounded-full p-8 self-start z-10' style={{ elevation: 5 }}>
            <LucideIcons name='percent' size={28} color={white} />
          </View>

          <View className='absolute w-full items-end rounded-full px-4 py-2 bg-blue-700' style={{ elevation: 5 }}>
            <Texto.ExtraGrande classNameTexto='text-gray-200'>
              Matemática
            </Texto.ExtraGrande>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('em-obras')} className='justify-center'>
          <View className='bg-red-600 rounded-full p-8 self-start z-10' style={{ elevation: 5 }}>
            <LucideIcons name='a-large-small' size={28} color={white} />
          </View>
          <View className='absolute w-full items-end rounded-full px-4 py-2 bg-red-700' style={{ elevation: 5 }}>
            <Texto.ExtraGrande classNameTexto='text-gray-200'>
              Português
            </Texto.ExtraGrande>
          </View>
        </Pressable>

      </View>
    </PageLayout>
  )
}

export default Disciplinas;