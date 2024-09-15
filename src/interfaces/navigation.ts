export interface RouteInterface<ParamsType> {
    params: ParamsType;
    key: string;
    name: string;
    path?: string | undefined;
}

type OptionsParams = {
    headerTitle: string;
}

export default interface NavigateInterface {
    navigate: (value: string, params?: Object) => void;
    reset: (resetProps: { index: number, routes: Array<{ name: string }> }) => void,
    canGoBack: () => boolean;
    setParams: (params: Object) => void;
    setOptions: (params: { headerRight?: () => JSX.Element } & OptionsParams & any) => void;
    goBack: (dados?: any) => void;
    addListener: (event: string, callback: Function) => void;
}