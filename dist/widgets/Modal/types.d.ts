export interface ModalTheme {
    background: string;
    modalBridgeBackground: string;
}
export declare type Handler = () => void;
export interface InjectedProps {
    onDismiss?: Handler;
}
