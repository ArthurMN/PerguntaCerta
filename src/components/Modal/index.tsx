import React, { ReactNode, useState } from 'react';
import { Modal as ModalReactNative, GestureResponderEvent, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import classNames from '../../utils/classNames';
import { globalStyle } from '../../styles/global';

type PropsMenuModal = {
    children: ReactNode;
    className?: string;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, className, modalOpen, setModalOpen}: PropsMenuModal) => {
    const modifiedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return (React.cloneElement(child, {modalOpen, setModalOpen} as any))
        }
        return child;
    });

    return (
        <View className={classNames('', className)}>
            {modifiedChildren}
        </View>
    )
}

type PropsMenuModalConteudo = {
    children: ReactNode
    className?: string
    style?: ViewStyle
}

const ModalConteudo = (props: PropsMenuModalConteudo) => {
    const { children, className, style } = props;
    const { modalOpen, setModalOpen } = props as any;
    const [viewClicked, setViewClicked] = useState<boolean>(false);

    const handleTouchableOpacityClick = () => {
        if (!viewClicked){
            setModalOpen && setModalOpen(false)
        }
        setViewClicked(false);
    };

    const modifiedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child))
            return React.cloneElement(child, { modalOpen, setModalOpen, setViewClicked } as any);

        return child;
    });

    return (
        <ModalReactNative
            animationType='fade'
            visible={modalOpen}
            transparent
            statusBarTranslucent
        >
            <TouchableWithoutFeedback className='flex-1' onPress={handleTouchableOpacityClick}>
                <View className={classNames('flex-1', className)} style={style}>
                    {modifiedChildren}
                </View>
            </TouchableWithoutFeedback>
        </ModalReactNative>
    )
}

type PropsModalConteudoCard = {
    children: ReactNode
    customClass?: string
    style?: ViewStyle
}

const ConteudoCard = (props: PropsModalConteudoCard) => {
    const { children, customClass, style } = props;
    const { setModalOpen, setViewClicked } = props as any;
    const modifiedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child))
            return React.cloneElement(child, { setModalOpen } as any);

        return child;
    });

    const handleViewClick = () => {
        setViewClicked(true);
    };

    return (
        <View
            className={classNames('bg-white p-4 rounded-md', customClass)}
            style={[globalStyle.dropShadow, { gap: 12 }, style]}
            onTouchStart={handleViewClick}>
            {modifiedChildren}
        </View>
    )

}

type PropsMenuModalConteudoOpcao = {
    children: ReactNode;
    onPress: Function;
    className?: string
    style?: ViewStyle
}

ConteudoCard.Opcao = (props: PropsMenuModalConteudoOpcao) => {
    const { onPress, children, className, style } = props;
    // Ignora erro typescript. setOpcoesOpen é um setState vindo de Opcoes. Não é necessário tipo específico no props.
    const { setModalOpen } = props as any;
    const handlePress = (e: GestureResponderEvent) => {
        e.stopPropagation();
        onPress()
        setModalOpen && setModalOpen(false);
    }
    return (
        <TouchableOpacity
            className={classNames('w-full items-center', className)}
            style={style}
            onPress={handlePress}>
            {children}
        </TouchableOpacity>
    )
}

Modal.Conteudo = ModalConteudo;
ModalConteudo.Card = ConteudoCard


export default Modal;