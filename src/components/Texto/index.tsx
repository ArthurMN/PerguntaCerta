import { HTMLProps, ReactNode } from 'react';
import { Dimensions, Text, TextStyle } from 'react-native';
import { globalStyle } from '../../styles/global';
import classNames from '../../utils/classNames';

type Props = {
    children: ReactNode;
}

type PropsTexto = {
    classNameTexto?: HTMLProps<HTMLElement>["className"];
    onLayout?: any;
    numberOfLines?: number;
    bordasTexto?: boolean;
    shouldWrap?: boolean;
    fontModfier?: number;
    lineHeightModfier?: number;
} & Props;

export const getTamanhoFontBase = () => {
    let windowWidth = Dimensions.get("window").width;

    return (15 * windowWidth) / 320;
}

const Texto = () => { };

Texto.ExtraPequeno = ({ children, classNameTexto, numberOfLines, bordasTexto, onLayout, fontModfier = 0, lineHeightModfier = 0 }: PropsTexto) => { // text-xs
    const tamanhoFontBase = getTamanhoFontBase();
    const bordasTextoStyle = bordasTexto ? globalStyle.textBorder : {}

    return (
        <Text
            numberOfLines={numberOfLines}
            className={classNames("text-gray-800 font-normal", classNameTexto)}
            onLayout={onLayout}
            style={{
                fontSize: tamanhoFontBase - 6 + fontModfier,
                lineHeight: tamanhoFontBase + lineHeightModfier,
                ...bordasTextoStyle
            }}
        >
            {children}
        </Text>
    )
}

Texto.Pequeno = (
    {
        children,
        classNameTexto,
        numberOfLines,
        bordasTexto,
        style,
        shouldWrap = true,
        onLayout,
        fontModfier = 0,
        lineHeightModfier = 0
    }: PropsTexto & { style?: TextStyle }) => { // text-xs
    const tamanhoFontBase = getTamanhoFontBase();
    const bordasTextoStyle = bordasTexto ? globalStyle.textBorder : {}

    return (
        <Text
            numberOfLines={numberOfLines ? numberOfLines : shouldWrap ? undefined : 1}
            className={classNames("text-gray-800 font-normal", classNameTexto)}
            onLayout={onLayout}
            style={[style, {
                fontSize: tamanhoFontBase - 4 + fontModfier,
                lineHeight: tamanhoFontBase + lineHeightModfier,
                ...bordasTextoStyle
            }]}
        >
            {children}
        </Text>
    )
}

Texto.Medio = (
    {
        children,
        classNameTexto,
        numberOfLines,
        bordasTexto,
        onLayout,
        fontModfier = 0,
        lineHeightModfier = 0,
    }: PropsTexto) => { // text-base
    const tamanhoFontBase = getTamanhoFontBase();
    const bordasTextoStyle = bordasTexto ? globalStyle.textBorder : {}

    return (
        <Text
            numberOfLines={numberOfLines}
            className={classNames("text-gray-800 font-normal", classNameTexto)}
            onLayout={onLayout}
            style={{
                fontSize: tamanhoFontBase + fontModfier,
                lineHeight: tamanhoFontBase + 6 + lineHeightModfier,
                ...bordasTextoStyle
            }}
        >
            {children}
        </Text>
    )
}

Texto.Grande = ({
    children,
    classNameTexto,
    numberOfLines,
    bordasTexto,
    onLayout,
    fontModfier = 0,
    lineHeightModfier = 0,
}: PropsTexto) => { // text-xl
    const tamanhoFontBase = getTamanhoFontBase();
    const bordasTextoStyle = bordasTexto ? globalStyle.textBorder : {}

    return (
        <Text
            numberOfLines={numberOfLines}
            className={classNames("text-gray-800 font-normal", classNameTexto)}
            onLayout={onLayout}
            style={{
                fontSize: tamanhoFontBase + 4 + fontModfier,
                lineHeight: tamanhoFontBase + 12 + lineHeightModfier,
                ...bordasTextoStyle
            }}
        >
            {children}
        </Text>
    )
}

Texto.ExtraGrande = (
    {
        children,
        classNameTexto,
        numberOfLines,
        bordasTexto,
        onLayout,
        fontModfier = 0,
        lineHeightModfier = 0 }: PropsTexto) => { // text-2xl
    const tamanhoFontBase = getTamanhoFontBase();
    const bordasTextoStyle = bordasTexto ? globalStyle.textBorder : {}

    return (
        <Text
            numberOfLines={numberOfLines}
            className={classNames("text-gray-800 font-normal", classNameTexto)}
            onLayout={onLayout}
            style={{
                fontSize: tamanhoFontBase + 8 + fontModfier,
                lineHeight: tamanhoFontBase + 16 + lineHeightModfier,
                ...bordasTextoStyle
            }}
        >
            {children}
        </Text>
    )
}

Texto.Titulo = ({ children, classNameTexto, numberOfLines, bordasTexto, onLayout }: PropsTexto) => { // text-2xl
    const tamanhoFontBase = getTamanhoFontBase();
    const bordasTextoStyle = bordasTexto ? globalStyle.textBorder : {}

    return (
        <Text
            numberOfLines={numberOfLines}
            className={classNames("text-gray-800 font-normal", classNameTexto)}
            onLayout={onLayout}
            style={{
                fontSize: tamanhoFontBase + 16,
                lineHeight: tamanhoFontBase + 24,
                ...bordasTextoStyle
            }}
        >
            {children}
        </Text>
    )
}

export default Texto;