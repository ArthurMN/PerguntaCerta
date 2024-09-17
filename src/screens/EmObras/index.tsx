import React from 'react';
import { Image, View } from 'react-native';
import PageLayout from '../../layout/PageLayout';

const EmObras = () => {
  return (
    <PageLayout>
      <View className='flex-1'>
        <Image
          resizeMode='contain'
          source={require('../../assets/trabalho-em-progresso.png')}
          style={{ width: '100%'}}
        />
      </View>
    </PageLayout>
  )
}

export default EmObras;