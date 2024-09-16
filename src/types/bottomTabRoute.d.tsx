export type bottomTabRoute = {
    name: string,
    component: (any: any) => JSX.Element,
    title?: string,
    showHeader?: boolean,
    showBackButton?: boolean,
    statusBarHidden?: boolean,
    statusBarStyle?: 'dark' | 'light',
    statusBarColor?: string,
    statusBarTranslucent?: boolean,
    tabBarLabel?: string,
    tabBarIcon?: string,
}