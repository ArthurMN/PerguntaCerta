import { HeaderButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export type stackRoute = {
    name: string,
    component: (any: any) => JSX.Element,
    title?: string,
    showHeader?: boolean,
    showBackButton?: boolean,
    statusBarHidden?: boolean,
    statusBarStyle?: 'dark' | 'light',
    statusBarColor?: string,
    statusBarTranslucent?: boolean,
    headerRight?: (props: HeaderButtonProps) => React.ReactNode,
    headerLeft?: (props: HeaderButtonProps) => React.ReactNode,
}