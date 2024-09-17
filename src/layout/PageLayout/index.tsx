import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import classNames from '../../utils/classNames';

type Props = {
    children: ReactNode,
    className?: string,
    style?: StyleProp<ViewStyle>,
    padding?: number,
    carregando?: boolean,
    mensagemCarregando?: string,
    temHeader?: boolean,
    keyBoardAvoidingView?: boolean,
}

const PageLayout = (props: Props) => {
    const {
        children,
        className,
        style,
        padding = 24,
        keyBoardAvoidingView,
        carregando,
        mensagemCarregando,
        temHeader,
    } = props
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                // @ts-ignore
                flex: 1,
            }}
            className={'flex-1'}
        >
            <KeyboardAvoidingView
                className={classNames('flex-1 bg-slate-800', className)}
                // @ts-ignore
                style={[{
                    paddingTop: insets.top + padding,
                    paddingBottom: insets.bottom + padding,
                    paddingLeft: insets.left + padding,
                    paddingRight: insets.right + padding,
                }, style]}
                behavior="padding"
                enabled={keyBoardAvoidingView}
            >
                {children}
            </KeyboardAvoidingView>
        </View>
    )
}


export default PageLayout