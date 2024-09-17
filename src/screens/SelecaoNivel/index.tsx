import React, { useEffect } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import PageLayout from '../../layout/PageLayout';
import Texto from '../../components/Texto';
import classNames from '../../utils/classNames';
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigateInterface from '../../interfaces/navigation';
import { assunto } from '../../types/assunto.d';
import LucideIcons from '../../utils/LucideIcons';
import { gray } from 'tailwindcss/colors';



type params = {
  item: assunto
  titulo: string
}


function groupItems(array: string[], itemsPerLine: 5) {
  const result = [];
  for (let i = 0; i < array.length; i += itemsPerLine) {
    const group = array.slice(i, i + itemsPerLine);
    while (group.length < itemsPerLine) {
      group.push('');
    }
    result.push(group);
  }
  return result;
}

const teste = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const SelecaoNivel = () => {
  const groupedItems = groupItems(teste, 5)
  const navigation = useNavigation<NavigateInterface>()
  const route = useRoute()
  // @ts-ignore
  const params: params = route.params
  const { item, titulo } = params
  const { niveis, assunto } = item

  // useEffect(() => {
  //   navigation.setOptions({ title: categoria })
  // }, [navigation])

  return (
    <PageLayout temHeader>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <View style={{ gap: 24 }}>
          <View style={{ gap: 20 }}>
            <Texto.ExtraGrande classNameTexto='text-white'>Iniciante</Texto.ExtraGrande>
            <View style={{ gap: 12 }}>
              {groupedItems.map((group, index) => (
                <View key={index} className='flex-row' style={{ gap: 12 }}>
                  {group.map((item, subIndex) => (
                    <Pressable
                      disabled={!(index === 0 && subIndex === 0)}
                      onPress={() => { navigation.navigate('perguntas', { fase: niveis[index].fases[subIndex], titulo: assunto }) }}
                      key={subIndex}
                      className={
                        classNames('flex-1 aspect-square items-center justify-center rounded-full p-4',
                          ((index === 0 && subIndex === 0)) ? 'bg-blue-600' : (item !== '') && 'bg-gray-600')
                      }
                    >
                      {(index === 0 && subIndex === 0) ?
                        <Texto.Medio classNameTexto='text-white'>{item}</Texto.Medio> :
                        <LucideIcons name='lock-key-hole' size={24} color={gray[200]} />
                      }
                    </Pressable>
                  ))}
                </View>
              ))}
            </View>
          </View>
          <View style={{ gap: 20 }}>
            <Texto.ExtraGrande classNameTexto='text-white'>Intermediário</Texto.ExtraGrande>
            <View style={{ gap: 12 }}>
              {groupedItems.map((group, index) => (
                <View key={index} className='flex-row' style={{ gap: 12 }}>
                  {group.map((item, subIndex) => (
                    <Pressable
                      key={subIndex}
                      disabled={!(index === 0 && subIndex === 0)}
                      onPress={() => { navigation.navigate('perguntas') }}
                      className={
                        classNames('flex-1 aspect-square items-center justify-center rounded-full p-4',
                          (item !== '') && 'bg-gray-600')
                      }
                    >
                      <LucideIcons name='lock-key-hole' size={24} color={gray[200]} />
                    </Pressable>
                  ))}
                </View>
              ))}
            </View>
          </View>
          <View style={{ gap: 20 }}>
            <Texto.ExtraGrande classNameTexto='text-white'>Avançado</Texto.ExtraGrande>
            <View style={{ gap: 12 }}>
              {groupedItems.map((group, index) => (
                <View key={index} className='flex-row' style={{ gap: 12 }}>
                  {group.map((item, subIndex) => (
                    <Pressable key={subIndex}
                      className={
                        classNames('flex-1 aspect-square items-center justify-center rounded-full p-4',
                          ((item !== '') && 'bg-gray-600'))
                      }
                    >
                      <LucideIcons name='lock-key-hole' size={24} color={gray[200]} />
                    </Pressable>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </PageLayout>
  )
}

export default SelecaoNivel;