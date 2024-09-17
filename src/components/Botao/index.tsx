import React, { forwardRef, ReactNode } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import classNames from '../../utils/classNames';
import Texto from '../Texto';

type Props = {
    id?: string;
    onPress?: Function,
    carregando?: boolean,
    disabled?: boolean,
    tipo?: "erro" | "sucesso" | "padrao" | "aviso" | "impressao" | "informacao", //erro, aviso, sucesso, padrao, informacao
    texto?: string | JSX.Element,
    className?: string,
    classNameTexto?: string,
    style?: ViewStyle,
    children?: JSX.Element | Array<JSX.Element> | string | ReactNode;
    positionLabel?: "right" | "left" | "top" | "bottom";
    tamanhoTexto?: "extra-pequeno" | "pequeno" | "medio" | "grande" | "extra-grande";
    semSpaceX?: boolean
}

const Botao = forwardRef((props: Props, refs) => {
    const {
        id,
        onPress,
        carregando = false,
        disabled = false,
        tipo, //erro, aviso, sucesso, padrao, informacao
        texto,
        className = "",
        classNameTexto = "",
        children,
        positionLabel = "right",
        tamanhoTexto,
        semSpaceX,
        style
    } = props

    const positionLabelDesc = {
        "right": "flex-row justify-center",
        "left": "flex-row-reverse justify-center",
        "top": "flex-col-reverse justify-between",
        "bottom": "flex-col justify-between"
    }

    const getTexto = () => {
        if (tamanhoTexto == "extra-pequeno") return <Texto.ExtraPequeno classNameTexto={classNames(classNameTexto)}>{texto}</Texto.ExtraPequeno>;
        if (tamanhoTexto == "pequeno") return <Texto.Pequeno classNameTexto={classNames(classNameTexto)}>{texto}</Texto.Pequeno>;
        if (tamanhoTexto == "grande") return <Texto.Grande classNameTexto={classNames(classNameTexto)}>{texto}</Texto.Grande>;
        if (tamanhoTexto == "extra-grande") return <Texto.ExtraGrande classNameTexto={classNames(classNameTexto)}>{texto}</Texto.ExtraGrande>;
        return <Texto.Medio classNameTexto={classNames(classNameTexto)}>{texto}</Texto.Medio>;
    }

    return (
        <TouchableOpacity
            id={id}
            onPress={() => onPress && onPress()}
            className={classNames("relative items-center text-sm font-semibold flex-row text-opacity-80 rounded-lg disabled:cursor-not-allowed hover:text-opacity-100",
                carregando && "grayscale-[50%] cursor-not-allowed",
                tipo == "sucesso" && "bg-green-700 !text-white hover:bg-green-800 focus:ring-green-500",
                tipo == "erro" && "bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white",
                tipo == "padrao" && "border text-white focus:ring-white/10 border-white ",
                tipo == "aviso" && "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 text-white",
                tipo == "impressao" && "bg-gray-600 hover:bg-gray-500 focus:ring-gray-500 text-white",
                tipo == "informacao" && "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white",
                tipo != null && "p-4",
                positionLabelDesc[positionLabel],
                !semSpaceX && `space-x-2`,
                className,
            )}
            disabled={carregando || disabled}
            style={props.style}
        >
            <View>
                {!!texto && <View>{getTexto()}</View>}
                {children}
            </View>
        </TouchableOpacity>
    )
})

export default Botao;