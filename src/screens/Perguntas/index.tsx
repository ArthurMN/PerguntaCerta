import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { BackHandler, Button, FlatList, TouchableOpacity, View } from 'react-native';
import { fase } from '../../types/fase.d';
import PageLayout from '../../layout/PageLayout';
import { resposta } from '../../types/resposta.d';
import Texto from '../../components/Texto';
import classNames from '../../utils/classNames';
import Botao from '../../components/Botao';
import LucideIcons from '../../utils/LucideIcons';
import { amber, blue, gray } from 'tailwindcss/colors';
import Modal from '../../components/Modal';
import NavigateInterface from '../../interfaces/navigation';




type params = {
  fase: fase
  assunto: string
}

const Perguntas = () => {
  const navigation = useNavigation<any>();
  const route = useRoute()
  // @ts-ignore
  const params: params = route.params
  const [perguntaAtual, setPerguntaAtual] = useState<number>(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<resposta | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState<boolean>(false);
  const { fase, assunto } = params
  const { perguntas } = fase
  const [modalOpen, setModalOpen] = useState<boolean>(false)


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

  const handleConfirmarResposta = () => {
    if (respostaSelecionada !== null) {
      setMostrarResultado(true);
    }
  };

  const handleProximaPergunta = () => {
    setMostrarResultado(false);
    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
      setRespostaSelecionada(null);
    } else {
      setModalOpen(true)
      setTimeout(() => {
        setModalOpen(false)
        navigation.navigate('disciplinas')
      }, 2000)
    }
  };

  const respostaCorreta = perguntas[perguntaAtual].respostas.find(r => r.correta);

  return (
    <PageLayout padding={0}>
      <View className='py-8 flex-row items-center bg-slate-700 px-3' style={{ elevation: 5, gap: 12 }}>
        <LucideIcons name='square-pi' size={32} color={blue[600]} />
        <Texto.ExtraGrande classNameTexto='text-gray-100 text-left'>{assunto}</Texto.ExtraGrande>
      </View>
      {!mostrarResultado ? (
        <View className='flex-1 px-6'>
          <View className='flex-1 justify-end pb-16' style={{ gap: 20 }}>
            <Texto.ExtraGrande classNameTexto='text-blue-600 text-left flex-shrink'>{perguntas[perguntaAtual].id}º Questão</Texto.ExtraGrande>
            <Texto.Grande classNameTexto='text-white text-center flex-shrink'>{perguntas[perguntaAtual].pergunta}</Texto.Grande>
          </View>
          <View className='justify-end py-12'>
            <FlatList
              data={perguntas[perguntaAtual].respostas}
              contentContainerStyle={{ gap: 12 }}
              renderItem={({ item, index }) => {
                const letraOpcao = String.fromCharCode(65 + index)
                return (
                  <TouchableOpacity
                    className={classNames(
                      'flex-row items-center py-2 px-2 bg-slate-300 rounded-full',
                      (respostaSelecionada?.id === item.id) && 'bg-blue-600',
                    )}
                    onPress={() => setRespostaSelecionada(item)}
                  >
                    <View className={
                      classNames(
                        'w-14 items-center justify-center aspect-square rounded-full bg-blue-500',
                        (respostaSelecionada?.id === item.id) && 'bg-gray-100',
                      )}
                      style={{ elevation: 5 }}>
                      <Texto.Grande classNameTexto='font-bold'>{letraOpcao}</Texto.Grande>
                    </View>
                    <Texto.Grande classNameTexto={classNames(
                      'flex-1 font-bold text-gray-800 text-center',
                      (respostaSelecionada?.id === item.id) && 'text-gray-100',
                    )}>
                      {item.resposta}
                    </Texto.Grande>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          <Botao
            className='border-0 bg-blue-600 rounded-full my-6'
            style={{ elevation: 5 }}
            texto={'Confirmar'}
            classNameTexto='text-white font-bold'
            onPress={handleConfirmarResposta}
            tipo='padrao'
          />
        </View>
      ) : (
        <View className='flex-1 px-6'>
          <View className='flex-1 justify-end pb-16' style={{ gap: 20 }}>
            <Texto.ExtraGrande classNameTexto='text-blue-600 text-left flex-shrink'>{perguntas[perguntaAtual].id}º Questão</Texto.ExtraGrande>
            <Texto.Grande classNameTexto='text-white text-center flex-shrink'>
              {respostaSelecionada?.id === respostaCorreta?.id ? 'Parabéns, você acertou!' : 'Que pena, você errou!'}
            </Texto.Grande>
          </View>
          <View className='justify-end py-12'>
            <FlatList
              data={perguntas[perguntaAtual].respostas}
              contentContainerStyle={{ gap: 12 }}
              renderItem={({ item, index }) => {
                const letraOpcao = String.fromCharCode(65 + index)
                return (
                  <View
                    className={classNames(
                      'flex-row items-center py-2 px-2 bg-slate-300 rounded-full',
                      (respostaSelecionada?.id === item.id) && (item.correta ? 'bg-green-600' : 'bg-red-600'),
                      item.correta && 'bg-green-600',
                    )}
                  >
                    <View className={
                      classNames(
                        'w-14 items-center justify-center aspect-square rounded-full bg-blue-600 text-blue-600',
                        (item.correta) && 'bg-gray-100',
                      )}
                      style={{ elevation: 5 }}>
                      <Texto.Grande classNameTexto='font-bold '>{letraOpcao}</Texto.Grande>
                    </View>
                    <Texto.Grande classNameTexto={classNames(
                      'flex-1 font-bold text-gray-800 text-center',
                      (respostaSelecionada?.id === item.id) && 'text-gray-100',
                    )}>{item.resposta}</Texto.Grande>
                  </View>
                )
              }}
            />
          </View>
          <Botao
            className='border-0 bg-blue-600 rounded-full my-6'
            texto={'Avançar'}
            classNameTexto='text-white font-bold'
            onPress={handleProximaPergunta}
            tipo='padrao'
          />
        </View>
      )}

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Modal.Conteudo className='px-6 justify-center bg-black/25'>
          <Modal.Conteudo.Card customClass='items-center justify-center rounded-3xl p-4'>
            <Texto.ExtraGrande>Concluído</Texto.ExtraGrande>
          </Modal.Conteudo.Card>
        </Modal.Conteudo>
      </Modal>
    </PageLayout>
  )
}

export default Perguntas;